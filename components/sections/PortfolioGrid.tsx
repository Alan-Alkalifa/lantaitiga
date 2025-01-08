'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '@/components/animations';

const portfolioItems = [
  {
    title: "E-Commerce Platform",
    category: "Web Development",
    description: "A modern e-commerce platform built with Next.js and Stripe, featuring real-time inventory management.",
    image: "https://images.unsplash.com/photo-1661956602116-aa6865609028?auto=format&fit=crop&q=80",
    stats: { users: "50K+", sales: "$2M+", growth: "200%" },
    tags: ["Next.js", "Stripe", "TypeScript"]
  },
  {
    title: "Healthcare App",
    category: "Mobile Development",
    description: "Patient management app that streamlines healthcare delivery and improves patient outcomes.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80",
    stats: { users: "100K+", appointments: "500K+", satisfaction: "98%" },
    tags: ["React Native", "Firebase", "HIPAA Compliant"]
  },
  {
    title: "Cloud Migration",
    category: "Cloud Solutions",
    description: "Successfully migrated enterprise infrastructure to AWS, improving performance and reducing costs.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80",
    stats: { uptime: "99.99%", savings: "40%", performance: "+60%" },
    tags: ["AWS", "Docker", "Kubernetes"]
  },
  {
    title: "Banking Dashboard",
    category: "Web Development",
    description: "Real-time financial analytics dashboard for a leading fintech company.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80",
    stats: { transactions: "1M+/day", accuracy: "99.99%", speed: "50ms" },
    tags: ["React", "D3.js", "Node.js"]
  },
  {
    title: "IoT Platform",
    category: "Cloud Solutions",
    description: "IoT platform managing thousands of connected devices with real-time data processing.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80",
    stats: { devices: "10K+", dataPoints: "1M+/hr", reliability: "99.9%" },
    tags: ["IoT", "Azure", "Machine Learning"]
  },
  {
    title: "Delivery App",
    category: "Mobile Development",
    description: "Last-mile delivery solution with real-time tracking and route optimization.",
    image: "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?auto=format&fit=crop&q=80",
    stats: { deliveries: "100K+", efficiency: "+40%", coverage: "50 cities" },
    tags: ["Flutter", "Google Maps", "Node.js"]
  }
];

const categories = ["All", "Web Development", "Mobile Development", "Cloud Solutions"];

export default function PortfolioGrid() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredItems = portfolioItems.filter(item => 
    activeCategory === "All" ? true : item.category === activeCategory
  );

  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      {/* Category Filter */}
      <motion.div 
        variants={staggerContainer}
        initial="hidden"
        animate="show"
        className="flex flex-wrap justify-center gap-4 mb-12"
      >
        {categories.map((category, index) => (
          <motion.button
            key={category}
            variants={fadeIn('up', 'spring', index * 0.1, 0.6)}
            onClick={() => setActiveCategory(category)}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300
              ${activeCategory === category
                ? 'bg-bg-secondary text-text-secondary'
                : 'bg-bg-secondary/10 text-text-primary hover:bg-bg-secondary/20'
              }`}
          >
            {category}
          </motion.button>
        ))}
      </motion.div>

      {/* Portfolio Grid */}
      <motion.div 
        variants={staggerContainer}
        initial="hidden"
        animate="show"
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {filteredItems.map((item, index) => (
          <motion.div
            key={item.title}
            variants={fadeIn('up', 'spring', index * 0.2, 0.75)}
            className="group rounded-xl overflow-hidden border border-bg-secondary/10 hover:border-bg-secondary
                     transition-all duration-500 hover:shadow-xl"
          >
            {/* Image Container */}
            <div className="relative h-48 overflow-hidden">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>

            {/* Content */}
            <div className="p-6">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-xl font-semibold group-hover:text-bg-secondary transition-colors duration-300">
                  {item.title}
                </h3>
                <span className="text-sm text-text-primary/60">{item.category}</span>
              </div>
              <p className="text-text-primary/70 mb-4">{item.description}</p>

              {/* Stats Grid */}
              <div className="grid grid-cols-3 gap-4 mb-4 py-3 border-y border-bg-secondary/10">
                {Object.entries(item.stats).map(([key, value]) => (
                  <div key={key} className="text-center">
                    <div className="text-bg-secondary font-semibold">{value}</div>
                    <div className="text-xs text-text-primary/60 capitalize">{key}</div>
                  </div>
                ))}
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {item.tags.map(tag => (
                  <span
                    key={tag}
                    className="px-2 py-1 text-xs rounded-md bg-bg-secondary/10 text-text-primary/70"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* View Details Button */}
              <div className="mt-4 flex items-center text-bg-secondary group-hover:translate-x-2 transition-transform duration-300">
                <span className="mr-2">View Details</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
