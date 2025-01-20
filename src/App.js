import React, { useContext } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { UserContext } from './context/UserContext';
import HomePage from './pages/HomePage';
import UserDetailPage from './pages/UserDetailPage';
import './App.css';

const App = () => {
  const { darkMode, setDarkMode } = useContext(UserContext);

  return (
    <div className={darkMode ? 'app dark-mode' : 'app'}>
      <Router>
        <header className="app-header">
          <h1>User Management App</h1>
          <button
            className="toggle-dark-mode"
            onClick={() => setDarkMode(!darkMode)}
          >
            {darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
          </button>
        </header>
        <main className="app-content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/users/:id" element={<UserDetailPage />} />
          </Routes>
        </main>
      </Router>
    </div>
  );
};

export default App;
