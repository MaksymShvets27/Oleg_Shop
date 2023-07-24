import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import "firebase/storage";
import "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBmhSj68D2sMSrJIsS8Kz2I6_aoOMX8a88",
  authDomain: "oleg-shop-da014.firebaseapp.com",
  projectId: "oleg-shop-da014",
  storageBucket: "oleg-shop-da014.appspot.com",
  messagingSenderId: "289803579666",
  appId: "1:289803579666:web:6f92cb960eed0ea061c3cb",
  measurementId: "G-TXR6LBVXR3",
};

const app = initializeApp(firebaseConfig);

const storage = getStorage(app);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, storage, db };
