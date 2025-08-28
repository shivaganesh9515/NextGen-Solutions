'use client'

import React, { useState } from 'react';
import { LogIn, Menu } from 'lucide-react';

interface HeaderProps {
  className?: string;
}

const Navbar: React.FC<HeaderProps> = ({ className = "" }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className={`relative z-20 fade-in active ${className}`}>
      <nav className="flex items-center justify-between px-4 sm:px-6 lg:px-8 py-4 lg:py-6">
        {/* Logo */}
        <a href="#" className="flex items-center space-x-2 group">
          <span className="text-xl tracking-tight font-inter font-light">
            NEXTGEN SOLUTIONS
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-8">
          <div className="flex backdrop-blur-sm rounded-full p-1 border bg-white/5 border-white/10">
            <a 
              href="#" 
              className="px-4 py-2 rounded-full text-sm transition-all duration-300 font-inter font-light text-gray-300 hover:bg-white/10 hover:text-white"
            >
              Products
            </a>
            <a 
              href="#" 
              className="px-4 py-2 rounded-full text-sm transition-all duration-300 font-inter font-light text-gray-300 hover:bg-white/10 hover:text-white"
            >
              Analytics
            </a>
            <a 
              href="#" 
              className="px-4 py-2 rounded-full text-sm transition-all duration-300 font-inter font-light text-gray-300 hover:bg-white/10 hover:text-white"
            >
              Research
            </a>
            <a 
              href="#" 
              className="px-4 py-2 rounded-full text-sm transition-all duration-300 font-inter font-light text-gray-300 hover:bg-white/10 hover:text-white"
            >
              Support
            </a>
          </div>
          
          <a 
            href="#" 
            className="inline-flex items-center px-6 py-2.5 rounded-lg text-sm bg-gradient-to-r hover:from-violet-500 hover:to-purple-500 transition-all duration-300 shadow-lg hover:shadow-violet-500/25 font-inter font-light from-violet-600 to-purple-600 text-white"
          >
            <LogIn className="w-4 h-4 mr-2" />
            Get Quote
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button 
          onClick={toggleMobileMenu}
          className="lg:hidden flex items-center justify-center h-10 w-10 rounded-lg transition-all duration-300 hover:bg-white/10 text-white"
          aria-label="Toggle mobile menu"
        >
          <Menu className="w-6 h-6" />
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-black/90 backdrop-blur-sm border-t border-white/10">
          <div className="px-4 py-4 space-y-2">
            <a 
              href="#" 
              className="block px-4 py-2 rounded-lg text-sm font-inter font-light text-gray-300 hover:bg-white/10 hover:text-white transition-all duration-300"
            >
              Products
            </a>
            <a 
              href="#" 
              className="block px-4 py-2 rounded-lg text-sm font-inter font-light text-gray-300 hover:bg-white/10 hover:text-white transition-all duration-300"
            >
              Analytics
            </a>
            <a 
              href="#" 
              className="block px-4 py-2 rounded-lg text-sm font-inter font-light text-gray-300 hover:bg-white/10 hover:text-white transition-all duration-300"
            >
              Research
            </a>
            <a 
              href="#" 
              className="block px-4 py-2 rounded-lg text-sm font-inter font-light text-gray-300 hover:bg-white/10 hover:text-white transition-all duration-300"
            >
              Support
            </a>
            <div className="pt-2 border-t border-white/10">
              <a 
                href="#" 
                className="flex items-center px-4 py-2 rounded-lg text-sm bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-500 hover:to-purple-500 transition-all duration-300 shadow-lg hover:shadow-violet-500/25 font-inter font-light text-white"
              >
                <LogIn className="w-4 h-4 mr-2" />
                Get Quote
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
