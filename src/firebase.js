// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCquPh33_G4UQNIlbEMeDGlNv5NXL8rcLs",
  authDomain: "authentication-authoriza-dbbcc.firebaseapp.com",
  projectId: "authentication-authoriza-dbbcc",
  storageBucket: "authentication-authoriza-dbbcc.firebasestorage.app",
  messagingSenderId: "998161656350",
  appId: "1:998161656350:web:19b8fdd8340c98c4cf5c0f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;