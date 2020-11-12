import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyA7o6HB0GdBzgre4qX_XDHjXJ2J01rngjY",
  authDomain: "crwn-db-2c803.firebaseapp.com",
  databaseURL: "https://crwn-db-2c803.firebaseio.com",
  projectId: "crwn-db-2c803",
  storageBucket: "crwn-db-2c803.appspot.com",
  messagingSenderId: "884397889666",
  appId: "1:884397889666:web:a88a4b0aa8f718b296fc9b",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;