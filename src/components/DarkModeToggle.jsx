import React, { useEffect, useState } from 'react';

const DarkModeToggle = () => {
  const [isDark, setIsDark] = useState(() => {
    const stored = localStorage.getItem('theme');
    return stored ? stored === 'dark' : true;
  });

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  return (
    <button
      onClick={() => setIsDark(!isDark)}
      className="ml-4 px-3 py-1 rounded-md text-sm bg-gray-200 dark:bg-gray-700 dark:text-white"
    >
      {isDark ? '☀️ Light' : '🌙 Dark'}
    </button>
  );
};

export default DarkModeToggle;
