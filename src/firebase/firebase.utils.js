import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBde8dxmSMUCP4wD3za3cibCJpc1PcRZBw",
  authDomain: "crwn-clothing-883d9.firebaseapp.com",
  databaseURL: "https://crwn-clothing-883d9.firebaseio.com",
  projectId: "crwn-clothing-883d9",
  storageBucket: "crwn-clothing-883d9.appspot.com",
  messagingSenderId: "198019539917",
  appId: "1:198019539917:web:cb39f61499e0f4f9ca9a84"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
