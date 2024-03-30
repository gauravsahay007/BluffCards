import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SigninForm from "./Auth/signin";
import SignupForm from "./Auth/signup";
import CreateRoom from "./ChatRooms/createRoom";
import "./App.css"
import Dashboard from "./Pages/Dashboard.jsx";
import JoinRoom from "./ChatRooms/joinRoom.jsx";
import {useSelector } from "react-redux";


const App = () => {
  const user = useSelector(state => state.user);
  console.log(user);
  return (
    <Router>
      <Routes>    
        <Route path="/signup" element={<SignupForm />} />
        <Route path="/signin" element={<SigninForm />} />
        <Route path="/createRoom" element={<CreateRoom/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/joinRoom" element={<JoinRoom/>}/>
      </Routes>
    </Router>
  );
};

export default App;
