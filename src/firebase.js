import firebase from "firebase";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCyRkQwDTzHi4vEv3iRRpt-FhSBc9XX4hg",
  authDomain: "portfolio-website-c47c7.firebaseapp.com",
  projectId: "portfolio-website-c47c7",
  storageBucket: "portfolio-website-c47c7.appspot.com",
  messagingSenderId: "370233719500",
  appId: "1:370233719500:web:ed37022f2b3fd28056a069",
};

firebase.initializeApp(firebaseConfig);

export default firebase;

export const { db } = firebase.database();
