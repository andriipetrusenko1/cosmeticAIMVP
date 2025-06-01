"use client";

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { motion } from 'framer-motion';

interface SkinProfileProps {
  profile: {
    type: string;
    concerns: string[];
    ph: number;
    sensitivity: string;
    age: string;
  };
}

export function SkinProfile({ profile }: SkinProfileProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card className="h-full border-blush-pink/30">
        <CardHeader className="pb-2">
          <CardTitle className="text-xl text-charcoal">Your Skin Profile</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex justify-between items-center">
            <span className="text-charcoal/70">Skin Type</span>
            <span className="font-medium text-charcoal">{profile.type}</span>
          </div>
          
          <Separator className="bg-blush-pink/30" />
          
          <div>
            <div className="text-charcoal/70 mb-2">Primary Concerns</div>
            <div className="flex flex-wrap gap-2">
              {profile.concerns.map((concern, i) => (
                <div key={i} className="bg-blush-pink/20 px-3 py-1 rounded-full text-sm text-charcoal">
                  {concern}
                </div>
              ))}
            </div>
          </div>
          
          <Separator className="bg-blush-pink/30" />
          
          <div className="grid grid-cols-2 gap-4">
            <div>
              <div className="text-charcoal/70 text-sm mb-1">Skin pH</div>
              <div className="font-medium text-charcoal">{profile.ph}</div>
            </div>
            <div>
              <div className="text-charcoal/70 text-sm mb-1">Sensitivity</div>
              <div className="font-medium text-charcoal">{profile.sensitivity}</div>
            </div>
          </div>
          
          <Separator className="bg-blush-pink/30" />
          
          <div className="bg-mint-cream/20 p-4 rounded-lg">
            <div className="text-charcoal font-medium mb-2">AI Insights</div>
            <p className="text-sm text-charcoal/80">
              Your skin shows signs of dehydration despite having combination tendencies. 
              Focus on barrier support and gentle exfoliation to improve texture while maintaining hydration.
            </p>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}