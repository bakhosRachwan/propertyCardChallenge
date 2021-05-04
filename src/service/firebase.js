import firebase from "firebase/app";
import "firebase/firestore";
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAdIDNdo9XvEXsJnQyztHkD4Ar66Y_FTts",
    authDomain: "propertycard-20161.firebaseapp.com",
    projectId: "propertycard-20161",
    storageBucket: "propertycard-20161.appspot.com",
    messagingSenderId: "787918756510",
    appId: "1:787918756510:web:535fffce02333fd6f5398f"
  };

  firebase.initializeApp(firebaseConfig);

  export default firebase;