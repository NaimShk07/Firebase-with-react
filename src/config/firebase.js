
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
   apiKey: "AIzaSyAUW0nBRzhCW1LjAGt912OJqIJcdHoG3FA",
   authDomain: "fir-course-e0811.firebaseapp.com",
   projectId: "fir-course-e0811",
   storageBucket: "fir-course-e0811.appspot.com",
   messagingSenderId: "719587919233",
   appId: "1:719587919233:web:189642eb359f71d1f5d480",
   measurementId: "G-2Z3W7L4XZD"
};

const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app); // for deployment purpose

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db=getFirestore(app)