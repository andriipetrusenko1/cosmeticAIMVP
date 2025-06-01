import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { HeroSection } from '@/components/landing/hero-section';
import { ProcessSteps } from '@/components/landing/process-steps';
import { BenefitsSection } from '@/components/landing/benefits-section';
import { MissionSection } from '@/components/landing/mission-section';
import { TestimonialsSection } from '@/components/landing/testimonials-section';

export default function Home() {
  return (
    <div className="w-full bg-pearl-white">
      <HeroSection />
      <ProcessSteps />
      <BenefitsSection />
      <MissionSection />
      <TestimonialsSection />
    </div>
  );
}