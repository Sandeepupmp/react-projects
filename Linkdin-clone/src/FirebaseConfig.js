// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyApK5ooDGN8Y79RxJBFzk72QV9xvpDYaGU",
  authDomain: "linkdin-clone-a0284.firebaseapp.com",
  projectId: "linkdin-clone-a0284",
  storageBucket: "linkdin-clone-a0284.appspot.com",
  messagingSenderId: "886703436132",
  appId: "1:886703436132:web:18cf2dfdaf9b183a2a4a71"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export {app, auth} ;