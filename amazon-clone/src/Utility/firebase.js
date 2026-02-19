import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyA4405Fpo_PCINTZovz0w9y7aYMQRTxxEc",
  authDomain: "amzon-clone-2025.firebaseapp.com",
  projectId: "amzon-clone-2025",
  storageBucket: "amzon-clone-2025.firebasestorage.app",
  messagingSenderId: "604094674022",
  appId: "1:604094674022:web:49b0fe7907726127e269a7",
  measurementId: "G-WMYGYQNBWB"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;

