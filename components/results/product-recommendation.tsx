"use client";

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Info } from 'lucide-react';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface ProductRecommendationProps {
  product: {
    name: string;
    type: string;
    description: string;
    ingredients: string[];
    imgUrl: string;
  };
}

export function ProductRecommendation({ product }: ProductRecommendationProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card className="h-full border-blush-pink/30 overflow-hidden hover:shadow-md transition-shadow duration-300">
        <div className="relative h-48">
          <Image 
            src={product.imgUrl} 
            alt={product.name}
            fill
            className="object-cover"
          />
          <div className="absolute top-2 right-2 bg-pearl-white/80 backdrop-blur-sm rounded-full px-3 py-1 text-xs font-medium text-rose-gold">
            {product.type}
          </div>
        </div>
        <CardHeader className="pb-2">
          <CardTitle className="text-lg text-charcoal">{product.name}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm text-charcoal/80">{product.description}</p>
          
          <div>
            <div className="flex items-center gap-2 text-sm text-charcoal/70 mb-2">
              <span>Key Ingredients</span>
              <Popover>
                <PopoverTrigger>
                  <Info className="h-4 w-4 text-charcoal/60" />
                </PopoverTrigger>
                <PopoverContent className="w-80">
                  <div className="space-y-2">
                    <h4 className="font-medium text-charcoal">About These Ingredients</h4>
                    <p className="text-sm text-charcoal/80">
                      These ingredients were specifically chosen for your skin's unique needs based on our AI analysis.
                    </p>
                  </div>
                </PopoverContent>
              </Popover>
            </div>
            <div className="flex flex-wrap gap-1">
              {product.ingredients.map((ingredient, i) => (
                <div key={i} className="bg-blush-pink/20 px-2 py-0.5 rounded-full text-xs text-charcoal">
                  {ingredient}
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}