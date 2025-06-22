import React from 'react';

const Dashboard = () => (
  <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6 bg-blue-100 dark:bg-[#001F2D] text-black dark:text-white">
    {[
      { title: 'GPA', value: '3.85' },
      { title: 'Attendance', value: '90%' },
      { title: 'Subjects', value: '12/15' }
    ].map((item, idx) => (
      <div key={idx} className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-lg border border-white/30 dark:border-gray-700 p-6 rounded-xl shadow-md transform hover:scale-105 transition duration-300">
        <h2 className="text-xl font-semibold mb-2">{item.title}</h2>
        <p className="text-lg font-bold">{item.value}</p>
      </div>
    ))}
  </div>
);

export default Dashboard;
