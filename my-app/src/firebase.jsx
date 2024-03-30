import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
    apiKey: "AIzaSyBZf9H7RCT6dk2grfn4CpyqnEy0DgNv72Q",
    authDomain: "codehub-403113.firebaseapp.com",
    projectId: "codehub-403113",
    storageBucket: "codehub-403113.appspot.com",
    messagingSenderId: "48349157012",
    appId: "1:48349157012:web:434c06383467397d14c681",
    measurementId: "G-CL20C4085Y",
    databaseURL: "https://codehub-403113-default-rtdb.firebaseio.com"
    
  };
//connect firebase app to our application
const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);
export const storage = getStorage(app);

export default app;