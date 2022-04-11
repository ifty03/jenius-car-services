// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBh7dlwqTjy4w7Va1WCF2YJy01C6iq_uWQ",
  authDomain: "jenius-car-services.firebaseapp.com",
  projectId: "jenius-car-services",
  storageBucket: "jenius-car-services.appspot.com",
  messagingSenderId: "69220377650",
  appId: "1:69220377650:web:28050eaa9389433dd4c82b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
