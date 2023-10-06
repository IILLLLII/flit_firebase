// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAn1ouhb0h52YRn8DYDPPJxlOi-WZ_K7Zs",
  authDomain: "flit-data.firebaseapp.com",
  projectId: "flit-data",
  storageBucket: "flit-data.appspot.com",
  messagingSenderId: "515974364070",
  appId: "1:515974364070:web:8a6a110e2fbfd3f21c2d67",
  measurementId: "G-YG4FMB2YL1"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const db = getFirestore(app);
export const storage = getStorage(app);