'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { fadeIn } from '@/components/animations';

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'CEO, TechCorp',
    content: 'Working with this team transformed our business. Their expertise in cloud solutions helped us scale efficiently.',
    image: '/testimonials/sarah.jpg'
  },
  {
    name: 'Michael Chen',
    role: 'CTO, InnovateLabs',
    content: 'The mobile app they developed exceeded our expectations. Professional, responsive, and highly skilled team.',
    image: '/testimonials/michael.jpg'
  },
  {
    name: 'Emma Davis',
    role: 'Marketing Director, GrowthCo',
    content: 'Their UI/UX design expertise helped us increase user engagement by 200%. Highly recommended!',
    image: '/testimonials/emma.jpg'
  }
];

export default function Testimonials() {
  return (
    <section className="max-w-7xl mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4">What Our Clients Say</h2>
        <p className="text-text-primary/70 max-w-2xl mx-auto">
          Don&apos;t just take our word for it - hear from some of our satisfied clients
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            variants={fadeIn('up', 'spring', index * 0.2, 0.75)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="p-6 rounded-xl bg-white shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <div className="flex items-center mb-4">
              <Image
                src={testimonial.image}
                alt={testimonial.name}
                width={48}
                height={48}
                className="rounded-full"
              />
              <div className="ml-4">
                <h4 className="font-semibold">{testimonial.name}</h4>
                <p className="text-sm text-text-primary/70">{testimonial.role}</p>
              </div>
            </div>
            <p className="text-text-primary/80 italic">&ldquo;{testimonial.content}&rdquo;</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
