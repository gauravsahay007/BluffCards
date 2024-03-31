import React, { useState } from 'react';
import { createRoom } from '../Api/createRoom';
import { useSelector } from "react-redux";
import { useDispatch } from 'react-redux';
import { updateRoom } from '../features/userSlice';
import { useNavigate } from 'react-router-dom';
export default function CreateRoom() {
    const user = useSelector(state => state.user);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [values, setValues] = useState({
        name: "",
        createrID: user.uid
    });
    const handleCreateRoom = () => {
        createRoom(values).then((res) => {
            if(res){
                dispatch(updateRoom(res));
                navigate("/joinRoom");
            }
        });
    };

    return (
        <div className="bg-gray-200 min-h-screen flex justify-center items-center">
            <div className="bg-white p-8 rounded shadow-md">
                <h2 className="text-2xl font-bold mb-4">Create Room</h2>
                <input
                    type="text"
                    placeholder="Enter Room Name"
                    value={values.name}
                    onChange={(e) => setValues({
                        ...values,
                        name: e.target.value
                    })}
                    className="border border-gray-300 rounded px-3 py-2 mb-4 w-full"
                />
                <button
                    onClick={handleCreateRoom}
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                    Create
                </button>
            </div>
        </div>
    );
}
