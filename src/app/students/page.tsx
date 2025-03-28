'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { CheckCircle2, FileText, Users, Play, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';
import ProcessTimeline from '@/components/ProcessTimeline';
import SmoothScroll from '@/components/SmoothScroll';
import AnimatedSection from '@/components/AnimatedSection';

type ProcessCardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

function ProcessCard({ icon, title, description }: ProcessCardProps) {
  return (
    <Card className="bg-[#1E293B] border-none p-6 flex flex-col items-center text-center">
      <div className="mb-4 text-blue-400">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3 text-white">{title}</h3>
      <p className="text-gray-400 text-sm">{description}</p>
    </Card>
  );
}

export default function StudentsPage() {
  const processes = [
    {
      icon: <FileText size={28} />,
      title: "Apply",
      description: "Submit your application and preferences. We'll review your skills, interests, and aspirations to find the perfect match."
    },
    {
      icon: <Users size={28} />,
      title: "Match",
      description: "Our rigorous screening process ensures the perfect match between your skills and available opportunities."
    },
    {
      icon: <Play size={28} />,
      title: "Start",
      description: "Begin your journey with hands-on experience, mentorship, and meaningful projects that make a difference."
    },
    {
      icon: <TrendingUp size={28} />,
      title: "Grow",
      description: "Develop your skills, build your portfolio, and make lasting connections in the tech community."
    }
  ];

  return (
    <main className="flex flex-col min-h-screen">
      <SmoothScroll />

      {/* Hero Section - make larger */}
      <motion.section
        id="hero"
        className="py-20 sm:py-32 md:py-48 px-4 sm:px-8 md:px-12 text-center"
        initial={{ opacity: 1 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h1
          className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold mb-6 md:mb-8 tracking-tight leading-tight"
          initial={{ y: 0 }}
          animate={{ y: 0 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 15
          }}
        >
          <span className="text-blue-400 block sm:inline">Opportunities</span>{" "}
          <span className="text-white block sm:inline">for Students</span>
        </motion.h1>
        <motion.h2
          className="text-xl sm:text-2xl md:text-3xl mb-8 md:mb-14 text-gray-300 max-w-4xl mx-auto px-4"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Choose your path to success through our rigorous internships and impactful community service projects.
        </motion.h2>

        {/* Quick navigation links */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-8 mt-8 sm:mt-12">
          <motion.div whileHover={{ y: -3 }} transition={{ type: "spring", stiffness: 300 }} className="mb-4 sm:mb-0">
            <Link href="#opportunities" className="text-lg md:text-xl text-blue-400 hover:text-blue-300 transition-colors relative group">
              Opportunity Types
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </motion.div>
          <motion.div whileHover={{ y: -3 }} transition={{ type: "spring", stiffness: 300 }}>
            <Link href="#process" className="text-lg md:text-xl text-blue-400 hover:text-blue-300 transition-colors relative group">
              Our Process
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </motion.div>
        </div>
      </motion.section>

      {/* Opportunities Section - containing both internships and community service */}
      <AnimatedSection>
        <motion.section
          id="opportunities"
          className="py-40 px-12 bg-[#172033]"
          initial={{ opacity: 1, y: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl md:text-6xl font-bold text-center mb-28 text-white">
            Opportunity Types
          </h2>

          <div className="max-w-7xl mx-auto space-y-32">
            {/* Internships Box */}
            <motion.div
              className="bg-[#1E293B] rounded-lg p-14 shadow-xl"
              whileHover={{
                boxShadow: "0 0 20px rgba(59, 130, 246, 0.3)",
              }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10">
                <h2 className="text-4xl font-bold mb-6 md:mb-0 relative group">
                  <span className="text-blue-400 transition-all duration-300 group-hover:text-blue-300">Impactful</span>
                  <span className="text-white transition-all duration-300 group-hover:text-gray-100"> Internships</span>
                  <motion.span
                    className="absolute -bottom-2 left-0 h-1 bg-blue-500"
                    initial={{ width: "0%" }}
                    whileInView={{ width: "100%" }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  />
                </h2>
              </div>

              <div className="mb-12">
                <ul className="space-y-6">
                  <motion.li
                    className="flex"
                    initial={{ opacity: 1, x: 0 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1, duration: 0.15 }}
                    whileHover={{ x: 5 }}
                  >
                    <CheckCircle2 className="text-green-500 mr-4 flex-shrink-0 mt-1" size={24} />
                    <span className="text-gray-300 transition-colors duration-200 hover:text-white text-xl">Earn certificates and enhance your college application</span>
                  </motion.li>
                  <motion.li
                    className="flex"
                    initial={{ opacity: 1, x: 0 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2, duration: 0.15 }}
                    whileHover={{ x: 5 }}
                  >
                    <CheckCircle2 className="text-green-500 mr-4 flex-shrink-0 mt-1" size={24} />
                    <span className="text-gray-300 transition-colors duration-200 hover:text-white text-xl">Gain real-world work experience with innovative companies</span>
                  </motion.li>
                  <motion.li
                    className="flex"
                    initial={{ opacity: 1, x: 0 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3, duration: 0.15 }}
                    whileHover={{ x: 5 }}
                  >
                    <CheckCircle2 className="text-green-500 mr-4 flex-shrink-0 mt-1" size={24} />
                    <span className="text-gray-300 transition-colors duration-200 hover:text-white text-xl">Build professional networks and mentorship relationships</span>
                  </motion.li>
                </ul>
              </div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block"
              >
                <Link href="https://docs.google.com/forms/d/e/1FAIpQLSd06aRSVz4nqg0VKyfoxb51Wj4palIBnmH9xo0R9W7ihmSjZQ/viewform?usp=header" target="_blank" rel="noopener noreferrer">
                  <Button className="bg-blue-600 hover:bg-blue-700 px-8 py-6 sm:px-12 sm:py-10 text-lg sm:text-xl font-semibold shadow-lg hover:shadow-blue-500/50 transition-all">
                    Apply
                  </Button>
                </Link>
              </motion.div>
            </motion.div>

            {/* Community Service Box */}
            <motion.div
              className="bg-[#1E293B] rounded-lg p-14 shadow-xl"
              whileHover={{
                boxShadow: "0 0 20px rgba(59, 130, 246, 0.3)",
              }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10">
                <h2 className="text-4xl font-bold mb-6 md:mb-0 relative group">
                  <span className="text-blue-400 transition-all duration-300 group-hover:text-blue-300">Community</span>
                  <span className="text-white transition-all duration-300 group-hover:text-gray-100"> Service</span>
                  <motion.span
                    className="absolute -bottom-2 left-0 h-1 bg-blue-500"
                    initial={{ width: "0%" }}
                    whileInView={{ width: "100%" }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  />
                </h2>
              </div>

              <div className="mb-12">
                <ul className="space-y-6">
                  <motion.li
                    className="flex"
                    initial={{ opacity: 1, x: 0 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1, duration: 0.15 }}
                    whileHover={{ x: 5 }}
                  >
                    <CheckCircle2 className="text-green-500 mr-4 flex-shrink-0 mt-1" size={24} />
                    <span className="text-gray-300 transition-colors duration-200 hover:text-white text-xl">Contribute to meaningful social change initiatives</span>
                  </motion.li>
                  <motion.li
                    className="flex"
                    initial={{ opacity: 1, x: 0 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2, duration: 0.15 }}
                    whileHover={{ x: 5 }}
                  >
                    <CheckCircle2 className="text-green-500 mr-4 flex-shrink-0 mt-1" size={24} />
                    <span className="text-gray-300 transition-colors duration-200 hover:text-white text-xl">Choose projects that align with your passions</span>
                  </motion.li>
                  <motion.li
                    className="flex"
                    initial={{ opacity: 1, x: 0 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3, duration: 0.15 }}
                    whileHover={{ x: 5 }}
                  >
                    <CheckCircle2 className="text-green-500 mr-4 flex-shrink-0 mt-1" size={24} />
                    <span className="text-gray-300 transition-colors duration-200 hover:text-white text-xl">Build a portfolio of impactful community service</span>
                  </motion.li>
                </ul>
              </div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block"
              >
                <Link href="https://docs.google.com/forms/d/e/1FAIpQLSd12iQ8OhWSAK-XoSnnv3UJNMMKU5fa6Abt9C5MT5DkqiaWCA/viewform?usp=header" target="_blank" rel="noopener noreferrer">
                  <Button className="bg-blue-600 hover:bg-blue-700 px-8 py-6 sm:px-12 sm:py-10 text-lg sm:text-xl font-semibold shadow-lg hover:shadow-blue-500/50 transition-all">
                    Apply
                  </Button>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </motion.section>
      </AnimatedSection>

      {/* The Process Section */}
      <AnimatedSection delay={0.2}>
        <div id="process">
          <ProcessTimeline steps={processes} />
        </div>
      </AnimatedSection>
    </main>
  );
}
