"use client";

import React, { useEffect, useState } from 'react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

export function DashboardChart() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Mock data - in a real app this would come from an API
  const data = [
    { month: 'Jan', users: 420, revenue: 15400 },
    { month: 'Feb', users: 580, revenue: 21000 },
    { month: 'Mar', users: 750, revenue: 28500 },
    { month: 'Apr', users: 890, revenue: 34000 },
    { month: 'May', users: 1050, revenue: 39500 },
    { month: 'Jun', users: 1246, revenue: 45890 },
  ];

  if (!mounted) {
    return <div className="flex items-center justify-center h-[300px]">
      <div className="text-charcoal/50">Loading chart...</div>
    </div>;
  }

  return (
    <div className="h-[300px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="colorUsers" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#F7DAD9" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#F7DAD9" stopOpacity={0.1} />
            </linearGradient>
            <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#B76E79" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#B76E79" stopOpacity={0.1} />
            </linearGradient>
          </defs>
          <XAxis dataKey="month" tick={{ fill: '#333333' }} />
          <YAxis yAxisId="left" tick={{ fill: '#333333' }} />
          <YAxis yAxisId="right" orientation="right" tick={{ fill: '#333333' }} />
          <CartesianGrid strokeDasharray="3 3" stroke="#F7DAD9" />
          <Tooltip />
          <Area
            yAxisId="left"
            type="monotone"
            dataKey="users"
            stroke="#F7DAD9"
            fillOpacity={1}
            fill="url(#colorUsers)"
          />
          <Area
            yAxisId="right"
            type="monotone"
            dataKey="revenue"
            stroke="#B76E79"
            fillOpacity={1}
            fill="url(#colorRevenue)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}