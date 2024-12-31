import React from 'react';

// const ProgressBar = ({ percentage}) => {
const ProgressBar = () => {
  const percentage = 70;
  const radius = 45; // Radius of the circle
  const stroke = 8; // Stroke width
  const normalizedRadius = radius - stroke / 2; // Adjust for stroke
  const circumference = normalizedRadius * 2 * Math.PI; // Circle circumference
  const strokeDashoffset = circumference - (percentage / 100) * circumference; // Offset for progress

  return (
    <svg width="200" height="200" viewBox="0 0 120 120">
      {/* Background Circle */}
      <circle
        cx="60"
        cy="60"
        r={normalizedRadius}
        fill="transparent"
        stroke="#e6e6e6"
        strokeWidth={stroke}
      />
      {/* Progress Circle */}
      <circle
        cx="60"
        cy="60"
        r={normalizedRadius}
        fill="transparent"
        stroke="red"
        strokeWidth={stroke}
        strokeDasharray={circumference}
        strokeDashoffset={strokeDashoffset}
        strokeLinecap="round"
        transform="rotate(-90 60 60)"
        style={{
          transition: 'stroke-dashoffset 0.5s ease-in-out',
        }}
      />
      {/* Percentage Text */}
      <text
        x="60"
        y="60"
        textAnchor="middle"
        dy="0.3em"
        fontSize="18"
        fill="white"
        fontWeight="bold"
      >
        {percentage}%
      </text>
    </svg>
  );
};

export default ProgressBar;
