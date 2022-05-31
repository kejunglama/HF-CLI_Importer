import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA4xocWlRUusbZkCUZd_BZskapjJInSoXI",
  authDomain: "siteux-healthfix.firebaseapp.com",
  projectId: "siteux-healthfix",
  storageBucket: "siteux-healthfix.appspot.com",
  messagingSenderId: "585923097949",
  appId: "1:585923097949:web:454c7a8756e5067e8ce4b4",
  measurementId: "G-DL3T0SBVXV",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
