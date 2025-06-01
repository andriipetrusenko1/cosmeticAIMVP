"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { UploadCard } from '@/components/upload/upload-card';
import { motion } from 'framer-motion';

export default function UploadPage() {
  const router = useRouter();
  const [facePhoto, setFacePhoto] = useState<File | null>(null);
  const [scalpPhoto, setScalpPhoto] = useState<File | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would upload the photos to a server here
    // For the MVP, we'll just navigate to the results page
    router.push('/results');
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="container max-w-5xl mx-auto px-4 py-12"
    >
      <h1 className="text-3xl md:text-4xl font-light text-center text-charcoal mb-8">
        Upload Your Photos for <span className="text-rose-gold font-medium">AI Analysis</span>
      </h1>
      
      <p className="text-center text-charcoal/80 mb-12 max-w-2xl mx-auto">
        For the most accurate skin diagnosis, please upload clear, well-lit photos of your face and scalp without makeup or filters.
      </p>
      
      <form onSubmit={handleSubmit} className="space-y-8">
        <div className="grid md:grid-cols-2 gap-8">
          <UploadCard 
            title="Face Photo"
            description="Front-facing in natural light"
            onChange={setFacePhoto}
            file={facePhoto}
          />
          
          <UploadCard 
            title="Scalp Photo"
            description="Close-up of exposed scalp area"
            onChange={setScalpPhoto}
            file={scalpPhoto}
          />
        </div>
        
        <div className="text-center text-sm text-charcoal/70 max-w-2xl mx-auto mt-6">
          Your privacy is protected. Photos are used only for AI analysis and are never shared. They're automatically deleted after processing.
        </div>
        
        <div className="flex justify-center mt-8">
          <Button 
            type="submit"
            className="bg-rose-gold hover:bg-rose-gold/90 text-black px-12 py-6 rounded-full text-lg"
            disabled={!facePhoto || !scalpPhoto}
          >
            Analyze My Skin
          </Button>
        </div>
      </form>
    </motion.div>
  );
}