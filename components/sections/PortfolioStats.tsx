'use client';

import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '@/components/animations';

const stats = [
  {
    number: "5+",
    label: "Projects Completed",
    description: "Across various industries",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  {
    number: "95%",
    label: "Client Satisfaction",
    description: "Based on client feedback",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
      </svg>
    )
  },
  {
    number: "40%",
    label: "Average ROI",
    description: "For our clients",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    )
  },
  {
    number: "5+",
    label: "Industries Served",
    description: "Diverse expertise",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    )
  }
];

export default function PortfolioStats() {
  return (
    <section className="bg-bg-secondary/5 py-16">
      <motion.div 
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="max-w-7xl mx-auto px-4"
      >
        <div className="text-center mb-12">
          <motion.h2 
            variants={fadeIn('up', 'spring', 0, 0.75)}
            className="text-4xl font-bold mb-4"
          >
            Our Impact in Numbers
          </motion.h2>
          <motion.p 
            variants={fadeIn('up', 'spring', 0.2, 0.75)}
            className="text-text-primary/70 max-w-2xl mx-auto"
          >
            We take pride in our track record of delivering exceptional results for our clients
          </motion.p>
        </div>

        <motion.div 
          variants={staggerContainer}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              variants={fadeIn('up', 'spring', index * 0.2, 0.75)}
              className="text-center group cursor-default"
            >
              <div className="mb-4 text-bg-secondary/80 group-hover:text-bg-secondary transition-colors duration-300">
                {stat.icon}
              </div>
              <div className="text-4xl font-bold text-bg-secondary mb-2 transform transition-transform duration-300 group-hover:scale-110">
                {stat.number}
              </div>
              <div className="text-lg font-semibold mb-1">{stat.label}</div>
              <div className="text-text-primary/70 text-sm">{stat.description}</div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
