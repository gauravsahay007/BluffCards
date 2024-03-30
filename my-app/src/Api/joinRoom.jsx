import React from 'react'
import { arrayUnion, getFirestore } from 'firebase/firestore'
const db = getFirestore();
import { collection, doc, getDocs, setDoc , updateDoc} from "firebase/firestore";
import { getDoc } from "firebase/firestore";
import app from "../firebase.jsx"
const roomCollection = collection(db, 'Rooms'); 


const joinRoom = async(userID, roomID) => {
    const joinId = userID;
    const roomId = roomID;
    try{
        const roomRef = doc(roomCollection, roomId);
        await updateDoc(roomRef, {
            users: arrayUnion(joinId)
        });
    }
    catch(err){
        console.log(err);
    }

}

const leaveRoom = async(values) => {
    const removeId = values.ID;
    try{
        const roomRef = doc(roomCollection, roomId);
        await updateDoc(roomRef, {
            users: arrayRemove(userId)
        });
    }
    catch(err){
        console.log(err);
    }
}

export{joinRoom, leaveRoom};