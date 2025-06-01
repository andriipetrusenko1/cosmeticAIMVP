"use client";

import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Separator } from '@/components/ui/separator';
import { useSearchParams } from 'next/navigation';
import { motion } from 'framer-motion';

export default function CheckoutPage() {
  const searchParams = useSearchParams();
  const plan = searchParams.get('plan') || 'subscription';
  
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="container max-w-6xl mx-auto px-4 py-12"
    >
      <h1 className="text-3xl md:text-4xl font-light text-center text-charcoal mb-12">
        Complete Your <span className="text-rose-gold font-medium">Order</span>
      </h1>
      
      <div className="grid md:grid-cols-3 gap-8">
        <div className="md:col-span-2 space-y-8">
          <Card className="border-blush-pink/30">
            <CardHeader>
              <CardTitle className="text-xl text-charcoal">Contact Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="first-name">First name</Label>
                  <Input id="first-name" placeholder="First name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="last-name">Last name</Label>
                  <Input id="last-name" placeholder="Last name" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="Your email address" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone (optional)</Label>
                <Input id="phone" type="tel" placeholder="Your phone number" />
              </div>
            </CardContent>
          </Card>
          
          <Card className="border-blush-pink/30">
            <CardHeader>
              <CardTitle className="text-xl text-charcoal">Shipping Address</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="address">Address</Label>
                <Input id="address" placeholder="Street address" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="address2">Apartment, suite, etc. (optional)</Label>
                <Input id="address2" placeholder="Apartment, suite, etc." />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="city">City</Label>
                  <Input id="city" placeholder="City" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="state">State / Province</Label>
                  <Input id="state" placeholder="State / Province" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="zip">Zip / Postal code</Label>
                  <Input id="zip" placeholder="Zip / Postal code" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="country">Country</Label>
                  <Input id="country" placeholder="Country" defaultValue="United States" />
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="border-blush-pink/30">
            <CardHeader>
              <CardTitle className="text-xl text-charcoal">Payment</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <RadioGroup defaultValue="card" className="space-y-4">
                <div className="flex items-center space-x-2 border p-4 rounded-md">
                  <RadioGroupItem value="card" id="card" />
                  <Label htmlFor="card" className="flex-1">Credit / Debit Card</Label>
                </div>
                <div className="flex items-center space-x-2 border p-4 rounded-md">
                  <RadioGroupItem value="paypal" id="paypal" />
                  <Label htmlFor="paypal" className="flex-1">PayPal</Label>
                </div>
                <div className="flex items-center space-x-2 border p-4 rounded-md">
                  <RadioGroupItem value="apple" id="apple" />
                  <Label htmlFor="apple" className="flex-1">Apple Pay</Label>
                </div>
              </RadioGroup>
              
              <div className="space-y-4 mt-4">
                <div className="space-y-2">
                  <Label htmlFor="card-number">Card number</Label>
                  <Input id="card-number" placeholder="1234 5678 9012 3456" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="expiration">Expiration date</Label>
                    <Input id="expiration" placeholder="MM/YY" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="cvv">Security code</Label>
                    <Input id="cvv" placeholder="CVV" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="name-on-card">Name on card</Label>
                  <Input id="name-on-card" placeholder="Exactly as shown on card" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div>
          <Card className="border-blush-pink/30 sticky top-8">
            <CardHeader>
              <CardTitle className="text-xl text-charcoal">Order Summary</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-charcoal/80">ULAB Personalized Trio</span>
                  <span className="font-medium">{plan === 'subscription' ? '$84.99' : '$99.99'}</span>
                </div>
                {plan === 'subscription' && (
                  <div className="text-xs text-mint-cream bg-mint-cream/20 px-2 py-1 rounded-full inline-block">
                    Subscription - 15% discount applied
                  </div>
                )}
                <div className="flex justify-between text-charcoal/80">
                  <span>Shipping</span>
                  <span>Free</span>
                </div>
                
                <Separator className="my-2" />
                
                <div className="flex justify-between font-medium">
                  <span>Total</span>
                  <span>{plan === 'subscription' ? '$84.99' : '$99.99'}</span>
                </div>
                
                {plan === 'subscription' && (
                  <div className="text-xs text-charcoal/70 mt-2">
                    Billed every 30 days. Cancel anytime.
                  </div>
                )}
              </div>
              
              <Button className="w-full bg-rose-gold hover:bg-rose-gold/90 text-black mt-6">
                Complete Order
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </motion.div>
  );
}