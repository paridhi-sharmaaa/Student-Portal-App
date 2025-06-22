import toast, { Toaster } from 'react-hot-toast'
import React, { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Home from './pages/Home';
import Users from './pages/Users';
import Dashboard from './pages/Dashboard';
import ResetPassword from './pages/ResetPassword';

const App = () => {
  const [user, setUser] = useState(() => JSON.parse(localStorage.getItem('user')));
  const navigate = useNavigate();

  const login = (credentials) => {
    if (credentials.email === 'student@portal.com' && credentials.password === '123456') {
      const dummyUser = { name: 'John Doe', email: credentials.email };
      localStorage.setItem('user', JSON.stringify(dummyUser));
      setUser(dummyUser);
      toast.success('Logged in successfully!');
      navigate('/dashboard');
    } else {
      alert('Invalid Credentials');
    }
  };

  const logout = () => {
    localStorage.removeItem('user');
    setUser(null);
    toast.success('Logged out successfully!');
    navigate('/login');
  };

  return (
    <div className="min-h-screen bg-blue-100 text-black dark:bg-[#001F2D] dark:text-white transition-all">
      {user && <Navbar user={user} logout={logout} />}
      <Toaster />      <Routes>
        {!user ? (
          <>
            <Route path="/" element={<Login login={login} />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/reset-password" element={<ResetPassword />} />
            <Route path="*" element={<Login login={login} />} />
          </>
        ) : (
          <>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/users" element={<Users />} />
            <Route path="*" element={<Dashboard />} />
          </>
        )}
      </Routes>
    </div>
  );
};

export default App;
