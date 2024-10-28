// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UserNavBar from './components/UserNavBar';
import AdminNavBar from './components/AdminNavBar';
import Home from './pages/Home';
import AdminDashboard from './pages/AdminDashboard';
// Other imports for routes and pages

const App = () => {
  const userRole = "admin"; // Example role, this would be set dynamically based on auth

  return (
    <Router>
      {userRole === "admin" ? <AdminNavBar /> : <UserNavBar />}
      <Routes>
        <Route path="/" exact component={Home} />
        <Route path="/admin" component={AdminDashboard} />
        {/* Other routes */}
      </Routes>
    </Router>
  );
};

export default App;
