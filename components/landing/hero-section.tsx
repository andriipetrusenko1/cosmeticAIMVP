"use client";

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

export function HeroSection() {
  return (
    <div className="relative bg-gradient-to-b from-blush-pink/20 to-pearl-white pt-20 pb-24 md:pt-24 md:pb-32">
      <motion.div 
        className="container mx-auto px-4 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <motion.h1 
          className="text-4xl md:text-5xl lg:text-6xl font-light text-charcoal mb-6 md:mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          Your Skin, <span className="text-rose-gold font-medium">Reimagined by AI</span>
        </motion.h1>
        
        <motion.p 
          className="text-lg md:text-xl text-charcoal/80 max-w-2xl mx-auto mb-8 md:mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          Advanced AI analysis of your unique skin profile to create personalized, science-backed skincare formulations delivered to your door.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="inline-block"
        >
         <Link href="/upload">
          <Button
            className="bg-rose-gold hover:bg-rose-gold/90 text-black px-8 py-6 rounded-full text-lg shadow-lg border-2 border-rose-gold transition-transform hover:scale-105"
          >
            Start Your Skin Analysis
          </Button>
        </Link>
        </motion.div>
        
        <motion.div
          className="mt-16 md:mt-24 flex flex-col md:flex-row items-center justify-center gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <div className="flex flex-col items-center">
            <div className="text-rose-gold text-xl font-light mb-2">98%</div>
            <div className="text-charcoal/80 text-sm">Report improved skin</div>
          </div>
          
          <div className="h-8 border-l border-blush-pink/50 hidden md:block"></div>
          
          <div className="flex flex-col items-center">
            <div className="text-rose-gold text-xl font-light mb-2">12,500+</div>
            <div className="text-charcoal/80 text-sm">Unique formulas created</div>
          </div>
          
          <div className="h-8 border-l border-blush-pink/50 hidden md:block"></div>
          
          <div className="flex flex-col items-center">
            <div className="text-rose-gold text-xl font-light mb-2">30 day</div>
            <div className="text-charcoal/80 text-sm">Money-back guarantee</div>
          </div>
        </motion.div>
      </motion.div>
      
      {/* Decorative Elements */}
      <div className="absolute top-40 left-8 w-24 h-24 rounded-full bg-blush-pink/20 blur-3xl"></div>
      <div className="absolute bottom-20 right-12 w-32 h-32 rounded-full bg-mint-cream/30 blur-3xl"></div>
      <div className="absolute top-1/2 right-1/4 w-16 h-16 rounded-full bg-rose-gold/10 blur-2xl"></div>
    </div>
  );
}