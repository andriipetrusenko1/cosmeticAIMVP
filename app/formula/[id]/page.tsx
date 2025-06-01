"use client";

import React from 'react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent } from '@/components/ui/card';
import { FileDown, RefreshCw } from 'lucide-react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function FormulaPage({ params }: { params: { id: string } }) {
  // Mock data - in a real app this would come from an API based on the ID
  const formula = {
    id: params.id,
    name: "Combination Skin Formula #CS-287",
    products: [
      {
        name: "Balancing Serum",
        directions: "Apply 3-4 drops to cleansed skin morning and night. Follow with moisturizer.",
        ingredients: "Aqua, Niacinamide, Glycerin, Propanediol, Butylene Glycol, Sodium Hyaluronate, Centella Asiatica Extract, Camellia Sinensis Leaf Extract, Panthenol, Allantoin, Sodium PCA, Caprylyl Glycol, Ethylhexylglycerin, Disodium EDTA, Citric Acid, Sodium Citrate, Phenoxyethanol",
        imgUrl: "https://images.pexels.com/photos/3685530/pexels-photo-3685530.jpeg?auto=compress&cs=tinysrgb&w=600"
      },
      {
        name: "Gentle Renewal Cleanser",
        directions: "Massage onto damp skin morning and night. Rinse thoroughly with lukewarm water.",
        ingredients: "Aqua, Glycerin, Coco-Glucoside, Sodium Cocoyl Isethionate, Cocamidopropyl Betaine, Disodium Laureth Sulfosuccinate, Sodium Lauroyl Sarcosinate, Glyceryl Oleate, Chamomilla Recutita Flower Extract, Saccharomyces/Rice Ferment Filtrate, Allantoin, Panthenol, Sodium PCA, Citric Acid, Tetrasodium EDTA, Phenoxyethanol, Ethylhexylglycerin",
        imgUrl: "https://images.pexels.com/photos/3685523/pexels-photo-3685523.jpeg?auto=compress&cs=tinysrgb&w=600"
      },
      {
        name: "Adaptive Moisture Complex",
        directions: "Apply a small amount to face and neck morning and night after serum application.",
        ingredients: "Aqua, Caprylic/Capric Triglyceride, Glycerin, Cetearyl Alcohol, Squalane, Ceramide NP, Ceramide AP, Ceramide EOP, Phytosphingosine, Cholesterol, Sodium Lauroyl Lactylate, Acetyl Hexapeptide-8, Palmitoyl Tripeptide-1, Palmitoyl Tetrapeptide-7, Alpha-Glucan Oligosaccharide, Lactobacillus Ferment, Saccharomyces Ferment, Dimethicone, Sodium Hyaluronate, Tocopherol, Carbomer, Xanthan Gum, Sodium Hydroxide, Disodium EDTA, Phenoxyethanol, Ethylhexylglycerin",
        imgUrl: "https://images.pexels.com/photos/4465124/pexels-photo-4465124.jpeg?auto=compress&cs=tinysrgb&w=600"
      }
    ],
    created: "2025-04-15",
    lastUpdated: "2025-04-15"
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="container max-w-4xl mx-auto px-4 py-12"
    >
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-2xl md:text-3xl font-light text-charcoal">
          My <span className="text-rose-gold font-medium">ULAB Formula</span>
        </h1>
        <div className="flex items-center text-sm text-charcoal/60">
          <span>Last updated: {formula.lastUpdated}</span>
        </div>
      </div>
      
      <Card className="mb-8 border border-blush-pink/30 shadow-sm">
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row gap-6 items-center">
            <div className="bg-blush-pink/20 rounded-full p-8 flex items-center justify-center">
              <div className="text-rose-gold text-xl font-light">{formula.name}</div>
            </div>
            <div className="flex-1">
              <h2 className="text-xl font-medium text-charcoal mb-2">Your Personalized Formula</h2>
              <p className="text-charcoal/80 mb-4">
                This custom formula was created based on your unique skin profile and concerns.
                Use these products as directed for optimal results.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button variant="outline" className="text-rose-gold border-rose-gold hover:bg-rose-gold/10 flex gap-2">
                  <FileDown size={18} />
                  <span>Download INCI List</span>
                </Button>
                <Button className="bg-rose-gold hover:bg-rose-gold/90 text-black flex gap-2">
                  <RefreshCw size={18} />
                  <span>Reorder Formula</span>
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
      
      <Tabs defaultValue="serum" className="mt-12">
        <TabsList className="w-full bg-pearl-black border-b border-blush-pink/30 p-0 mb-8">
          {formula.products.map((product, i) => (
            <TabsTrigger 
              key={i} 
              value={product.name.toLowerCase().split(' ')[0]}
              className="flex-1 py-3 px-4 data-[state=active]:text-rose-gold data-[state=active]:border-b-2 data-[state=active]:border-rose-gold rounded-none"
            >
              {product.name}
            </TabsTrigger>
          ))}
        </TabsList>
        
        {formula.products.map((product, i) => (
          <TabsContent 
            key={i} 
            value={product.name.toLowerCase().split(' ')[0]}
            className="pt-4"
          >
            <div className="grid md:grid-cols-2 gap-8">
              <div className="relative h-[300px] rounded-lg overflow-hidden shadow-md">
                <Image 
                  src={product.imgUrl} 
                  alt={product.name} 
                  fill 
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="text-xl font-medium text-charcoal mb-4">{product.name}</h3>
                
                <div className="mb-6">
                  <h4 className="text-sm uppercase tracking-wider text-charcoal/70 mb-2">Directions</h4>
                  <p className="text-charcoal/90">{product.directions}</p>
                </div>
                
                <div>
                  <h4 className="text-sm uppercase tracking-wider text-charcoal/70 mb-2">Ingredients</h4>
                  <p className="text-sm text-charcoal/80 leading-relaxed">{product.ingredients}</p>
                </div>
              </div>
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </motion.div>
  );
}