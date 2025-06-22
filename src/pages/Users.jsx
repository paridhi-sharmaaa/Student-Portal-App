import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Users = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(res => {
        setUsers(res.data);
        setLoading(false);
      })
      .catch(() => {
        setError('Failed to fetch users.');
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="p-6">Loading...</p>;
  if (error) return <p className="p-6 text-red-500">{error}</p>;

  return (
    <div className="p-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {users.map(user => (
        <div key={user.id} className="bg-gray-800 p-4 rounded shadow text-white">
          <h2 className="font-bold">{user.name}</h2>
          <p>{user.email}</p>
          <p>{user.phone}</p>
          <p>{user.website}</p>
        </div>
      ))}
    </div>
  );
};

export default Users;
