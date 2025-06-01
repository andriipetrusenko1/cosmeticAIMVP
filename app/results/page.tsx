"use client";

import React, { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { SkinProfile } from '@/components/results/skin-profile';
import { ProductRecommendation } from '@/components/results/product-recommendation';
import { SkinConditionChart } from '@/components/results/skin-condition-chart';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';

export default function ResultsPage() {
  const router = useRouter();
  
  // Mock data - in a real app this would come from an API
  const skinProfile = {
    type: "Combination",
    concerns: ["Dehydration", "Occasional Breakouts", "Uneven Texture"],
    ph: 5.7,
    sensitivity: "Moderate",
    age: "25-34"
  };
  
  const products = [
    {
      name: "Balancing Serum",
      type: "Serum",
      description: "Lightweight formula with niacinamide and hyaluronic acid to balance oil production and improve hydration.",
      ingredients: ["Niacinamide", "Hyaluronic Acid", "Centella Asiatica", "Green Tea Extract"],
      imgUrl: "https://images.pexels.com/photos/3685530/pexels-photo-3685530.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      name: "Gentle Renewal Cleanser",
      type: "Cleanser",
      description: "pH-balanced cleanser with soothing ingredients to remove impurities without disrupting skin barrier.",
      ingredients: ["Glycerin", "Allantoin", "Chamomile Extract", "Rice Ferment Filtrate"],
      imgUrl: "https://images.pexels.com/photos/3685523/pexels-photo-3685523.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      name: "Adaptive Moisture Complex",
      type: "Moisturizer",
      description: "Intelligent moisturizer that adapts to skin's changing needs throughout the day.",
      ingredients: ["Ceramides", "Peptide Complex", "Squalane", "Prebiotics"],
      imgUrl: "https://images.pexels.com/photos/4465124/pexels-photo-4465124.jpeg?auto=compress&cs=tinysrgb&w=600"
    }
  ];
  
  const chartData = [
    { name: 'Hydration', value: 65, fullValue: 100 },
    { name: 'Barrier Function', value: 72, fullValue: 100 },
    { name: 'Elasticity', value: 58, fullValue: 100 },
    { name: 'Pore Size', value: 43, fullValue: 100 },
    { name: 'Brightness', value: 70, fullValue: 100 },
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="container max-w-6xl mx-auto px-4 py-12"
    >
      <h1 className="text-3xl md:text-4xl font-light text-center text-charcoal mb-2">
        Your Personalized <span className="text-rose-gold font-medium">Skin Analysis</span>
      </h1>
      
      <p className="text-center text-charcoal/80 mb-12 max-w-2xl mx-auto">
        Based on your photos, our AI has created a custom skin profile and formula recommendation.
      </p>
      
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <SkinProfile profile={skinProfile} />
        <SkinConditionChart data={chartData} />
      </div>
      
      <h2 className="text-2xl md:text-3xl font-light text-center text-charcoal mb-8 mt-16">
        Your Personalized <span className="text-rose-gold font-medium">ULAB Trio</span>
      </h2>
      
      <div className="grid md:grid-cols-3 gap-6 mb-12">
        {products.map((product, index) => (
          <ProductRecommendation key={index} product={product} />
        ))}
      </div>
      
      <div className="flex flex-col sm:flex-row justify-center gap-4 mt-12">
        <Button 
          onClick={() => router.push('/checkout?plan=subscription')}
          className="bg-rose-gold hover:bg-rose-gold/90 text-black px-8 py-6 rounded-full text-lg"
        >
          Subscribe & Save 20%
        </Button>
        <Button 
          onClick={() => router.push('/checkout?plan=onetime')}
          variant="outline"
          className="border-rose-gold text-rose-gold hover:bg-rose-gold/10 px-8 py-6 rounded-full text-lg"
        >
          Buy Once
        </Button>
      </div>
    </motion.div>
  );
}