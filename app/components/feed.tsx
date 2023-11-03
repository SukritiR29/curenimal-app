import React, { useState, useEffect } from 'react';
import { collection, getDocs, DocumentData } from 'firebase/firestore';
import { db } from '@/firebaseConfig'; // Import your Firestore db

interface Image {
  id: string;
  url: string;
  caption: string;
  // Add any additional fields here if present in your Firestore document
}

const ImageGallery: React.FC = () => {
  const [imageData, setImageData] = useState<Image[]>([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const imagesCollection = collection(db, 'images');
        const querySnapshot = await getDocs(imagesCollection);
        const images: Image[] = [];
        querySnapshot.forEach((doc) => {
          images.push({ id: doc.id, ...doc.data() } as Image);
        });
        setImageData(images);
      } catch (error) {
        console.error('Error fetching images: ', error);
      }
    };
    fetchImages();
  }, []);

  return (
    <div>
      <h2>Image Gallery</h2>
      {imageData.map((image) => (
        <div key={image.id}>
          <img src={image.url} alt="Uploaded Pic" />
          <p>{image.caption}</p>
        </div>
      ))}
    </div>
  );
};

export default ImageGallery;
