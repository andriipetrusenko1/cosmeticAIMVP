"use client";

import React, { useState, useCallback } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Cloud, Image as ImageIcon, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

interface UploadCardProps {
  title: string;
  description: string;
  onChange: (file: File | null) => void;
  file: File | null;
}

export function UploadCard({ title, description, onChange, file }: UploadCardProps) {
  const [isDragging, setIsDragging] = useState(false);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  
  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  }, []);
  
  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  }, []);
  
  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      const file = e.dataTransfer.files[0];
      if (file.type.startsWith('image/')) {
        setPreviewUrl(URL.createObjectURL(file));
        onChange(file);
      }
    }
  }, [onChange]);
  
  const handleFileChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      setPreviewUrl(URL.createObjectURL(file));
      onChange(file);
    }
  }, [onChange]);
  
  const removeFile = useCallback(() => {
    if (previewUrl) {
      URL.revokeObjectURL(previewUrl);
    }
    setPreviewUrl(null);
    onChange(null);
  }, [previewUrl, onChange]);
  
  return (
    <Card 
      className={`border-2 transition-all ${
        isDragging 
          ? 'border-rose-gold border-dashed bg-blush-pink/10' 
          : file 
            ? 'border-mint-cream bg-mint-cream/10' 
            : 'border-blush-pink/50 border-dashed'
      }`}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      <CardContent className="p-6 h-[300px] flex flex-col justify-center items-center text-center">
        <AnimatePresence mode="wait">
          {!previewUrl ? (
            <motion.div 
              key="upload"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex flex-col items-center"
            >
              <div className="w-16 h-16 rounded-full bg-blush-pink/30 flex items-center justify-center mb-4">
                {isDragging ? <Cloud className="h-8 w-8 text-rose-gold" /> : <ImageIcon className="h-8 w-8 text-rose-gold" />}
              </div>
              
              <h3 className="text-lg font-medium text-charcoal mb-2">{title}</h3>
              <p className="text-charcoal/70 text-sm mb-6">{description}</p>
              
              <div className="relative">
                <input
                  type="file"
                  id={`file-${title.replace(/\s+/g, '-').toLowerCase()}`}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                  onChange={handleFileChange}
                  accept="image/*"
                />
                <Button variant="outline" className="border-rose-gold text-rose-gold hover:bg-rose-gold/10">
                  Select Photo
                </Button>
              </div>
              
              <p className="text-xs text-charcoal/60 mt-4">
                or drag and drop here
              </p>
            </motion.div>
          ) : (
            <motion.div 
              key="preview"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="relative w-full h-full"
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <Image
                  src={previewUrl}
                  alt="Preview"
                  fill
                  className="object-contain"
                />
              </div>
              
              <button
                onClick={removeFile}
                className="absolute top-0 right-0 p-1 bg-black rounded-full shadow-md z-10"
              >
                <X className="h-5 w-5 text-rose-gold" />
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </CardContent>
    </Card>
  );
}