'use client';

import Hero from '@/components/ui/Hero';
import Statistics from '@/components/sections/Statistics';
import Benefits from '@/components/sections/Benefits';
import Services from '@/components/sections/Services';
import Testimonials from '@/components/sections/Testimonials';
import CTA from '@/components/sections/CTA';

export default function ProductService() {
  return (
    <main className="min-h-screen space-y-24 pb-20">
      <Hero 
        title="Transform Your Business with"
        highlightedText="Cutting-Edge Solutions"
        description="Award-winning IT solutions that drive growth, innovation, and success. Join 500+ satisfied clients who trust us with their digital transformation."
        backgroundImage="https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0?auto=format&fit=crop&q=100"
        buttons={[
          {
            text: "View Success Stories",
            href: "/project-portfolio",
            primary: false
          }
        ]}
        minHeight="70vh"
      />
      <Statistics />
      <Benefits />
      <Services />
      <Testimonials />
      <CTA />
    </main>
  );
}