import React from 'react';
import firebase from 'firebase/app';
import 'firebase/storage';

const ImageUploader = () => {
  const handleImageUpload = async (e) => {
    const file = e.target.files[0]; // Get the selected file
    const storageRef = firebase.storage().ref();
    const fileRef = storageRef.child(file.name);
    await fileRef.put(file); // Upload the file to Firebase Storage
    console.log('Image uploaded!');
  };

  return (
    <div>
      <input type="file" onChange={handleImageUpload} />
    </div>
  );
};

export default ImageUploader;
