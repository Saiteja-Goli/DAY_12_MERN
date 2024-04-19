// App.js
import React from 'react';
import { Route, Link, Routes } from 'react-router-dom';
import HomePage from './Components/HomePage';
import AboutPage from './Components/AboutPage';
import DashboardPage from './Components/DashboardPage';

const App = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
      </ul>
      <Routes>
        <Route path="/" exact element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/dashboard/*" element={<DashboardPage />} />
      </Routes>
    </div>

  );
};

export default App;
