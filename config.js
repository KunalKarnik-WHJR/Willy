import * as firebase from 'firebase'
require('@firebase/firestore')

var firebaseConfig = {
    apiKey: "AIzaSyDIdUaRcmz9UJJaWYN7JM1QR-OqeCGAhq8",
    authDomain: "money-f967c.firebaseapp.com",
    databaseURL: "https://money-f967c-default-rtdb.firebaseio.com",
    projectId: "money-f967c",
    storageBucket: "money-f967c.appspot.com",
    messagingSenderId: "102570142847",
    appId: "1:102570142847:web:f1613d81773a13d88ae34a",
    measurementId: "G-TNESWYBWEL"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();