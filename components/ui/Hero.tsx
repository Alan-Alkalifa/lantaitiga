'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface Button {
  text: string;
  href: string;
  primary?: boolean;
}

interface HeroProps {
  title: string;
  highlightedText?: string;
  description: string;
  backgroundImage: string;
  buttons: Button[];
  minHeight?: string;
}

const Hero = ({ 
  title, 
  highlightedText, 
  description, 
  backgroundImage, 
  buttons,
  minHeight = "calc(100vh-5rem)"
}: HeroProps) => {
  return (
    <div style={{ minHeight }} className="relative flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 -z-20">
        <Image
          src={backgroundImage}
          alt="Background Image"
          fill
          className="object-cover brightness-[0.85]"
          priority
          quality={100}
        />
      </div>

      {/* Overlay with gradient for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-bg-primary/50 via-bg-primary/50 to-bg-primary/80 -z-10" />

      {/* Content */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="container mx-auto px-4 py-16 text-center relative z-10"
      >
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-4xl md:text-6xl font-bold mb-6"
        >
          {title}{' '}
          {highlightedText && (
            <span className="text-bg-secondary">{highlightedText}</span>
          )}
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-lg md:text-xl text-text-primary/80 max-w-2xl mx-auto mb-12"
        >
          {description}
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
        >
          {buttons.map((button, index) => (
            <Link
              key={index}
              href={button.href}
              className={`inline-flex items-center justify-center px-8 py-4 rounded-lg 
                ${button.primary 
                  ? 'bg-bg-secondary text-text-secondary hover:bg-bg-secondary/90' 
                  : 'border-2 border-bg-secondary text-bg-secondary hover:bg-bg-secondary hover:text-text-secondary'
                } transition-all duration-300 hover:shadow-lg hover:-translate-y-1 text-lg 
                font-semibold min-w-[200px]`}
            >
              {button.text}
            </Link>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero;