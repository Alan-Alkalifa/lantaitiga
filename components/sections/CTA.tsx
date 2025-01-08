'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { fadeIn } from '@/components/animations';

export default function CTA() {
  return (
    <section className="bg-gradient-to-r from-bg-secondary/20 to-bg-secondary/10 py-20 rounded-3xl mx-4">
      <motion.div 
        variants={fadeIn('up', 'spring', 0, 1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="max-w-7xl mx-auto px-4 text-center"
      >
        <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
        <p className="text-text-primary/70 max-w-2xl mx-auto mb-10 text-lg">
          Join hundreds of successful businesses that have already taken the leap. 
          Get your free consultation today and see how we can help you grow.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/contact-us"
            className="inline-flex items-center justify-center px-8 py-4 rounded-lg bg-bg-secondary
                     text-text-secondary hover:bg-bg-secondary/90 transition-all duration-300
                     hover:shadow-lg hover:-translate-y-1 text-lg font-semibold min-w-[200px]"
          >
            Get Free Consultation
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
