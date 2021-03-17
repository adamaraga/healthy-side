import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyDCLeaccaKDiTsxqoXBOmsIOOv6Y_J7CJY",
    authDomain: "healthy-side.firebaseapp.com",
    projectId: "healthy-side",
    storageBucket: "healthy-side.appspot.com",
    messagingSenderId: "173400668259",
    appId: "1:173400668259:web:439fe47e5c13ee7919e056",
    measurementId: "G-300KKCD3CL"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  // firebase.analytics();
  firebase.firestore().settings({ timeStampInSnapshots: true });

  export default firebase;