import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import Nav from './components/Navbar.jsx';

createRoot(document.getElementById('root')).render(
  <>
    <Nav />
    <App />
  </>
);
