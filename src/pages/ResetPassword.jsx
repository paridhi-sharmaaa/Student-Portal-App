import React from 'react';

const ResetPassword = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-100 dark:bg-[#001F2D] text-black dark:text-white">
      <div className="bg-white dark:bg-gray-800 p-8 rounded-md w-full max-w-md border border-gray-300 dark:border-gray-600">
        <h2 className="text-2xl font-bold mb-4 text-center">Reset Password</h2>
        <p className="mb-6 text-sm text-center text-gray-600 dark:text-gray-300">
          Enter your email to receive reset instructions.
        </p>
        <input
          type="email"
          placeholder="Enter your email"
          className="w-full px-4 py-2 mb-4 bg-gray-100 dark:bg-gray-900 border border-gray-400 dark:border-gray-600 rounded-md focus:outline-none"
        />
        <button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded-md">
          Send Reset Link
        </button>
      </div>
    </div>
  );
};

export default ResetPassword;
