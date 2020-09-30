import firebase from "firebase/app";

import "firebase/auth";

firebase.initializeApp({
  // apiKey: process.env.REACT_APP_API_KEY,
  // authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  // databaseURL: process.env.REACT_APP_DATABASE_URL,
  // projectId: process.env.REACT_APP_PROJECT_ID,
  // storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  // messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  // appId: process.env.REACT_APP_APP_ID,

  apiKey: "AIzaSyD6EXRtGb2AxUJlIAT7LvhR_XSYNFs_n40",
  authDomain: "fede-nowback.firebaseapp.com",
  databaseURL: "https://fede-nowback.firebaseio.com",
  projectId: "fede-nowback",
  storageBucket: "fede-nowback.appspot.com",
  messagingSenderId: "540227338176",
  appId: "1:540227338176:web:0d452e1975e3b3fb0e9225"
});

const auth = firebase.auth();
const providers = {
  google: new firebase.auth.GoogleAuthProvider(),
};

export { auth, providers };
export default firebase;
