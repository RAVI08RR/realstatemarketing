"use client";
import { useState } from 'react';
import Image from 'next/image';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-white shadow-sm relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-[80px]">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex items-center space-x-2">
              <Image 
                src="/images/logo.svg" 
                alt="DreamNest Logo"
                width={208}
                height={80}
                className="lg:w-50 w-50"
              />
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#" className="text-gray-700 hover:text-amber-600 transition-colors">
              Properties
            </a>
            <a href="#" className="text-gray-700 hover:text-amber-600 transition-colors">
              About
            </a>
            <a href="#" className="text-gray-700 hover:text-amber-600 transition-colors">
              Services
            </a>
            <a href="#" className="text-gray-700 hover:text-amber-600 transition-colors">
              Contact
            </a>
          </nav>

          {/* Desktop CTA Button */}
          <div className="hidden md:block">
            <button className="bg-[#AC9020] text-white px-6 py-2 rounded-lg hover:bg-[#AC9020]/80 transition-colors">
             Get a Free Consultation
              </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              onClick={toggleMobileMenu}
              className="text-gray-700 hover:text-amber-600 transition-colors"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? (
                // Close icon (X)
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                // Hamburger icon
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg border-t z-50">
            <nav className="px-4 py-6 space-y-4">
              <a 
                href="#" 
                className="block text-gray-700 hover:text-amber-600 transition-colors py-2 border-b border-gray-100"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Properties
              </a>
              <a 
                href="#" 
                className="block text-gray-700 hover:text-amber-600 transition-colors py-2 border-b border-gray-100"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </a>
              <a 
                href="#" 
                className="block text-gray-700 hover:text-amber-600 transition-colors py-2 border-b border-gray-100"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Services
              </a>
              <a 
                href="#" 
                className="block text-gray-700 hover:text-amber-600 transition-colors py-2 border-b border-gray-100"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </a>
              
              {/* Mobile CTA Button */}
              <div className="pt-4">
                <button 
                  className="w-full bg-[#AC9020] text-white px-6 py-3 rounded-lg hover:bg-[#AC9020]/80 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Get a Free Consultation

                </button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}