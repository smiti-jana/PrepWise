// Import the functions you need from the SDKs you need
import { initializeApp,getApp,getApps } from "firebase/app";
import  {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'
const firebaseConfig = {
    apiKey: "AIzaSyDA8RsmHlqKeviVzKr6gdDbxVbshsaV1Hs",
    authDomain: "prepinterview-8fd1f.firebaseapp.com",
    projectId: "prepinterview-8fd1f",
    storageBucket: "prepinterview-8fd1f.firebasestorage.app",
    messagingSenderId: "122360919219",
    appId: "1:122360919219:web:e30816265426abb3a16cc6",
    measurementId: "G-Y2T1XZJ8E3"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig):getApp();
export const auth=getAuth(app)
export const db=getFirestore(app)