// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DashboardPage from './pages/DashboardPage';
import UserDetailsPage from './pages/UserDetailsPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<DashboardPage />} />
        <Route path="/user/:id" element={<UserDetailsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
