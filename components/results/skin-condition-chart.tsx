"use client";

import React, { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  ResponsiveContainer,
} from 'recharts';
import { motion } from 'framer-motion';

interface SkinConditionChartProps {
  data: Array<{
    name: string;
    value: number;
    fullValue: number;
  }>;
}

export function SkinConditionChart({ data }: SkinConditionChartProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <Card className="h-full border-blush-pink/30">
        <CardHeader className="pb-2">
          <CardTitle className="text-xl text-charcoal">Skin Condition Analysis</CardTitle>
        </CardHeader>
        <CardContent className="flex items-center justify-center h-[300px]">
          <div className="text-charcoal/50">Loading chart...</div>
        </CardContent>
      </Card>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
    >
      <Card className="h-full border-blush-pink/30">
        <CardHeader className="pb-2">
          <CardTitle className="text-xl text-charcoal">Skin Condition Analysis</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
                <PolarGrid stroke="#F7DAD9" />
                <PolarAngleAxis dataKey="name" tick={{ fill: '#333333', fontSize: 12 }} />
                <PolarRadiusAxis domain={[0, 100]} axisLine={false} tick={false} />
                <Radar
                  name="Current"
                  dataKey="value"
                  stroke="#B76E79"
                  fill="#B76E79"
                  fillOpacity={0.4}
                />
              </RadarChart>
            </ResponsiveContainer>
          </div>
          
          <div className="text-xs text-charcoal/60 text-center mt-4">
            Based on AI analysis of your skin photos and profile
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}