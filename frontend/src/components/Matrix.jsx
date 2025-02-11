import React, { useEffect } from 'react';

const MatrixEffect = () => {
  useEffect(() => {
    const canvas = document.getElementById('matrixCanvas');
    const ctx = canvas.getContext('2d');

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const matrixChars = 'CODING CLUB ';
    const fontSize = 16;
    const columns = canvas.width / fontSize;
    const drops = Array(Math.floor(columns)).fill(1);
    console.log(drops);
    const draw = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = 'violet';
      ctx.font = `${fontSize}px monospace`;

      drops.forEach((y, i) => {
        const text =
          matrixChars[Math.floor(Math.random() * matrixChars.length)];
        const x = i * fontSize;
        ctx.fillText(text, x, y * fontSize);

        if (y * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      });
    };

    const interval = setInterval(draw, 150);

    return () => clearInterval(interval);
  }, []);

  return <canvas id="matrixCanvas" className="matrix-canvas"></canvas>;
};

export default MatrixEffect;
