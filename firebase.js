// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAGYN-Ch7byRv-iU0AJOFpGCo7GyhQN_a8",
  authDomain: "fadet-f6774.firebaseapp.com",
  projectId: "fadet-f6774",
  storageBucket: "fadet-f6774.appspot.com",
  messagingSenderId: "9691783023",
  appId: "1:9691783023:web:fb5d4590a4b87c4104529a",
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const auth = firebase.auth();

export { auth };
