'use client';

import { Card } from "@/components/ui/card";
import { Briefcase, HandHeart, Award, LineChart } from "lucide-react";
import { motion } from "framer-motion";
import { useState, cloneElement } from "react";

type OfferingCardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

function OfferingCard({ icon, title, description }: OfferingCardProps) {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <div className="h-full">
      {/* Simple container with basic scaling only */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        whileHover={{ scale: 1.05 }}
        onHoverStart={() => setIsHovering(true)}
        onHoverEnd={() => setIsHovering(false)}
        className="h-full"
      >
        <Card className="bg-[#1E293B] border-none p-6 flex flex-col items-center justify-center text-center transition-colors duration-300 hover:bg-[#263B59] aspect-square">
          {/* Content with fixed positioning */}
          <div className="flex flex-col items-center justify-center w-full h-full">
            <div className="mb-6 text-amber-500 relative">
              {/* Only animate the icon, not its container */}
              <div className="absolute inset-0 bg-amber-500 rounded-full opacity-20" />

              <motion.div
                animate={isHovering ? {
                  scale: 1.2,
                  rotate: [0, 10, -10, 0],
                } : { scale: 1, rotate: 0 }}
                transition={{
                  duration: 0.5,
                  ease: "easeInOut"
                }}
              >
                {icon && cloneElement(icon as React.ReactElement, { size: 48 })}
              </motion.div>
            </div>

            <h3 className="text-xl font-bold mb-4 text-white">
              {title}
            </h3>

            <p className="text-gray-300 text-sm md:text-base max-w-[90%] mx-auto">
              {description}
            </p>
          </div>
        </Card>
      </motion.div>
    </div>
  );
}

export default function WhatWeOfferSection() {
  const offerings = [
    {
      icon: <Briefcase size={48} />,
      title: "Resume-Boosting Internships",
      description: "Real projects with startups, selected through a rigorous matching process."
    },
    {
      icon: <HandHeart size={48} />,
      title: "Community Service That Counts",
      description: "Meaningful collaborations with NGOs, perfect for showcasing on college apps."
    },
    {
      icon: <Award size={48} />,
      title: "Certificates & Recognition",
      description: "Proof of your achievements—shareable on LinkedIn and impressive on resumes."
    },
    {
      icon: <LineChart size={48} />,
      title: "Skill Building & Growth",
      description: "Develop practical skills and professional connections for your future."
    }
  ];

  return (
    <section className="py-36 px-12 bg-[#0F172A]">
      <h2 className="text-5xl md:text-6xl font-bold text-center mb-24 text-white">
        What We Offer
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {offerings.map((offering, index) => (
          <OfferingCard
            key={index}
            icon={offering.icon}
            title={offering.title}
            description={offering.description}
          />
        ))}
      </div>
    </section>
  );
}
