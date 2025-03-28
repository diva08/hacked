'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();

  // Check if a path is active
  const isActive = (path: string) => pathname === path;

  return (
    <header className="bg-[#0F172A] py-6 md:py-7 px-6 md:px-12 flex items-center shadow-lg sticky top-0 z-50">
      <div className="flex items-center">
        <Link href="/" className="flex items-center">
          <div className="relative w-12 h-12 md:w-14 md:h-14 mr-4">
            <Image
              src="/logo.png"
              alt="Hacked Logo"
              fill
              priority
              sizes="(max-width: 768px) 48px, 56px"
              style={{ objectFit: "contain" }}
            />
          </div>
          <span className="text-white font-bold text-xl md:text-2xl tracking-wide">Hacked</span>
        </Link>
      </div>

      <nav className="ml-auto flex space-x-8 md:space-x-12">
        <NavLink href="/" isActive={isActive("/")}>Home</NavLink>
        <NavLink href="/students" isActive={isActive("/students")}>Students</NavLink>
        <NavLink href="/partners" isActive={isActive("/partners")}>Partners</NavLink>
      </nav>
    </header>
  );
}

// Custom NavLink component with hover animations
type NavLinkProps = {
  href: string;
  children: React.ReactNode;
  isActive: boolean;
};

function NavLink({ href, children, isActive }: NavLinkProps) {
  return (
    <Link href={href} className="relative group">
      <span className={`${isActive ? 'text-white' : 'text-gray-400'} text-lg md:text-xl font-medium hover:text-white transition-colors duration-300`}>
        {children}
      </span>
      <span
        className={`absolute -bottom-1 left-0 h-[3px] bg-blue-400 transition-all duration-300 ${
          isActive ? 'w-full' : 'w-0 group-hover:w-full'
        }`}
      />
    </Link>
  );
}
