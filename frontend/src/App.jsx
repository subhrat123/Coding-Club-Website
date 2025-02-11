import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Discord';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Profile from './pages/Profile';
import TeamCarousel from './pages/Teams';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/" element={<Event />} /> */}
        {/* <Route path="/" element={<Teams />} /> */}
        <Route path="/teams" element={<TeamCarousel />} />
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
