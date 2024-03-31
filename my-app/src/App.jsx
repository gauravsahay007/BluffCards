import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SigninForm from "./Auth/signin";
import SignupForm from "./Auth/signup";
import CreateRoom from "./ChatRooms/createRoom";
import "./App.css"
import Dashboard from "./Pages/Dashboard.jsx";
import JoinRoom from "./ChatRooms/joinRoom.jsx";
import {useSelector } from "react-redux";
import Room from "./ChatRooms/Room.jsx";

const App = () => {
  const user = useSelector(state => state.user);
  const room = useSelector(state => state.room);
  console.log(user);
  console.log(room);
  return (
    <Router>
      <Routes>    
        <Route path="/signup" element={<SignupForm />} />
        <Route path="/signin" element={<SigninForm />} />
        <Route path="/createRoom" element={<CreateRoom/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/joinRoom" element={<JoinRoom/>}/>
        <Route path="/room" element={<Room/>}/>
      </Routes>
    </Router>
  );
};

export default App;
