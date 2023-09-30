import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAI2DHd5rrmaKGOgPeHoivxU7FatU9GKOQ",
  authDomain: "chatgpt-feca6.firebaseapp.com",
  projectId: "chatgpt-feca6",
  storageBucket: "chatgpt-feca6.appspot.com",
  messagingSenderId: "408450832807",
  appId: "1:408450832807:web:a335199c05875a1830fe82",
  measurementId: "G-M1W2ZMKLR1",
};

// Initialize Firebase
const app = getApps.length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
