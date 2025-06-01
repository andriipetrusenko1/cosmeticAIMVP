"use client";

import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from '@/components/ui/button';
import { Eye, FileEdit, QrCode, Trash2 } from 'lucide-react';

export function FormulaTable() {
  // Mock data - in a real app this would come from an API
  const formulas = [
    {
      id: "f-1",
      name: "Sensitive Skin Formula #SS-134",
      createdFor: "Emma Wilson",
      created: "2025-02-17",
      lastUpdated: "2025-03-12",
      status: "active"
    },
    {
      id: "f-2",
      name: "Oily Skin Formula #OS-287",
      createdFor: "James Rodriguez",
      created: "2025-03-05",
      lastUpdated: "2025-03-05",
      status: "active"
    },
    {
      id: "f-3",
      name: "Dry Skin Formula #DS-093",
      createdFor: "Olivia Chen",
      created: "2025-01-30",
      lastUpdated: "2025-01-30",
      status: "inactive"
    },
    {
      id: "f-4",
      name: "Combination Skin Formula #CS-412",
      createdFor: "Michael Johnson",
      created: "2025-03-12",
      lastUpdated: "2025-03-12",
      status: "pending"
    },
    {
      id: "f-5",
      name: "Anti-Aging Formula #AA-068",
      createdFor: "Sophia Lee",
      created: "2025-02-25",
      lastUpdated: "2025-03-10",
      status: "active"
    }
  ];

  return (
    <div className="rounded-md border border-blush-pink/30 overflow-hidden">
      <Table>
        <TableHeader className="bg-blush-pink/10">
          <TableRow>
            <TableHead className="text-charcoal/80">Formula Name</TableHead>
            <TableHead className="text-charcoal/80">Created For</TableHead>
            <TableHead className="text-charcoal/80">Created</TableHead>
            <TableHead className="text-charcoal/80">Last Updated</TableHead>
            <TableHead className="text-charcoal/80">Status</TableHead>
            <TableHead className="text-right text-charcoal/80">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {formulas.map((formula) => (
            <TableRow key={formula.id}>
              <TableCell className="font-medium">{formula.name}</TableCell>
              <TableCell>{formula.createdFor}</TableCell>
              <TableCell>{formula.created}</TableCell>
              <TableCell>{formula.lastUpdated}</TableCell>
              <TableCell>
                <span className={`inline-block px-2 py-1 rounded-full text-xs ${
                  formula.status === 'active' 
                    ? 'bg-mint-cream/20 text-mint-cream' 
                    : formula.status === 'pending'
                      ? 'bg-yellow-100 text-yellow-800'
                      : 'bg-blush-pink/20 text-rose-gold'
                }`}>
                  {formula.status}
                </span>
              </TableCell>
              <TableCell className="text-right">
                <div className="flex justify-end gap-2">
                  <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                    <Eye className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                    <FileEdit className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                    <QrCode className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}