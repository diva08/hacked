import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import HeroSection from '@/components/home/HeroSection';
import WhatWeOfferSection from '@/components/home/WhatWeOfferSection';
import OurStorySection from '@/components/home/OurStorySection';
import AnimatedSection from '@/components/AnimatedSection';

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <HeroSection />

      <AnimatedSection>
        <WhatWeOfferSection />
      </AnimatedSection>

      <AnimatedSection delay={0.2}>
        <OurStorySection />
      </AnimatedSection>
    </main>
  );
}
