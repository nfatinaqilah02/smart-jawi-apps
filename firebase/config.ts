import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBByCiUmdoFmMkOOUOoabRXim7hNcPIP-E",
  authDomain: "smart-jawi-f5ed4.firebaseapp.com",
  projectId: "smart-jawi-f5ed4",
  storageBucket: "smart-jawi-f5ed4.firebasestorage.app",
  messagingSenderId: "916355737307",
  appId: "1:916355737307:web:ff09522acfc2d53b828efe"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);