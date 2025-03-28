'use client';

import { motion } from 'framer-motion';

type WaveDividerProps = {
  inverted?: boolean;
  color?: string;
  bgColor?: string;
  height?: number;
};

export default function WaveDivider({
  inverted = false,
  color = '#172033',
  bgColor = '#0F172A',
  height = 60
}: WaveDividerProps) {
  // Create the wave points
  const createWavePath = (inverted: boolean, height: number) => {
    const amplitudeFactor = inverted ? -1 : 1;
    const amplitude = height * amplitudeFactor;

    // SVG path for wave pattern
    return `
      M0,0
      C150,${amplitude * 0.5} 350,${amplitude * 1.5} 500,${amplitude}
      C650,${amplitude * 0.5} 850,${amplitude * 1.5} 1000,${amplitude}
      C1150,${amplitude * 0.5} 1350,${amplitude * 1.5} 1500,${amplitude}
      C1650,${amplitude * 0.5} 1850,${amplitude * 1.5} 2000,${amplitude}
      V${inverted ? 0 : height}
      H0
      Z
    `;
  };

  return (
    <div
      className="w-full overflow-hidden relative"
      style={{
        backgroundColor: bgColor,
        height: `${height}px`,
        marginTop: '-1px', // Prevent gap between sections
        marginBottom: '-1px'
      }}
    >
      <motion.svg
        viewBox="0 0 2000 100"
        preserveAspectRatio="none"
        className="absolute w-full h-full"
        initial={{ y: 10, opacity: 0.8 }}
        animate={{
          y: [10, 0, 10],
          opacity: [0.8, 1, 0.8]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <motion.path
          d={createWavePath(inverted, height)}
          fill={color}
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        />
      </motion.svg>
    </div>
  );
}
