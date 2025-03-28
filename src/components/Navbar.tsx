'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Check if a path is active
  const isActive = (path: string) => pathname === path;

  // Toggle menu function
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Close menu when a link is clicked
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="bg-[#0F172A] py-6 md:py-7 px-6 md:px-12 flex items-center justify-between shadow-lg sticky top-0 z-50">
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

      {/* Desktop Navigation - hidden on mobile */}
      <nav className="hidden md:flex space-x-12">
        <NavLink href="/" isActive={isActive("/")} onClick={closeMenu}>Home</NavLink>
        <NavLink href="/students" isActive={isActive("/students")} onClick={closeMenu}>Students</NavLink>
        <NavLink href="/partners" isActive={isActive("/partners")} onClick={closeMenu}>Partners</NavLink>
      </nav>

      {/* Mobile Menu Button - only visible on mobile */}
      <button 
        className="md:hidden text-white hover:text-blue-400 transition-colors z-50"
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Menu Overlay - shown when menu is open */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
            onClick={closeMenu}
          />
        )}
      </AnimatePresence>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed top-0 right-0 h-full w-[75%] max-w-[300px] bg-[#0F172A] z-40 md:hidden flex flex-col shadow-xl"
          >
            <div className="flex justify-end p-6">
              <button
                className="text-white hover:text-blue-400 transition-colors"
                onClick={closeMenu}
                aria-label="Close menu"
              >
                <X size={24} />
              </button>
            </div>
            
            <nav className="flex flex-col space-y-6 p-8 pt-0">
              <MobileNavLink href="/" isActive={isActive("/")} onClick={closeMenu}>Home</MobileNavLink>
              <MobileNavLink href="/students" isActive={isActive("/students")} onClick={closeMenu}>Students</MobileNavLink>
              <MobileNavLink href="/partners" isActive={isActive("/partners")} onClick={closeMenu}>Partners</MobileNavLink>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

// Custom NavLink component with hover animations for desktop
type NavLinkProps = {
  href: string;
  children: React.ReactNode;
  isActive: boolean;
  onClick?: () => void;
};

function NavLink({ href, children, isActive, onClick }: NavLinkProps) {
  return (
    <Link href={href} className="relative group" onClick={onClick}>
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

// Mobile-specific NavLink with different styling
function MobileNavLink({ href, children, isActive, onClick }: NavLinkProps) {
  return (
    <Link 
      href={href} 
      className={`block ${isActive ? 'text-blue-400' : 'text-white'} text-xl font-medium hover:text-blue-400 transition-colors duration-300 border-l-4 ${isActive ? 'border-blue-400' : 'border-transparent'} pl-3`}
      onClick={onClick}
    >
      {children}
    </Link>
  );
}