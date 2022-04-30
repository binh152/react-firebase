import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: process.env.FIREBASE_KEY,
  authDomain: "reactapp-fb72b.firebaseapp.com",
  projectId: "reactapp-fb72b",
  storageBucket: "reactapp-fb72b.appspot.com",
  messagingSenderId: "914708040377",
  appId: "1:914708040377:web:fe26618495866e18822968",
};

const app = initializeApp(firebaseConfig);
