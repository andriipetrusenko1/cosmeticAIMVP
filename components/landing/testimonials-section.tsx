"use client";

import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

export function TestimonialsSection() {
  const testimonials = [
    {
      name: "Emily L.",
      image: "https://images.pexels.com/photos/1987301/pexels-photo-1987301.jpeg?auto=compress&cs=tinysrgb&w=600",
      text: "After years of trying countless products, ULAB has completely transformed my skin. The personalized approach makes all the difference.",
      rating: 5
    },
    {
      name: "Michael T.",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=600",
      text: "I was skeptical about AI skincare, but the results speak for themselves. My chronic dryness is gone and my skin looks healthier than ever.",
      rating: 5
    },
    {
      name: "Aisha J.",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=600",
      text: "The diagnostic process was fascinating and spot-on. My hyperpigmentation has noticeably faded after just 4 weeks using my custom formula.",
      rating: 5
    }
  ];

  return (
    <div className="py-20 bg-blush-pink/10">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-light text-charcoal mb-4">
            Real Results, Real <span className="text-rose-gold font-medium">People</span>
          </h2>
          <p className="text-charcoal/70 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our customers are saying about their ULAB experience.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Card className="h-full border-blush-pink/30 hover:shadow-md transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="h-12 w-12 rounded-full overflow-hidden relative">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name} 
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <div>
                      <div className="text-charcoal font-medium">{testimonial.name}</div>
                      <div className="flex">
                        {Array(testimonial.rating).fill(0).map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-rose-gold text-rose-gold" />
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-charcoal/80 italic">"{testimonial.text}"</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}