import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCOiOOPsz5q8E1ogcSVpYTo_pafsRc9Cco",
  authDomain: "bluezone-624ce.firebaseapp.com",
  projectId: "bluezone-624ce",
  storageBucket: "bluezone-624ce.appspot.com",
  messagingSenderId: "928186515153",
  appId: "1:928186515153:web:7c3beca519ca71dede4ff0",
  measurementId: "G-PFK6VE0KTD"
};

const app = initializeApp(firebaseConfig)
const auth = getAuth()
const db = getFirestore()

export { auth, db }