import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import SignUp from './pages/SignUp';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* login */}
        <Route path="/login" element={<Login />} />
        {/* register */}
        <Route path="/register" element={<SignUp />} />
      </Routes>
    </Router>
  );
}

export default App;
