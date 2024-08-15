import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC8DQOFvkQisskPMxjdaAzibNkxt7M50t0",
  authDomain: "timer-34a87.firebaseapp.com",
  projectId: "timer-34a87",
  storageBucket: "timer-34a87.appspot.com",
  messagingSenderId: "828508819886",
  appId: "1:828508819886:web:77a74fd4d5904c353f783f"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore();
export const storage = getStorage();