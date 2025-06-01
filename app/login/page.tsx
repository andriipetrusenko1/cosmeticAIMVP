"use client";

import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function LoginPage() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="container max-w-md mx-auto px-4 py-16"
    >
      <div className="text-center mb-8">
        <h1 className="text-2xl md:text-3xl font-light text-charcoal">
          Welcome to <span className="text-rose-gold font-medium">ULAB</span>
        </h1>
        <p className="text-charcoal/70 mt-2">
          Sign in to access your personalized skincare formulas
        </p>
      </div>
      
      <Tabs defaultValue="login" className="w-full">
        <TabsList className="grid w-full grid-cols-2 mb-8">
          <TabsTrigger value="login">Sign In</TabsTrigger>
          <TabsTrigger value="register">Register</TabsTrigger>
        </TabsList>
        
        <TabsContent value="login">
          <Card className="border-blush-pink/30">
            <CardHeader>
              <CardTitle className="text-xl text-charcoal">Sign In</CardTitle>
              <CardDescription>
                Enter your credentials to access your account
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="Your email address" />
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="password">Password</Label>
                    <Link href="/forgot-password" className="text-sm text-rose-gold hover:underline">
                      Forgot password?
                    </Link>
                  </div>
                  <Input id="password" type="password" placeholder="Your password" />
                </div>
                <Button className="w-full bg-rose-gold hover:bg-rose-gold/90 text-black">
                  Sign In
                </Button>
              </form>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="register">
          <Card className="border-blush-pink/30">
            <CardHeader>
              <CardTitle className="text-xl text-charcoal">Create Account</CardTitle>
              <CardDescription>
                Register for your personalized skincare journey
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-6">
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
                  <Label htmlFor="register-email">Email</Label>
                  <Input id="register-email" type="email" placeholder="Your email address" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="register-password">Password</Label>
                  <Input id="register-password" type="password" placeholder="Create a password" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="confirm-password">Confirm Password</Label>
                  <Input id="confirm-password" type="password" placeholder="Confirm your password" />
                </div>
                <Button className="w-full bg-rose-gold hover:bg-rose-gold/90 text-black">
                  Create Account
                </Button>
              </form>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </motion.div>
  );
}