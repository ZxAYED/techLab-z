
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";



const firebaseConfig = {
  apiKey: "AIzaSyAmELyFzfp7XzXo8y5TDWpc45jID284Ugw",
  authDomain: "project-600de.firebaseapp.com",
  projectId: "project-600de",
  storageBucket: "project-600de.appspot.com",
  messagingSenderId: "1096916047216",
  appId: "1:1096916047216:web:3392dd302c3621e53d2bb5"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;