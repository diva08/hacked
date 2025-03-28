'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { motion, useAnimation } from 'framer-motion';
import ParallaxBackground from '@/components/ParallaxBackground';
import { useEffect, useState } from 'react';

export default function HeroSection() {
  const [text, setText] = useState('');
  const fullText = 'Hacked';
  const controls = useAnimation();

  useEffect(() => {
    let i = 0;
    const typingInterval = setInterval(() => {
      if (i < fullText.length) {
        setText(fullText.substring(0, i + 1));
        i++;
      } else {
        clearInterval(typingInterval);
        controls.start({ opacity: 1 });
      }
    }, 150);

    return () => clearInterval(typingInterval);
  }, [fullText, controls]);

  return (
    <section className="py-40 px-12 text-center flex flex-col items-center justify-center relative min-h-[80vh] overflow-hidden">
      {/* Replace static background with parallax */}
      <ParallaxBackground />

      <motion.h1
        className="text-8xl md:text-9xl font-bold mb-8 tracking-tight text-white relative z-10"
        initial={{ opacity: 0.5 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600 inline-block">
          {text}
          <span className="animate-pulse">|</span>
        </span>
      </motion.h1>

      <motion.h2
        className="text-2xl md:text-3xl mb-8 text-gray-300 relative z-10"
        initial={{ opacity: 0.5 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        Fuel Your Future – Internships & Community Service That Make a Difference
      </motion.h2>

      <motion.p
        className="max-w-4xl mx-auto text-gray-400 mb-14 text-xl md:text-2xl relative z-10"
        initial={{ opacity: 0.5 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        Connecting talented students with rigorous internship opportunities and meaningful community service projects.
        We empower the next generation of tech leaders through hands-on experience and impactful contributions.
      </motion.p>

      <div className="flex flex-col sm:flex-row gap-6 relative z-10">
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.97 }}
        >
          <Link href="/students">
            <Button className="bg-blue-600 hover:bg-blue-800 text-white px-12 py-8 rounded-md text-xl font-bold transition-colors duration-300">
              For Students
            </Button>
          </Link>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.97 }}
        >
          <Link href="/partners">
            <Button className="bg-blue-600 hover:bg-blue-800 text-white px-12 py-8 rounded-md text-xl font-bold transition-colors duration-300">
              For Partners
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
