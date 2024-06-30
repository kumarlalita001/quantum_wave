import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  // apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  // authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  // projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  // storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  // messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  // appId: import.meta.env.VITE_FIREBASE_APP_ID,
  // measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
  apiKey: "AIzaSyCrjLoXxAM_5asEP5I4UggHGDMFU_JZgJA",
  authDomain: "quantum-001.firebaseapp.com",
  projectId: "quantum-001",
  storageBucket: "quantum-001.appspot.com",
  messagingSenderId: "162275541867",
  appId: "1:162275541867:web:9a4e17ce4f6202b139422e",
  measurementId: "G-M4S83DXY8B",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, auth, firestore, storage };

/*

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCrjLoXxAM_5asEP5I4UggHGDMFU_JZgJA",
  authDomain: "quantum-001.firebaseapp.com",
  projectId: "quantum-001",
  storageBucket: "quantum-001.appspot.com",
  messagingSenderId: "162275541867",
  appId: "1:162275541867:web:9a4e17ce4f6202b139422e",
  measurementId: "G-M4S83DXY8B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

*/
