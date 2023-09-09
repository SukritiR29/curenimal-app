
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, getDoc, doc, snapshotEqual } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAmEN37SlmRFYxC86VPcuf4YF2mr8NjS6E",
  authDomain: "curenimal-next.firebaseapp.com",
  projectId: "curenimal-next",
  storageBucket: "curenimal-next.appspot.com",
  messagingSenderId: "87145746531",
  appId: "1:87145746531:web:f3f3a715d61f9059452856",
  measurementId: "G-GEJNK4L6NQ"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

// Specify the document you want to fetch by its path or reference
const docRef = doc(db, 'curenimalData', 'bird-bb');

// Fetch the document data
getDoc(docRef)
  .then((snapshot) => {
    if (snapshot.exists()) {
      const data = snapshot.data();
      console.log(data);
    } else {
      console.log('Document does not exist');
    }
  })
  .catch((error) => {
    console.error("Error getting document:", error);
  });

  export default db;