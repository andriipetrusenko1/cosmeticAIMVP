"use client";

import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { UserTable } from '@/components/admin/user-table';
import { FormulaTable } from '@/components/admin/formula-table';
import { DashboardChart } from '@/components/admin/dashboard-chart';
import { QrGenerator } from '@/components/admin/qr-generator';

export default function AdminDashboard() {
  return (
    <div className="container mx-auto p-4 py-8">
      <h1 className="text-2xl md:text-3xl font-light text-charcoal mb-8">
        Admin <span className="text-rose-gold font-medium">Dashboard</span>
      </h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-normal text-charcoal/70">Total Users</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-medium text-charcoal">1,246</p>
            <p className="text-xs text-mint-cream bg-mint-cream/20 inline-block px-2 py-1 rounded-full">
              +12% from last month
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-normal text-charcoal/70">Active Subscriptions</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-medium text-charcoal">879</p>
            <p className="text-xs text-mint-cream bg-mint-cream/20 inline-block px-2 py-1 rounded-full">
              +8% from last month
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-normal text-charcoal/70">Revenue</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-medium text-charcoal">$45,890</p>
            <p className="text-xs text-mint-cream bg-mint-cream/20 inline-block px-2 py-1 rounded-full">
              +15% from last month
            </p>
          </CardContent>
        </Card>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
        <div className="lg:col-span-2">
          <Card className="h-full">
            <CardHeader>
              <CardTitle>Monthly Performance</CardTitle>
            </CardHeader>
            <CardContent>
              <DashboardChart />
            </CardContent>
          </Card>
        </div>
        
        <div>
          <Card className="h-full">
            <CardHeader>
              <CardTitle>QR Generator</CardTitle>
            </CardHeader>
            <CardContent>
              <QrGenerator />
            </CardContent>
          </Card>
        </div>
      </div>
      
      <Tabs defaultValue="users" className="mt-12">
        <TabsList className="w-full max-w-md mx-auto mb-8">
          <TabsTrigger value="users" className="flex-1">Users</TabsTrigger>
          <TabsTrigger value="formulas" className="flex-1">Formulas</TabsTrigger>
          <TabsTrigger value="orders" className="flex-1">Orders</TabsTrigger>
        </TabsList>
        
        <TabsContent value="users">
          <UserTable />
        </TabsContent>
        
        <TabsContent value="formulas">
          <FormulaTable />
        </TabsContent>
        
        <TabsContent value="orders">
          <Card>
            <CardHeader>
              <CardTitle>Recent Orders</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-center py-12 text-muted-foreground">
                Order data would be displayed here
              </p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}