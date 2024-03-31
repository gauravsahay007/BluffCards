import React from 'react'
import { getFirestore } from 'firebase/firestore'
const db = getFirestore();
import { collection, doc, getDocs, setDoc ,query,where} from "firebase/firestore";
import { getDoc } from "firebase/firestore";
import app from "../firebase.jsx"
const roomCollection = collection(db, 'Rooms'); 
import {v4 as uuid} from "uuid"

const createRoom = async(values) => {
    const unique_id = uuid();
    const small_id = unique_id.slice(0,8);

    const room = {
        name: values.name,
        users : [values.createrID]
    }

    try{
        await setDoc(doc(roomCollection, small_id),room); 
        const docRef = doc(db, "Rooms", small_id);
        const docSnap = await getDoc(docRef);
       return docSnap.data();
        
    }
    catch(err){
        console.error("Error creating a room");
        return null;
    }
}


export  {createRoom};