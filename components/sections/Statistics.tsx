'use client';

import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '@/components/animations';

const statistics = [
  { value: '5+', label: 'Projects Completed' },
  { value: '5%', label: 'Client Satisfaction' },
  { value: '2+', label: 'Years Experience' },
  { value: '10+', label: 'Expert Team Members' }
];

export default function Statistics() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-12 bg-bg-secondary/5 rounded-2xl">
      <motion.div 
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid grid-cols-2 md:grid-cols-4 gap-8"
      >
        {statistics.map((stat, index) => (
          <motion.div 
            key={index}
            variants={fadeIn('up', 'spring', index * 0.2, 0.75)}
            className="text-center"
          >
            <h3 className="text-4xl font-bold text-bg-secondary mb-2">{stat.value}</h3>
            <p className="text-text-primary/70">{stat.label}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
