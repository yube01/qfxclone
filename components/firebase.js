import {getauth,GoogleAuthProvider} from "firebase/auth"
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyALDlfuAYKy7yjN74JgLKAM4bVNTTWbNVo",
  authDomain: "qfx-clone.firebaseapp.com",
  projectId: "qfx-clone",
  storageBucket: "qfx-clone.appspot.com",
  messagingSenderId: "980847094594",
  appId: "1:980847094594:web:dfd05f35a8b67472fa36db"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getauth()
export const provider = new GoogleAuthProvider()

export default app