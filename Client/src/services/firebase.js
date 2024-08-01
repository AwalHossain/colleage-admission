// src/firebase.js
import { initializeApp } from "firebase/app";
import { GithubAuthProvider, GoogleAuthProvider, getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCFRqIjbpeh6rQk8CcE7-Rt1ON8mwcQGxY",
  authDomain: "college-admission-55c38.firebaseapp.com",
  projectId: "college-admission-55c38",
  storageBucket: "college-admission-55c38.appspot.com",
  messagingSenderId: "119482212786",
  appId: "1:119482212786:web:79379387eeff89a81944ab",
  measurementId: "G-G8JJ1YVP0F",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

export { auth, githubProvider, googleProvider };
