import React, { useState, useEffect } from 'react';
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { doc, setDoc, Timestamp, collection } from 'firebase/firestore';
import { db } from '@/firebaseConfig'; 

const ImageUpload = () => {
  const [picSelected, setPicSelected] = useState(null);
  const [caption, setCaption] = useState('');
  const [uploadProgress, setUploadProgress] = useState(0);          
  const [downloadURL, setDownloadURL] = useState('');
  const storage = getStorage();

  useEffect(() => {
    if (picSelected) {
      const storage = getStorage();
      const storageRef = ref(storage, `images/${picSelected.name}`);
      const uploadTask = uploadBytesResumable(storageRef, picSelected);
      const imageCollectionRef = collection(db, 'images');
      
      uploadTask.on('state_changed',
      (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setUploadProgress(progress);
      },
      (error) => {
        console.error('Error during upload: ', error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then(async (url) => {
          setDownloadURL(url);
          try {
            const imageCollectionRef = collection(db, 'images');
            await addDoc(imageCollectionRef, {
              url,
              caption,
              uploadedAt: Timestamp.fromDate(new Date())
            });
          } catch (error) {
            console.error('Error adding document: ', error);
          }
        });
      }
    );
  }
}, [picSelected, storage, caption, db]);

  const handleUpload = (e) => {
    e.preventDefault();
    if (picSelected) {
      setPicSelected(picSelected);
    } else {
      alert('Please select an Image');
    }
  };

  return (
    <div className='flex gap-5 flex-column'>
      <form onSubmit={handleUpload} className="flex flex-row">
        <div className="flex items-center">
        <input placeholder='Select Picture'
        className="file-input file-input-bordered file-input-accent w-full max-w-xs text-stone-500 ml-10" 
         type="file" onChange={(e) => setPicSelected(e.target.files[0])}/>
         </div>
         <div className="flex items-center">
        <textarea value={caption} 
        onChange={(e) => setCaption(e.target.value)} 
        placeholder='Caption'
        className="textarea textarea-accent h-10 ml-10 text-stone-500" />
        </div>
        <div className='flex items-center'>
        <button type="submit" onClick={setUploadProgress} className="btn btn-accent text-neutral-focus ml-10">Upload</button>
        </div>
      </form>

      {downloadURL && (
        <div>
          <img src={downloadURL} alt="Uploaded Pic" />
          <p>{caption}</p>
        </div>
      )}

      {uploadProgress > 0 && (
        <div>
          <p>Uploading... {uploadProgress}%</p>
        </div>
      )}
    </div>
  );
};

export default ImageUpload;
