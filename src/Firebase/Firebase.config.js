// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDw4a9PXHOSaOp3KpBi6Z0PegzHrs691EI",
  authDomain: "foods-share.firebaseapp.com",
  projectId: "foods-share",
  storageBucket: "foods-share.firebasestorage.app",
  messagingSenderId: "318179349326",
  appId: "1:318179349326:web:90859369174c8cd55fc41f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
