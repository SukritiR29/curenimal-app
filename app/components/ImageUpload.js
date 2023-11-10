import React, { useState, useEffect } from 'react';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { doc, setDoc, Timestamp } from 'firebase/firestore';
import { db } from '@/firebaseConfig'; // Import your Firestore db

const ImageUpload = () => {
  const [picSelected, setPicSelected] = useState(null);
  const [caption, setCaption] = useState('');
  const [uploadProgress, setUploadProgress] = useState(0);
  const [downloadURL, setDownloadURL] = useState('');
  const storage = getStorage();

  useEffect(() => {
    if (picSelected) {
      const imageRef = ref(storage, `images/${picSelected.name}`);
      uploadBytes(imageRef, picSelected)
        .then((snapshot) => {
          getDownloadURL(snapshot.ref).then(async (url) => {
            setDownloadURL(url);
            try {
              const imageDocRef = doc(db, 'images');
              await setDoc(imageDocRef, {
                url,
                caption,
                uploadedAt: Timestamp.fromDate(new Date())
              });
            } catch (error) {
              console.error('Error adding document: ', error);
            }
          });
        })
        .catch((error) => {
          console.error('Error uploading image: ', error);
        });
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
    <div className='lg:flex gap-5 flex-column'>
      {/* <h1 className='pt-2 font-mono font-black text-lg align-center text-stone-100 ml-10'>Upload Picture</h1> */}
      <form onSubmit={handleUpload} className="lg:flex lg:flex-row">
        <div className="lg:flex items-center mb-5 ">
        <input placeholder='Select Picture'
        className="file-input file-input-bordered file-input-accent w-full max-w-xs text-stone-500 ml-10" 
         type="file" onChange={(e) => setPicSelected(e.target.files[0])}/>
         </div>
         <div className="flex items-center mb-5">
        <textarea value={caption} 
        onChange={(e) => setCaption(e.target.value)} 
        placeholder='Caption'
        className="textarea textarea-accent h-10 ml-10 text-stone-500" />
        </div>
        <div className='flex items-center'>
        <button type="submit" className="btn btn-accent text-neutral-focus ml-10">Upload</button>
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
