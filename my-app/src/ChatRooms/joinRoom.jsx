import React, { useState, useEffect } from 'react';
import { fetchRooms } from '../Api/fetchRooms';
import { useSelector } from "react-redux";
import { joinRoom } from '../Api/joinRoom';
import { useDispatch } from 'react-redux';
import { updateRoom } from '../features/userSlice';
import { useNavigate } from 'react-router-dom';
export default function JoinRoom() {
  const user = useSelector(state => state.user);
  const joinId = user.uid;
  const navigate = useNavigate();
  const dispatch = useDispatch(); 
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

  const handleJoinRoom = async(roomId,roomName,roomUsers) => {
      await roomId 
      await roomName
      await roomUsers
      console.log("hello");
      joinRoom(user.uid, roomId,roomName,roomUsers).then((res)=>{
       if(res)   {
        console.log(res);
        dispatch(updateRoom(res))
        navigate("/room");
       }
      });
  };

  return (
    <div className="grid grid-cols-3 gap-4 p-4">
      {rooms.map(room => (
        <div 
          key={room.id} 
          className="bg-purple-500 text-white flex justify-center items-center rounded-md p-4 cursor-pointer"
          onClick={() => handleJoinRoom(room.id,room.name,room.users)} 
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
