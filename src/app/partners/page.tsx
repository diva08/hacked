'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Check, FileText, Users, Rocket } from 'lucide-react';
import { motion } from 'framer-motion';
import ProcessTimeline from '@/components/ProcessTimeline';
import SmoothScroll from '@/components/SmoothScroll';
import AnimatedSection from '@/components/AnimatedSection';

type PartnershipProcessCardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

function ProcessCard({ icon, title, description }: PartnershipProcessCardProps) {
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

type BenefitItemProps = {
  children: React.ReactNode;
};

function BenefitItem({ children }: BenefitItemProps) {
  return (
    <li className="flex items-start">
      <Check className="text-green-500 mr-2 flex-shrink-0 mt-1" size={18} />
      <span className="text-gray-300">{children}</span>
    </li>
  );
}

export default function PartnersPage() {
  const processSteps = [
    {
      icon: <FileText size={28} />,
      title: "Submit Proposal",
      description: "Detail your project needs, timeline, and desired outcomes. We'll help you structure the opportunity for optimal student engagement."
    },
    {
      icon: <Users size={28} />,
      title: "Screening & Matching",
      description: "We carefully match students with your needs through our competitive screening process, ensuring the perfect fit for your organization."
    },
    {
      icon: <Rocket size={28} />,
      title: "Launch & Collaborate",
      description: "Kickstart your project with talented students while receiving dedicated support from our team throughout the engagement."
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
          <span className="text-blue-400 block sm:inline">Partner</span>{" "}
          <span className="text-white block sm:inline">with Us</span>
        </motion.h1>
        <motion.h2
          className="text-xl sm:text-2xl md:text-3xl mb-8 md:mb-14 text-gray-300 max-w-4xl mx-auto px-4"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Join us in shaping the future of tech by providing opportunities for talented students.
        </motion.h2>

        {/* Quick navigation links */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-8 mt-8 sm:mt-12">
          <motion.div whileHover={{ y: -3 }} transition={{ type: "spring", stiffness: 300 }} className="mb-4 sm:mb-0">
            <Link href="#partners" className="text-lg md:text-xl text-blue-400 hover:text-blue-300 transition-colors relative group">
              Partnership Options
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

      {/* Partnership Options Section - containing both Companies and NGOs */}
      <AnimatedSection>
        <motion.section
          id="partners"
          className="py-40 px-12 bg-[#172033]"
          initial={{ opacity: 1, y: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl md:text-6xl font-bold text-center mb-28 text-white">
            Partnership Options
          </h2>

          <div className="max-w-7xl mx-auto space-y-32">
            {/* For Companies Box */}
            <motion.div
              className="bg-[#1E293B] rounded-lg p-14 shadow-xl"
              whileHover={{
                boxShadow: "0 0 20px rgba(59, 130, 246, 0.3)",
              }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10">
                <h2 className="text-4xl font-bold mb-6 md:mb-0 relative group">
                  <span className="text-blue-400 transition-all duration-300 group-hover:text-blue-300">For</span>
                  <span className="text-white transition-all duration-300 group-hover:text-gray-100"> Companies</span>
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
                    <Check className="text-green-500 mr-4 flex-shrink-0 mt-1" size={24} />
                    <span className="text-gray-300 transition-colors duration-200 hover:text-white text-xl">Access a pool of talented and motivated interns</span>
                  </motion.li>
                  <motion.li
                    className="flex"
                    initial={{ opacity: 1, x: 0 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2, duration: 0.15 }}
                    whileHover={{ x: 5 }}
                  >
                    <Check className="text-green-500 mr-4 flex-shrink-0 mt-1" size={24} />
                    <span className="text-gray-300 transition-colors duration-200 hover:text-white text-xl">Support the next generation of tech professionals</span>
                  </motion.li>
                  <motion.li
                    className="flex"
                    initial={{ opacity: 1, x: 0 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3, duration: 0.15 }}
                    whileHover={{ x: 5 }}
                  >
                    <Check className="text-green-500 mr-4 flex-shrink-0 mt-1" size={24} />
                    <span className="text-gray-300 transition-colors duration-200 hover:text-white text-xl">Streamlined process for managing interns</span>
                  </motion.li>
                </ul>
              </div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block"
              >
                <Link href="https://docs.google.com/forms/d/e/1FAIpQLSdQW5bxajapseGj_7m7EiVtdoxpfewsveKJwcM7KMj7X6CqiQ/viewform?usp=header" target="_blank" rel="noopener noreferrer">
                  <Button className="bg-blue-600 hover:bg-blue-700 px-8 py-6 sm:px-12 sm:py-10 text-lg sm:text-xl font-semibold shadow-lg hover:shadow-blue-500/50 transition-all">
                    Partner as Company
                  </Button>
                </Link>
              </motion.div>
            </motion.div>

            {/* For NGOs Box */}
            <motion.div
              className="bg-[#1E293B] rounded-lg p-14 shadow-xl"
              whileHover={{
                boxShadow: "0 0 20px rgba(59, 130, 246, 0.3)",
              }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10">
                <h2 className="text-4xl font-bold mb-6 md:mb-0 relative group">
                  <span className="text-blue-400 transition-all duration-300 group-hover:text-blue-300">For</span>
                  <span className="text-white transition-all duration-300 group-hover:text-gray-100"> NGOs</span>
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
                    <Check className="text-green-500 mr-4 flex-shrink-0 mt-1" size={24} />
                    <span className="text-gray-300 transition-colors duration-200 hover:text-white text-xl">Get tech support for your social initiatives</span>
                  </motion.li>
                  <motion.li
                    className="flex"
                    initial={{ opacity: 1, x: 0 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2, duration: 0.15 }}
                    whileHover={{ x: 5 }}
                  >
                    <Check className="text-green-500 mr-4 flex-shrink-0 mt-1" size={24} />
                    <span className="text-gray-300 transition-colors duration-200 hover:text-white text-xl">Work with passionate student volunteers</span>
                  </motion.li>
                  <motion.li
                    className="flex"
                    initial={{ opacity: 1, x: 0 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3, duration: 0.15 }}
                    whileHover={{ x: 5 }}
                  >
                    <Check className="text-green-500 mr-4 flex-shrink-0 mt-1" size={24} />
                    <span className="text-gray-300 transition-colors duration-200 hover:text-white text-xl">Create lasting impact in communities</span>
                  </motion.li>
                </ul>
              </div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block"
              >
                <Link href="https://docs.google.com/forms/d/e/1FAIpQLSd9T3RJn4febjKWrOJf1B69XGQ9jzhLcmpkN86Y3awW0KgW4A/viewform?usp=header" target="_blank" rel="noopener noreferrer">
                  <Button className="bg-blue-600 hover:bg-blue-700 px-8 py-6 sm:px-12 sm:py-10 text-lg sm:text-xl font-semibold shadow-lg hover:shadow-blue-500/50 transition-all">
                    Partner as NGO
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
          <ProcessTimeline
            steps={processSteps}
            title="Our Process"
          />
        </div>
      </AnimatedSection>
    </main>
  );
}
