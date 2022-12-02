import firebase from "firebase";
require("@firebase/firestore");

var firebaseConfig = {
  apiKey: "AIzaSyCBXr01UTCZbcKx-8v1hVqyLS8tw670BP0",
  authDomain: "p-71-c958d.firebaseapp.com",
  projectId: "p-71-c958d",
  storageBucket: "p-71-c958d.appspot.com",
  messagingSenderId: "522377773818",
  appId: "1:522377773818:web:0e54751cb9f0ab40ff7f43"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
