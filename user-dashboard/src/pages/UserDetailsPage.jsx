// src/pages/UserDetailsPage.jsx
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { fetchUserById } from '../api/userService';
import Header from '../components/Header';

function UserDetailsPage() {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getUser = async () => {
      try {
        const data = await fetchUserById(id);
        setUser(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };
    getUser();
  }, [id]);

  if (loading) return <div className="p-4">Loading...</div>;
  if (error) return <div className="p-4 text-red-500">Error loading user.</div>;
  if (!user) return <div className="p-4">User not found.</div>;

  return (
    <div className="max-w-xl mx-auto p-4">
      <Header />
      <Link to="/" className="text-blue-500 underline mb-4 inline-block">&larr; Back to Dashboard</Link>
      <h1 className="text-2xl font-bold mb-2">{user.name}</h1>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Phone:</strong> {user.phone}</p>
      <p><strong>Website:</strong> {user.website}</p>
      <p><strong>Company:</strong> {user.company?.name}</p>
      <p><strong>Address:</strong> {user.address?.street}, {user.address?.city}</p>
    </div>
  );
}

export default UserDetailsPage;
