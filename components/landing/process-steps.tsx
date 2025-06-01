"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Camera, FlaskConical, Sparkles } from 'lucide-react';

export function ProcessSteps() {
  const steps = [
    {
      icon: <Camera className="h-8 w-8 text-rose-gold" />,
      title: "Upload",
      description: "Take clear photos of your skin for AI analysis."
    },
    {
      icon: <FlaskConical className="h-8 w-8 text-rose-gold" />,
      title: "Diagnose",
      description: "Our AI creates a detailed profile of your unique skin needs."
    },
    {
      icon: <Sparkles className="h-8 w-8 text-rose-gold" />,
      title: "Receive Formula",
      description: "Get your personalized skincare trio delivered to your door."
    }
  ];

  return (
    <div className="py-20 bg-pearl-white">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-3xl md:text-4xl font-light text-center text-charcoal mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          How <span className="text-rose-gold font-medium">ULAB</span> Works
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto relative">
          {/* Connecting Line */}
          <div className="absolute top-16 left-1/2 transform -translate-x-1/2 h-[1px] w-[80%] bg-blush-pink/50 hidden md:block"></div>
          
          {steps.map((step, i) => (
            <motion.div 
              key={i}
              className="flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="w-16 h-16 rounded-full bg-blush-pink/30 flex items-center justify-center mb-6 relative z-10">
                {step.icon}
              </div>
              <h3 className="text-xl font-medium text-charcoal mb-3">{step.title}</h3>
              <p className="text-charcoal/70">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}