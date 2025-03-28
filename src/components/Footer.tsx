'use client';

import Link from 'next/link';
import { Instagram, Linkedin, Mail, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#131C30] py-10 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Company Information */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4 hover:text-blue-400 transition-colors">
              Hacked
            </h3>
            <p className="text-gray-400 mb-4">
              Connecting talented students with internship opportunities and meaningful community service projects.
            </p>
            <div className="flex space-x-4">
              <SocialIcon href="https://www.instagram.com/the.hacked.project/" icon={<Instagram size={20} />} />
              <SocialIcon href="#" icon={<Linkedin size={20} />} />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4 hover:text-blue-400 transition-colors">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <FooterLink href="/">Home</FooterLink>
              <FooterLink href="/students">For Students</FooterLink>
              <FooterLink href="/partners">For Partners</FooterLink>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4 hover:text-blue-400 transition-colors">
              Contact Us
            </h3>
            <ul className="space-y-2">
              <li className="flex items-center text-gray-400 hover:text-blue-400 transition-colors">
                <span className="mr-2">
                  <Mail size={16} />
                </span>
                <span>the.hacked.project@gmail.com</span>
              </li>
              <li className="flex items-center text-gray-400 hover:text-blue-400 transition-colors">
                <span className="mr-2">
                  <Phone size={16} />
                </span>
                <span>+91 9818086097</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6">
          <p className="text-gray-500 text-sm text-center hover:text-gray-400 transition-colors">
            © {new Date().getFullYear()} Hacked. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

// Social icon component with simpler animations
function SocialIcon({ href, icon }: { href: string; icon: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-gray-400 hover:text-blue-400 hover:scale-110 transition-all inline-block"
    >
      {icon}
    </a>
  );
}

// Footer link component without underline animation
function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <li className="transition-transform hover:translate-x-1">
      <Link
        href={href}
        className="text-gray-400 hover:text-blue-400 transition-colors flex items-center"
      >
        {children}
      </Link>
    </li>
  );
}
