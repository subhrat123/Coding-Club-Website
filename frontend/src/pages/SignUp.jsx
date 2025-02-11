// HackersThemeComponent.js
import React, { useEffect } from 'react';
// import './HackersTheme.css';

const SignUp = () => {
  useEffect(() => {
    // Matrix effect logic
    const canvas = document.getElementById('matrix');
    const context = canvas.getContext('2d');

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const matrixChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()';
    const fontSize = 16;
    const columns = canvas.width / fontSize;
    const drops = Array(Math.floor(columns)).fill(1);

    const drawMatrix = () => {
      context.fillStyle = 'rgba(0, 0, 0, 0.05)';
      context.fillRect(0, 0, canvas.width, canvas.height);

      context.fillStyle = '#ff1919';
      context.font = `${fontSize}px monospace`;

      drops.forEach((y, index) => {
        const text =
          matrixChars[Math.floor(Math.random() * matrixChars.length)];
        context.fillText(text, index * fontSize, y * fontSize);

        if (y * fontSize > canvas.height && Math.random() > 0.975) {
          drops[index] = 0;
        }
        drops[index]++;
      });
    };

    const interval = setInterval(drawMatrix, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="hackers-theme">
      <canvas id="matrix"></canvas>
      <div className="terminal glassmorphism">
        <h1 className="glitch">Welcome to the Coding Club</h1>
        <p>Type your good name:</p>
        <input
          type="text"
          className="terminal-input"
          placeholder="> Start typing..."
        />
      </div>
    </div>
  );
};

export default SignUp;
