import React, { useState } from 'react';

const Login = ({ login }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="min-h-screen flex flex-col bg-[#001F2D] text-white">
      <header className="flex items-center p-6">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-purple-300 rounded-full flex items-center justify-center text-black">
            <span>👤</span>
          </div>
          <span className="text-lg font-semibold tracking-wider">STUDENT PORTAL</span>
        </div>
      </header>

      <main className="flex flex-col items-center justify-center flex-1">
        <h1 className="text-5xl font-bold mb-10">STUDENT LOGIN</h1>
        <div className="bg-[#1E1E1E] p-8 rounded-md w-full max-w-md border border-gray-600">
          <label className="block mb-2 text-sm">Email</label>
          <input
            type="email"
            className="w-full px-4 py-2 mb-4 bg-gray-900 border border-gray-500 rounded-md focus:outline-none"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label className="block mb-2 text-sm">Password</label>
          <input
            type="password"
            className="w-full px-4 py-2 mb-4 bg-gray-900 border border-gray-500 rounded-md focus:outline-none"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            onClick={() => login({ email, password })}
            className="w-full bg-[#003847] hover:bg-[#005466] text-white font-semibold py-2 rounded-md"
          >
            LOGIN
          </button>

          <div className="mt-6 text-sm text-center">
            <a href="/reset-password" className="text-blue-400 hover:underline block mb-2">
              Forgot password?
            </a>
            <a href="/signup" className="text-green-400 hover:underline block">
              Don't have an account? Sign up
            </a>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Login;
