"use client";

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Check, Download, QrCode } from 'lucide-react';

export function QrGenerator() {
  const [formulaId, setFormulaId] = useState('');
  const [generated, setGenerated] = useState(false);
  
  const handleGenerate = () => {
    if (formulaId) {
      setGenerated(true);
      // In a real app, this would generate a QR code via API
    }
  };
  
  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="formula-id">Formula ID</Label>
        <div className="flex space-x-2">
          <Input 
            id="formula-id" 
            value={formulaId}
            onChange={(e) => setFormulaId(e.target.value)}
            placeholder="Enter formula ID"
          />
          <Button 
            onClick={handleGenerate}
            disabled={!formulaId}
            className="bg-rose-gold hover:bg-rose-gold/90 text-black shrink-0"
          >
            Generate
          </Button>
        </div>
      </div>
      
      {generated && (
        <div className="pt-4 flex flex-col items-center">
          <div className="bg-pearl-white p-4 rounded-lg border border-blush-pink/30">
            <div className="h-32 w-32 bg-blush-pink/10 flex items-center justify-center">
              <QrCode className="h-24 w-24 text-rose-gold" />
            </div>
          </div>
          
          <div className="mt-4 flex space-x-2">
            <Button variant="outline" className="text-xs flex items-center gap-1">
              <Download className="h-3 w-3" />
              <span>Download PDF</span>
            </Button>
            <Button variant="outline" className="text-xs flex items-center gap-1">
              <Download className="h-3 w-3" />
              <span>Download PNG</span>
            </Button>
          </div>
          
          <div className="mt-4 text-sm text-center text-charcoal/70">
            <div className="flex items-center justify-center gap-1 text-mint-cream">
              <Check className="h-4 w-4" />
              <span>QR code generated successfully</span>
            </div>
            <p className="text-xs mt-1">
              This QR code will take the customer to their unique formula page.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}