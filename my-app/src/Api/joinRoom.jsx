import React from 'react'
import { arrayUnion, getFirestore } from 'firebase/firestore'
const db = getFirestore();
import { collection, doc, getDocs, setDoc , updateDoc} from "firebase/firestore";
import { getDoc } from "firebase/firestore";
import app from "../firebase.jsx"
const roomCollection = collection(db, 'Rooms'); 


const joinRoom = async(userID, roomID,roomName,roomUsers) => {
    const joinId = userID;
    const roomId = roomID;
    console.log(userID);
    if(userID == "") return null;
    try{
        const roomRef = doc(roomCollection, roomId);
        await updateDoc(roomRef, {
            users: arrayUnion(joinId) 
        });

        const docRef = doc(db, "Rooms", roomID);
        const docSnap = await getDoc(docRef);
        console.log(docSnap.data());
       return docSnap.data();
       

    }
    catch(err){
        console.log(err);
        return null;
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