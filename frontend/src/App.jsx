import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Profile from './pages/Profile';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* login */}
        <Route path="/login" element={<Login />} />
        {/* register */}
        <Route path="/signUp" element={<SignUp />} />
        {/*Profile*/}
        <Route path="/member" element={<Profile />} />
      </Routes>
    </Router>
  );
}

export default App;
