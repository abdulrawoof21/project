// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCEBtkCIp8s2_43h2rQm7rrbsRxuW_8XPk",
  authDomain: "tancet-9d238.firebaseapp.com",
  projectId: "tancet-9d238",
  storageBucket: "tancet-9d238.appspot.com",
  messagingSenderId: "931785871981",
  appId: "1:931785871981:web:d561c0422c2bfac5026564"
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0){
    app = firebase.initializeApp(firebaseConfig);
} else {
    app = firebase.app()
}

const auth = firebase.auth()

export { auth };