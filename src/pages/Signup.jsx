import React from 'react';
import { Link } from 'react-router-dom';

const Signup = () => (
  <div className="flex flex-col items-center justify-center h-screen bg-[#001F2D] text-white">
    <div className="bg-gray-800 p-8 rounded shadow-md w-96">
      <h2 className="text-2xl mb-4">Signup</h2>
      <p className="mb-4">Signup functionality is dummy. Please <Link to="/" className="text-blue-400">Login</Link></p>
    </div>
  </div>
);

export default Signup;
