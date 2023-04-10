// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, Firestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAlHGLrr8u6N4cI1SgRtjsZsl-7rYATUAQ",
  authDomain: "labormate-f64aa.firebaseapp.com",
  projectId: "labormate-f64aa",
  storageBucket: "labormate-f64aa.appspot.com",
  messagingSenderId: "50261267730",
  appId: "1:50261267730:web:d126ede668059b6a164fcb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const employeeRef = collection(db, "employees")

export default app;