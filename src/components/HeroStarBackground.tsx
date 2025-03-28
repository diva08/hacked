'use client';

import React, { useEffect, useState, useCallback } from 'react';
import { motion } from 'framer-motion';

export default function HeroStarBackground() {
  const [stars, setStars] = useState<React.ReactNode[]>([]);

  // Create individual star - defined outside useEffect to avoid dependency issues
  const createStar = useCallback((x: number, y: number, size: number, animationDelay: number) => {
    // Using blues for the stars
    const blueColors = [
      'rgba(59, 130, 246, 0.8)',    // Blue 500
      'rgba(96, 165, 250, 0.7)',    // Blue 400
      'rgba(147, 197, 253, 0.9)',   // Blue 300
      'rgba(191, 219, 254, 0.6)',   // Blue 200
    ];

    const color = blueColors[Math.floor(Math.random() * blueColors.length)];

    // Add subtle movement animation for some stars
    const addMovement = Math.random() > 0.7;
    const moveX = addMovement ? Math.random() * 3 - 1.5 : 0; // Random movement between -1.5 and 1.5
    const moveY = addMovement ? Math.random() * 3 - 1.5 : 0;

    return (
      <motion.div
        key={`${x}-${y}-${animationDelay}`}
        className="absolute rounded-full"
        style={{
          left: `${x}%`,
          top: `${y}%`,
          width: `${size}px`,
          height: `${size}px`,
          backgroundColor: color,
          boxShadow: `0 0 ${size * 2}px ${color}`,
          zIndex: size > 2 ? 1 : 0, // Larger stars appear above smaller ones
        }}
        animate={{
          opacity: [0.3, 0.8, 0.3],
          x: addMovement ? [0, moveX, 0] : 0,
          y: addMovement ? [0, moveY, 0] : 0,
          scale: [1, size > 2 ? 1.3 : 1.1, 1],
        }}
        transition={{
          duration: Math.random() * 3 + 2, // Between 2-5 seconds
          repeat: Infinity,
          delay: animationDelay,
          ease: "easeInOut"
        }}
      />
    );
  }, []);

  // Generate random stars
  const generateStars = useCallback((count: number) => {
    const starsArray = [];

    // Normal twinkling stars
    for (let i = 0; i < count; i++) {
      const x = Math.random() * 100; // Random x position (0-100%)
      const y = Math.random() * 100; // Random y position (0-100%)

      // Add more variety in star sizes
      let size;
      if (Math.random() > 0.9) {
        size = Math.random() * 2 + 2.5; // 10% larger stars (2.5-4.5px)
      } else {
        size = Math.random() * 1.5 + 1; // 90% smaller stars (1-2.5px)
      }

      const animationDelay = Math.random() * 2; // Random delay
      starsArray.push(createStar(x, y, size, animationDelay));
    }

    return starsArray;
  }, [createStar]);

  // Generate stars only once on component mount
  useEffect(() => {
    // Generate more stars for a richer effect
    const generatedStars = generateStars(80);
    setStars(generatedStars);
  }, [generateStars]);

  return (
    <div
      className="absolute inset-0 overflow-hidden z-0 pointer-events-none"
      aria-hidden="true"
    >
      {stars}
    </div>
  );
}
