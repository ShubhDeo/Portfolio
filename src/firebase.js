import firebase from 'firebase'
import 'firebase/database'


const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH,
    projectId: process.env.REACT_APP_PROJECT,
    storageBucket: "portfolio-cfb60.appspot.com",
    messagingSenderId: "787594162277",
    appId: "1:787594162277:web:890ca40ca88cce83cd568c",
    measurementId: "G-V832J167LZ"

};


// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default firebase;