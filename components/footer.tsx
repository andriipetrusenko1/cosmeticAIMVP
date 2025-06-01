import React from 'react';
import Link from 'next/link';
import { Instagram, Facebook, Twitter, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-pearl-white border-t border-blush-pink/20 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-rose-gold">ULAB</h3>
            <p className="text-sm text-charcoal/70">
              Personalized AI-driven skincare formulations, meticulously crafted for your unique needs.
            </p>
            <div className="flex space-x-4 pt-2">
              <Link href="#" className="text-charcoal/60 hover:text-rose-gold transition-colors">
                <Instagram size={20} />
              </Link>
              <Link href="#" className="text-charcoal/60 hover:text-rose-gold transition-colors">
                <Facebook size={20} />
              </Link>
              <Link href="#" className="text-charcoal/60 hover:text-rose-gold transition-colors">
                <Twitter size={20} />
              </Link>
              <Link href="mailto:hello@ulab.com" className="text-charcoal/60 hover:text-rose-gold transition-colors">
                <Mail size={20} />
              </Link>
            </div>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-charcoal mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-charcoal/70 hover:text-rose-gold text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-charcoal/70 hover:text-rose-gold text-sm">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/press" className="text-charcoal/70 hover:text-rose-gold text-sm">
                  Press
                </Link>
              </li>
              <li>
                <Link href="/our-lab" className="text-charcoal/70 hover:text-rose-gold text-sm">
                  Our Lab
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-charcoal mb-4">Support</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/faq" className="text-charcoal/70 hover:text-rose-gold text-sm">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/shipping" className="text-charcoal/70 hover:text-rose-gold text-sm">
                  Shipping & Returns
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-charcoal/70 hover:text-rose-gold text-sm">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/help" className="text-charcoal/70 hover:text-rose-gold text-sm">
                  Help Center
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-charcoal mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/terms" className="text-charcoal/70 hover:text-rose-gold text-sm">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-charcoal/70 hover:text-rose-gold text-sm">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/cookies" className="text-charcoal/70 hover:text-rose-gold text-sm">
                  Cookie Policy
                </Link>
              </li>
              <li>
                <Link href="/accessibility" className="text-charcoal/70 hover:text-rose-gold text-sm">
                  Accessibility
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-blush-pink/20 mt-12 pt-8 text-center text-xs text-charcoal/60">
          <p>© {new Date().getFullYear()} ULAB Beauty. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}