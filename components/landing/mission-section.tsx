"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

export function MissionSection() {
  return (
    <div className="py-24 bg-pearl-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-light text-charcoal mb-6">
            Our <span className="text-rose-gold font-medium">Mission</span>
          </h2>
          <p className="text-lg text-charcoal/80 leading-relaxed">
            At ULAB, we believe everyone deserves skincare that's as unique as they are. 
            We're revolutionizing the beauty industry by combining advanced AI technology with 
            premium formulations created by leading dermatologists and cosmetic chemists.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-6 order-2 md:order-1"
          >
            <div className="space-y-4">
              <h3 className="text-xl font-medium text-charcoal">From Our Founder</h3>
              <p className="text-charcoal/80 leading-relaxed italic">
                "After years of struggling to find products that worked for my sensitive skin, 
                I realized the one-size-fits-all approach to skincare was fundamentally flawed. 
                That's why we built ULAB – to create truly personalized formulations based on 
                real data about your unique skin."
              </p>
              <div className="pt-2">
                <p className="text-rose-gold font-medium">Dr. Sophia Chen</p>
                <p className="text-sm text-charcoal/70">Founder & Chief Science Officer</p>
              </div>
            </div>
            
            <div className="space-y-4 pt-6">
              <h3 className="text-xl font-medium text-charcoal">Our Lab</h3>
              <p className="text-charcoal/80 leading-relaxed">
                Every ULAB formula is created in our state-of-the-art laboratory using pharmaceutical-grade 
                equipment and ingredients sourced from trusted suppliers. We maintain the highest standards 
                of quality and safety in every batch we produce.
              </p>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative h-[400px] rounded-2xl overflow-hidden shadow-lg order-1 md:order-2"
          >
            <Image 
              src="https://images.pexels.com/photos/3735709/pexels-photo-3735709.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
              alt="ULAB Laboratory"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/50 to-transparent"></div>
            <div className="absolute bottom-6 left-6 right-6">
              <div className="inline-block bg-pearl-white/90 backdrop-blur-sm px-4 py-2 rounded-lg">
                <p className="text-sm text-charcoal font-medium">Our state-of-the-art laboratory in San Francisco</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}