import React from 'react';
import { Link } from 'react-router-dom';
import DarkModeToggle from './DarkModeToggle';
import { HomeIcon, UserGroupIcon, ChartBarIcon, ArrowRightOnRectangleIcon } from '@heroicons/react/24/outline';

const Navbar = ({ user, logout }) => (
  <nav className="sticky top-0 z-50 bg-white dark:bg-gray-800 shadow p-4 flex justify-between items-center text-black dark:text-white">
    <div className="text-xl font-bold">Student Portal</div>
    <div className="flex items-center space-x-6 text-sm">
      <Link to="/" className="flex items-center gap-1 hover:underline"><HomeIcon className="w-4 h-4" />Home</Link>
      <Link to="/users" className="flex items-center gap-1 hover:underline"><UserGroupIcon className="w-4 h-4" />Users</Link>
      <Link to="/dashboard" className="flex items-center gap-1 hover:underline"><ChartBarIcon className="w-4 h-4" />Dashboard</Link>
      <button onClick={logout} className="flex items-center gap-1 text-red-500 hover:underline">
        <ArrowRightOnRectangleIcon className="w-4 h-4" />Logout
      </button>
      <DarkModeToggle />
    </div>
    <div className="text-sm">{user.name}</div>
  </nav>
);

export default Navbar;
