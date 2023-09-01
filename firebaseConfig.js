
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, getDoc, snapshotEqual } from "firebase/firestore"

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
const db = getFirestore()

//collection ref
const colRef = collection(db, 'curenimalData')

//get data from collection

getDoc(colRef)
.then((snapshot) => {
  console.log(snapshot.docs)
})