import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBVYAXlwqUMRmiveUs8ciSf0ogwpFaaaFHmwk",
  authDomain: "crud-fb554.firqaaaebaseapp.com",
  projectId: "crud-fbssas554",
  storageBucket: "crud-fb554.appspsasaot.com",
  messagingSenderId: "812609513460",
  appId: "1:812609513460:web:6f8be65ec22af67f86bbaaaaa1",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
