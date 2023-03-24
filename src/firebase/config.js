import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; 

const firebaseConfig = {
  apiKey: "AIzaSyAJhjrFXzPsDtuGq9qF8fxORg5ubCQNWXc",
  authDomain: "bdm-3010.firebaseapp.com",
  projectId: "bdm-3010",
  storageBucket: "bdm-3010.appspot.com",
  messagingSenderId: "576995660685",
  appId: "1:576995660685:web:ea352820344ed56b5763c4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };