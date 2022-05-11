import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBaD64nuBHgRf9Xqm4eGVflHU4DFOU6bKg",
  authDomain: "reactapp-fb72b.firebaseapp.com",
  projectId: "reactapp-fb72b",
  storageBucket: "reactapp-fb72b.appspot.com",
  messagingSenderId: "914708040377",
  appId: "1:914708040377:web:fe26618495866e18822968"
};

const app = initializeApp ( firebaseConfig );
export const storage = getStorage(app);
export const db = getFirestore(app);
export const auth = getAuth()

