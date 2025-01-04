import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import Nav from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';

createRoot(document.getElementById('root')).render(
  <>
    <Nav />
    <App />
    <Footer />
  </>
);
