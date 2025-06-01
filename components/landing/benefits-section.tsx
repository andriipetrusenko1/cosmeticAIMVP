"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Check } from 'lucide-react';

export function BenefitsSection() {
  const benefits = [
    "Personalized formulas based on your unique skin profile",
    "AI-driven analysis for accurate diagnostics",
    "Premium, science-backed ingredients",
    "Adjusts to your changing skin needs",
    "Free from harmful chemicals and irritants",
    "Cruelty-free and sustainably packaged"
  ];

  return (
    <div className="py-24 bg-blush-pink/10">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-lg"
          >
            <Image 
              src="https://images.pexels.com/photos/3762876/pexels-photo-3762876.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
              alt="Woman with glowing skin"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-rose-gold/30 to-transparent"></div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
            <h2 className="text-3xl md:text-4xl font-light text-charcoal">
              Skincare That <span className="text-rose-gold font-medium">Understands You</span>
            </h2>
            
            <p className="text-charcoal/80 leading-relaxed">
              ULAB's AI technology analyzes over 120 skin metrics to create a comprehensive profile of your skin's unique needs, formulating products that adapt to your changing skin conditions.
            </p>
            
            <ul className="space-y-3 mt-6">
              {benefits.map((benefit, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="flex items-center gap-3"
                >
                  <span className="h-6 w-6 rounded-full bg-rose-gold/20 flex items-center justify-center flex-shrink-0">
                    <Check className="h-3.5 w-3.5 text-rose-gold" />
                  </span>
                  <span className="text-charcoal/90">{benefit}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </div>
  );
}