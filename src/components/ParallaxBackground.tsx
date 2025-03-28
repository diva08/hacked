'use client';

import { useEffect, useState } from 'react';
import { motion, useTransform, useScroll } from 'framer-motion';
import HeroStarBackground from './HeroStarBackground';

export default function ParallaxBackground() {
  const [isMounted, setIsMounted] = useState(false);
  const { scrollY } = useScroll();

  // Transform values for parallax effect
  const y1 = useTransform(scrollY, [0, 1000], [0, 300]); // Stars move slower
  const opacity = useTransform(scrollY, [0, 600], [1, 0]); // Fade out as you scroll

  // Only enable parallax effect after component is mounted (for hydration)
  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return <HeroStarBackground />;
  }

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Star background with parallax */}
      <motion.div
        className="absolute inset-0"
        style={{ y: y1, opacity }}
      >
        <HeroStarBackground />
      </motion.div>

      {/* Optional gradient overlay for depth */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0F172A]/80"
        style={{ zIndex: 1 }}
      />
    </div>
  );
}
