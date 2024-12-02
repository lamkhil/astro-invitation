
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAbhIazCURrlpmnNvftB387l2ZPcmWreX0",
  authDomain: "mikesuhandani.firebaseapp.com",
  projectId: "mikesuhandani",
  storageBucket: "mikesuhandani.firebasestorage.app",
  messagingSenderId: "831997700388",
  appId: "1:831997700388:web:0f6ce07413774076b3ebb1",
  measurementId: "G-8S88NG3HV8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);

