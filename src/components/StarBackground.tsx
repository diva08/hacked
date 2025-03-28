'use client';

import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

export default function StarBackground() {
  const containerRef = useRef<HTMLDivElement>(null);

  const createStar = (x: number, y: number, size: number, animationDelay: number) => {
    return (
      <motion.div
        key={`${x}-${y}-${animationDelay}`}
        className="absolute rounded-full bg-white"
        style={{
          left: `${x}%`,
          top: `${y}%`,
          width: `${size}px`,
          height: `${size}px`,
        }}
        animate={{
          opacity: [0.2, 0.8, 0.2],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: Math.random() * 3 + 2, // Between 2-5 seconds
          repeat: Infinity,
          delay: animationDelay,
          ease: "easeInOut"
        }}
      />
    );
  };

  // Generate random stars
  const generateStars = (count: number) => {
    const stars = [];
    for (let i = 0; i < count; i++) {
      const x = Math.random() * 100; // Random x position (0-100%)
      const y = Math.random() * 100; // Random y position (0-100%)
      const size = Math.random() * 2 + 1; // Random size between 1-3px
      const animationDelay = Math.random() * 5; // Random delay for animation
      stars.push(createStar(x, y, size, animationDelay));
    }
    return stars;
  };

  // Generate smaller quantity of shooting stars
  const generateShootingStars = (count: number) => {
    const stars = [];
    for (let i = 0; i < count; i++) {
      const startX = Math.random() * 100;
      const startY = Math.random() * 100;
      stars.push(
        <motion.div
          key={`shooting-${startX}-${startY}`}
          className="absolute h-px bg-blue-200 rounded-full z-0"
          style={{
            left: `${startX}%`,
            top: `${startY}%`,
            width: '1px',
            height: '1px',
            background: 'linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 50%, rgba(255,255,255,0) 100%)',
          }}
          animate={{
            width: ['1px', '100px', '1px'],
            x: [0, 100, 0],
            opacity: [0, 1, 0]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatDelay: Math.random() * 15 + 10, // Random delay between 10-25 seconds
            ease: "easeInOut"
          }}
        />
      );
    }
    return stars;
  };

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 overflow-hidden z-0"
      style={{ pointerEvents: 'none' }}
    >
      {generateStars(150)}
      {generateShootingStars(5)}
    </div>
  );
}
