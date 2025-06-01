"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';

export function Navigation() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const isActive = (path: string) => pathname === path;

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '#' },
    { name: 'How It Works', path: '#' },
    { name: 'FAQ', path: '#' },
  ];
  
  return (
    <header
      className={`sticky top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-pearl-white shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link href="/" className="flex items-center">
            <span className="text-xl md:text-2xl font-semibold text-rose-gold">ULAB</span>
          </Link>
          
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item, i) => (
              <Link 
                key={i}
                href={item.path}
                className={`text-sm font-medium transition-colors hover:text-rose-gold ${
                  isActive(item.path) 
                    ? 'text-rose-gold'
                    : 'text-charcoal/80'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>
          
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/login">
              <Button variant="ghost" className="text-charcoal hover:text-rose-gold hover:bg-blush-pink/10">
                Sign In
              </Button>
            </Link>
            <Link href="/upload">
              <Button className="bg-rose-gold hover:bg-rose-gold/90 text-black">
                Get Started
              </Button>
            </Link>
            <Link href="/admin">
              <Button className="bg-rose-gold hover:bg-rose-gold/90 text-black">
                AdminDashboard
              </Button>
            </Link>
          </div>
          
          <button
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6 text-charcoal" />
            ) : (
              <Menu className="h-6 w-6 text-charcoal" />
            )}
          </button>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-pearl-white"
        >
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            {navItems.map((item, i) => (
              <Link 
                key={i}
                href={item.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`text-base py-2 font-medium transition-colors ${
                  isActive(item.path) 
                    ? 'text-rose-gold'
                    : 'text-charcoal/80'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-4 flex flex-col space-y-3">
              <Link href="/login">
                <Button variant="ghost" className="w-full justify-start text-charcoal hover:text-rose-gold hover:bg-blush-pink/10">
                  Sign In
                </Button>
              </Link>
              <Link href="/upload">
                <Button className="w-full bg-rose-gold hover:bg-rose-gold/90 text-black">
                  Get Started
                </Button>
              </Link>
              <Link href="/admin">
                <Button className="w-full bg-rose-gold hover:bg-rose-gold/90 text-black">
                  Dashboard
                </Button>
              </Link>
            </div>
          </div>
        </motion.div>
      )}
    </header>
  );
}