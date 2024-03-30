//imports
import { collection, doc, getDocs, setDoc ,query,where} from "firebase/firestore";
import { getDoc } from "firebase/firestore";
import { getFirestore } from "firebase/firestore";
import app from "../firebase.jsx"
import { signOut } from "firebase/auth";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

const db = getFirestore();
const usersCollection = collection(db, 'Users'); 

const registerUser = async (values) => {
   const auth = getAuth();
    
    const { name, email, password, pic, cards } = values;
    try {
        
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        console.log(user);
        if (user) {
            localStorage.setItem('user', JSON.stringify(user));
            const token = await user.getIdToken();
            localStorage.setItem('token', token);
            
            const userData = {
                uid: user.uid,
                name: name,
                email: email,
                pic: pic || 'dhttps://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg',
                cards : cards || [],
            };
            
            await setDoc(doc(usersCollection, name), userData);
            return userData;
        } else {
            console.error("Error registering user: User object is undefined");
            console.log("Failed to register user");
            return null;
        }
    } catch (error) {
        console.error("Error registering user:", error.code, error.message);
        console.log("Failed to register user");
    }
};


const signin = async (values) => {
   
    const { email, password } = values;
    const auth = getAuth();
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        // console.log("User signed in successfully:", user);
        if(user){
            localStorage.setItem('user',JSON.stringify(user));
            const token=await user.getIdToken();
            const q = query(usersCollection, where("uid", "==", user.uid));

            const querySnapshot = await getDocs(q);
            
            localStorage.setItem('token',token);
            return querySnapshot;
        }
        // Perform any additional actions after successful sign-in
    } catch (error) {
        console.error("Error signing in:", error.code, error.message);
        return null;
        // Handle sign-in error appropriately
    }
}
   
    const signout = async () => {
      
        try {
          const auth = getAuth();
          await signOut(auth);
          console.log("User Signed Out..");
        } catch (err) {
          console.error("Error signing off", err);
        }
      }



export  { registerUser, signin,signout};