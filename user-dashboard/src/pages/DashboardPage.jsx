// src/pages/DashboardPage.jsx
import React, { useContext, useState } from 'react';
import { UserContext } from '../context/UserContext';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import UserCard from '../components/UserCard';

function DashboardPage() {
  const { users, loading, error } = useContext(UserContext);
  const [search, setSearch] = useState('');
  const navigate = useNavigate();

  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(search.toLowerCase())
  );

  if (loading) return <div className="p-4">Loading...</div>;
  if (error) return <div className="p-4 text-red-500">Error loading users.</div>;

  return (
    <div className="max-w-4xl mx-auto p-4">
      <Header />
      <input
        type="text"
        placeholder="Search users..."
        value={search}
        onChange={e => setSearch(e.target.value)}
        className="border p-2 mb-4 w-full rounded"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredUsers.map(user => (
          <UserCard
            key={user.id}
            user={user}
            onClick={() => navigate(`/user/${user.id}`)}
          />
        ))}
      </div>
    </div>
  );
}

export default DashboardPage;
