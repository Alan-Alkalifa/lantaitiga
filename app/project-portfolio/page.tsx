'use client';

import Hero from '@/components/ui/Hero';
import PortfolioStats from '@/components/sections/PortfolioStats';
import PortfolioGrid from '@/components/sections/PortfolioGrid';
import CTA from '@/components/sections/CTA';

export default function ProjectPortfolio() {
  return (
    <div className="min-h-screen space-y-16">
      <Hero 
        title="Our Project Portfolio"
        highlightedText="Success Stories"
        description="Explore our diverse portfolio of successful projects. From startups to enterprises, we've helped businesses achieve their digital transformation goals through innovative solutions and cutting-edge technology."
        backgroundImage="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=100"
        buttons={[
          {
            text: "Start Your Project",
            href: "/contact-us",
            primary: true
          },
          {
            text: "View Services",
            href: "/product-service",
            primary: false
          }
        ]}
        minHeight="60vh"
      />

      {/* Portfolio Stats Section */}
      <PortfolioStats />

      {/* Portfolio Grid Section */}
      <PortfolioGrid />

      {/* CTA Section */}
      <CTA />
    </div>
  );
}