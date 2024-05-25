// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDoShWGHqFu4i0PT4nJETxAGwLFHL44Aew",
  authDomain: "netflixgpt-7a0cc.firebaseapp.com",
  projectId: "netflixgpt-7a0cc",
  storageBucket: "netflixgpt-7a0cc.appspot.com",
  messagingSenderId: "783468622522",
  appId: "1:783468622522:web:7b15781325053dd248c883",
  measurementId: "G-HGTN36C9LK",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
