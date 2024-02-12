import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getDatabase } from "firebase/database";


const firebaseConfig = {
  apiKey: "AIzaSyDNe2Cbt7wAaOd9uPQDIOfx7BySbBQlwYI",
  authDomain: "stussy-fc5f0.firebaseapp.com",
  projectId: "stussy-fc5f0",
  storageBucket: "stussy-fc5f0.appspot.com",
  messagingSenderId: "356576828789",
  appId: "1:356576828789:web:61dc32f6f0455f8b0d473c",
  measurementId: "G-SL74FQZDNM",
  databaseURL: "https://stussy-fc5f0-default-rtdb.firebaseio.com/",
};

export const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)
export const db = getFirestore();
export const database = getDatabase(app)