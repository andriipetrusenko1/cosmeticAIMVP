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
import { Eye, FileEdit, Trash2 } from 'lucide-react';

export function UserTable() {
  // Mock data - in a real app this would come from an API
  const users = [
    {
      id: "u-1",
      name: "Emma Wilson",
      email: "emma.wilson@example.com",
      joinDate: "2025-02-15",
      status: "active",
      subscription: "Monthly"
    },
    {
      id: "u-2",
      name: "James Rodriguez",
      email: "james.r@example.com",
      joinDate: "2025-03-03",
      status: "active",
      subscription: "Quarterly"
    },
    {
      id: "u-3",
      name: "Olivia Chen",
      email: "olivia.c@example.com",
      joinDate: "2025-01-28",
      status: "inactive",
      subscription: "None"
    },
    {
      id: "u-4",
      name: "Michael Johnson",
      email: "michael.j@example.com",
      joinDate: "2025-03-10",
      status: "active",
      subscription: "Monthly"
    },
    {
      id: "u-5",
      name: "Sophia Lee",
      email: "sophia.l@example.com",
      joinDate: "2025-02-22",
      status: "active",
      subscription: "Annual"
    }
  ];

  return (
    <div className="rounded-md border border-blush-pink/30 overflow-hidden">
      <Table>
        <TableHeader className="bg-blush-pink/10">
          <TableRow>
            <TableHead className="text-charcoal/80">Name</TableHead>
            <TableHead className="text-charcoal/80">Email</TableHead>
            <TableHead className="text-charcoal/80">Join Date</TableHead>
            <TableHead className="text-charcoal/80">Status</TableHead>
            <TableHead className="text-charcoal/80">Subscription</TableHead>
            <TableHead className="text-right text-charcoal/80">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {users.map((user) => (
            <TableRow key={user.id}>
              <TableCell className="font-medium">{user.name}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.joinDate}</TableCell>
              <TableCell>
                <span className={`inline-block px-2 py-1 rounded-full text-xs ${
                  user.status === 'active' 
                    ? 'bg-mint-cream/20 text-mint-cream' 
                    : 'bg-blush-pink/20 text-rose-gold'
                }`}>
                  {user.status}
                </span>
              </TableCell>
              <TableCell>{user.subscription}</TableCell>
              <TableCell className="text-right">
                <div className="flex justify-end gap-2">
                  <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                    <Eye className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                    <FileEdit className="h-4 w-4" />
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