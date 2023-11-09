import React, { useState, useEffect } from 'react';
import { db } from '@/firebaseConfig'; 
import firebase from 'firebase/app'

interface Image {
  id: string;
  url: string;
  caption: string;
}


const DisplayImages: React.FC = () => {
    const [images, setImages] = useState<Image[]>([]);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const imagesCollectionRef = db.collection('images/'); // Access the Firestore collection
  
          const snapshot = await imagesCollectionRef.get();

      console.log('Snapshot:', snapshot);

    const imageList: Image[] = [];
    snapshot.forEach((doc: { data: () => Image; id: any; }) => {
      const data = doc.data() as Image;
      console.log('Data:', data);
      imageList.push({
        id: doc.id,
        url: data.url,
        caption: data.caption
      });
    });
    console.log('Image List:', imageList);
    setImages(imageList);
  } catch (error) {
    console.error('Error fetching images:', error);
  }
};
  
      fetchData();
    }, []);
  return (
    <div>
      <h1>Images from Firebase</h1>
      {images.length > 0 ? (
      images.map((image) => (
        <div key={image.id}>
          <img src={image.url} alt={image.caption} />
          <p>{image.caption}</p>
        </div>
      ))
    ) : (
      <p>No images available or error in fetching data</p>
    )}
    </div>
  );
};

export default DisplayImages;
