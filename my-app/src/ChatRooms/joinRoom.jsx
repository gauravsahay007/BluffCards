import React, { useState, useEffect } from 'react';
import { fetchRooms } from '../Api/fetchRooms';
import { useSelector } from "react-redux";
import { joinRoom } from '../Api/joinRoom';

export default function JoinRoom() {
  const user = useSelector(state => state.user);
  const joinId = user.uid;
  const [rooms, setRooms] = useState([]);
  const [values, setValues] = useState({
    userID : user.uid,
    roomID : ""
  })
  
  useEffect(() => {
    const fetchAllRooms = async () => {
      const fetchedRooms = await fetchRooms();
      fetchedRooms.forEach((doc) => {
        console.log(doc.id);
        setRooms(prevRooms => [...prevRooms, {
            id: doc.id,
            name: doc.data().name,
            users: doc.data().users
          }]);
      })
      
    };

    fetchAllRooms();
  }, []);

  const handleJoinRoom = async(roomId) => {
      await roomId 
      joinRoom(user.uid, roomId);
  };

  return (
    <div className="grid grid-cols-3 gap-4 p-4">
      {rooms.map(room => (
        <div 
          key={room.id} 
          className="bg-purple-500 text-white flex justify-center items-center rounded-md p-4 cursor-pointer"
          onClick={() => handleJoinRoom(room.id)} 
        >
          <div>
            <p className="font-bold">{room.name}</p>
            <p>Users: {room.users.length}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
