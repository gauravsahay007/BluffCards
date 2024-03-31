import React from 'react'
import { arrayUnion, getFirestore } from 'firebase/firestore'
const db = getFirestore();
import { collection, doc, getDocs, setDoc , updateDoc} from "firebase/firestore";
import { getDoc } from "firebase/firestore";
import app from "../firebase.jsx"
const roomCollection = collection(db, 'Rooms'); 

const fetchRooms = async() => {
    try{
        const querySnapshot = await getDocs(collection(db, "Rooms"));
        return querySnapshot;
    }
    catch(err){
        console.log(err);
    }
}

export {fetchRooms}