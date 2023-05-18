// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCGB2bBNAcuMQ6FatBpVgL4CfccoFVnl2Q",
  authDomain: "toy-marketplace-assignment.firebaseapp.com",
  projectId: "toy-marketplace-assignment",
  storageBucket: "toy-marketplace-assignment.appspot.com",
  messagingSenderId: "918690810886",
  appId: "1:918690810886:web:5efe8585ff224826da4787"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;