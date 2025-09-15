// src/context/UserContext.jsx
import React, { createContext, useState, useEffect } from 'react';
import { fetchUsers } from '../api/userService';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const data = await fetchUsers();
        setUsers(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };
    getUsers();
  }, []);

  return (
    <UserContext.Provider value={{ users, setUsers, loading, error }}>
      {children}
    </UserContext.Provider>
  );
};
