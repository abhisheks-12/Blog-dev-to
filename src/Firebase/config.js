import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  // paste firebase config here
  
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
