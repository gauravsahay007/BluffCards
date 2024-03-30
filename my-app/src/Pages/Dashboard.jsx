import React from 'react';
import { Link } from 'react-router-dom';

export default function Dashboard() {
  return (
    <div className="bg-gray-800 py-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex space-x-4">
          <Link to="/signin" className="text-white hover:text-gray-300">Sign In</Link>
          <Link to="/signup" className="text-white hover:text-gray-300">Sign Up</Link>
          <Link to="/signout" className="text-white hover:text-gray-300">Sign Out</Link>
          <Link to="/createRoom" className="text-white hover:text-gray-300">Create Room</Link>
          <Link to="/joinRoom" className="text-white hover:text-gray-300">Join Room</Link>
        </div>
      </div>
    </div>
  );
}
