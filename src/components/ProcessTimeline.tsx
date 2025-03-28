'use client';

import React from 'react';
import { Card } from '@/components/ui/card';
import ParticleBackground from './ParticleBackground';
import { motion } from 'framer-motion';

type ProcessStep = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

type ProcessTimelineProps = {
  steps: ProcessStep[];
  title?: string;
};

export default function ProcessTimeline({ steps, title = "Our Process" }: ProcessTimelineProps) {
  // Adapt the grid columns based on the number of steps
  const getGridClass = () => {
    switch(steps.length) {
      case 1: return "grid-cols-1";
      case 2: return "grid-cols-1 md:grid-cols-2";
      case 3: return "grid-cols-1 md:grid-cols-3";
      case 4: return "grid-cols-1 md:grid-cols-2 lg:grid-cols-4";
      default: return "grid-cols-1 md:grid-cols-2 lg:grid-cols-4";
    }
  };

  return (
    <section className="py-40 px-12 bg-[#0F172A] relative overflow-hidden">
      {/* Add the particle background */}
      <ParticleBackground />

      <h2 className="text-5xl md:text-6xl font-bold text-center mb-28 text-white relative z-10 hover:text-blue-400 transition-colors duration-300">
        {title}
      </h2>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Line connecting all steps */}
        <div
          className="absolute top-1/2 left-0 w-full h-3 transform -translate-y-1/2 hidden md:block"
          style={{ background: "linear-gradient(90deg, rgba(59, 130, 246, 0.2) 0%, rgba(59, 130, 246, 0.5) 50%, rgba(59, 130, 246, 0.2) 100%)" }}
        />

        <div className={`grid ${getGridClass()} gap-12 relative z-10 justify-items-center`}>
          {steps.map((step, index) => (
            <div
              key={index}
              className="w-full max-w-md"
            >
              <TimelineStep
                icon={step.icon}
                title={step.title}
                description={step.description}
                index={index}
                total={steps.length}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

type TimelineStepProps = ProcessStep & {
  index: number;
  total: number;
};

function TimelineStep({ icon, title, description, index, total }: TimelineStepProps) {
  // New state to control icon animation
  const [isHovering, setIsHovering] = React.useState(false);

  return (
    <motion.div
      className="flex flex-col items-center"
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300, damping: 10 }}
      onHoverStart={() => setIsHovering(true)}
      onHoverEnd={() => setIsHovering(false)}
      style={{
        willChange: "transform",
        transform: "translateZ(0)",
      }}
    >
      {/* Circle with icon on the line */}
      <motion.div
        className="relative mb-10 z-10"
        animate={{ y: [0, -5, 0] }}
        transition={{
          repeat: Infinity,
          repeatType: "reverse",
          duration: 2
        }}
        style={{ willChange: "transform" }}
      >
        <motion.div
          className="w-28 h-28 rounded-full bg-[#1E293B] border-3 border-blue-500 flex items-center justify-center mb-3 relative"
          animate={isHovering ? {
            boxShadow: "0 0 30px rgba(59,130,246,0.7)",
            borderColor: "#60a5fa"
          } : {}}
          style={{
            willChange: "box-shadow, border-color",
            backfaceVisibility: "hidden"
          }}
        >
          <motion.div
            className="text-blue-400"
            animate={isHovering ? {
              scale: 1.3,
              color: "#60a5fa"
            } : {}}
            transition={{ duration: 0.5 }}
            style={{
              willChange: "transform, color",
              backfaceVisibility: "hidden"
            }}
          >
            {React.cloneElement(icon as React.ReactElement, { size: 48 })}
          </motion.div>

          {/* Blue dot decoration */}
          <motion.div
            className="absolute w-5 h-5 rounded-full bg-blue-500 -top-1 -right-1"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.7, 1, 0.7]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            style={{ willChange: "transform, opacity" }}
          />
        </motion.div>
      </motion.div>

      {/* Card */}
      <Card className="bg-[#1E293B] border-none p-10 w-full flex flex-col items-center text-center transition-all duration-300 hover:bg-[#263B59] shadow-lg min-h-[250px]">
        <h3 className="text-2xl font-bold mb-6 text-white transition-colors duration-300 hover:text-blue-300">
          {title}
        </h3>
        <p className="text-gray-300 text-lg">
          {description}
        </p>
      </Card>
    </motion.div>
  );
}
