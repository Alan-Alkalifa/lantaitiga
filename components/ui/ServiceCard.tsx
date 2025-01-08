'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';

gsap.registerPlugin(ScrollTrigger);

interface ServiceCardProps {
  title: string;
  description: string;
  icon: string;
}

const ServiceCard = ({ title, description, icon }: ServiceCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    
    gsap.fromTo(card,
      {
        opacity: 0,
        y: 50,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: card,
          start: 'top bottom-=100',
          toggleActions: 'play none none reverse'
        }
      }
    );
  }, []);

  return (
    <div
      ref={cardRef}
      className="bg-bg-primary p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300
                 border border-bg-secondary/10 hover:-translate-y-2 cursor-pointer"
    >
      <div className="w-16 h-16 mb-6 relative">
        <Image
          src={icon}
          alt={title}
          fill
          className="object-contain"
        />
      </div>
      <h3 className="text-xl font-semibold mb-3 text-bg-secondary">{title}</h3>
      <p className="text-text-primary/80">{description}</p>
    </div>
  );
};

export default ServiceCard;
