'use client';

import Hero from '@/components/ui/Hero';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const stats = [
  { number: "3+", label: "Projects Delivered", description: "Successful digital transformations" },
  { number: "5+", label: "Happy Clients", description: "Across various industries" },
  { number: "2+", label: "Years Experience", description: "Of technical excellence" },
  { number: "24/7", label: "Support", description: "Always here for you" }
];

const teamMembers = [
  {
    name: 'John Doe',
    role: 'CEO & Founder',
    image: '/team/placeholder.jpg',
    description: 'Visionary leader with 15+ years of experience in tech innovation.',
    linkedin: 'https://linkedin.com'
  },
  {
    name: 'Jane Smith',
    role: 'Technical Director',
    image: '/team/placeholder.jpg',
    description: 'Expert in cloud architecture and enterprise solutions.',
    linkedin: 'https://linkedin.com'
  },
  {
    name: 'Mike Johnson',
    role: 'Creative Director',
    image: '/team/placeholder.jpg',
    description: 'Award-winning designer specializing in user experience.',
    linkedin: 'https://linkedin.com'
  },
  {
    name: 'Sarah Chen',
    role: 'Product Manager',
    image: '/team/placeholder.jpg',
    description: 'Strategic product leader with expertise in agile methodologies.',
    linkedin: 'https://linkedin.com'
  },
  {
    name: 'Alex Rivera',
    role: 'Development Lead',
    image: '/team/placeholder.jpg',
    description: 'Full-stack developer with a passion for scalable solutions.',
    linkedin: 'https://linkedin.com'
  }
];

const values = [
  {
    title: 'Innovation',
    description: 'Pushing boundaries and embracing new technologies to deliver cutting-edge solutions.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    examples: ['AI-powered solutions', 'Cloud-native architecture', 'Progressive Web Apps']
  },
  {
    title: 'Excellence',
    description: 'Committed to delivering the highest quality in every project we undertake.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
    examples: ['Rigorous testing', 'Best practices', 'Performance optimization']
  },
  {
    title: 'Collaboration',
    description: 'Working closely with clients to understand and exceed their expectations.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
    examples: ['Agile methodology', 'Regular updates', 'Transparent communication']
  }
];

const milestones = [
  { year: '2018', title: 'Company Founded', description: 'Started with a vision to transform digital landscapes' },
  { year: '2020', title: 'Major Growth', description: 'Expanded team and capabilities' },
  { year: '2022', title: 'International Reach', description: 'Started serving clients globally' },
  { year: '2024', title: 'Innovation Hub', description: 'Launched our innovation center' }
];

export default function AboutUs() {
  const [activeValue, setActiveValue] = useState<number | null>(null);

  return (
    <main className="space-y-24 pb-20">
      <Hero 
        title="About Us"
        highlightedText="Our Story"
        description="We are a team of passionate technologists dedicated to transforming businesses through innovative digital solutions."
        backgroundImage="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80"
        minHeight="60vh"
        buttons={[
          {
            text: "Contact Us",
            href: "/contact-us",
            primary: true
          },
          {
            text: "View Products and Services",
            href: "/product-service",
            primary: false
          }
        ]}
      />

      {/* Stats Section */}
      <section className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group cursor-default">
              <div className="text-5xl font-bold text-bg-secondary mb-2 transform transition-transform duration-300 group-hover:scale-110">
                {stat.number}
              </div>
              <div className="text-lg font-semibold mb-1">{stat.label}</div>
              <div className="text-text-primary/70 text-sm">{stat.description}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Mission Section */}
      <section className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6">Our Mission</h2>
            <p className="text-text-primary/80 text-lg leading-relaxed mb-6">
              At LantaiTiga, we are driven by the passion to create innovative digital solutions that empower businesses 
              to thrive in the modern world. Our mission is to deliver excellence through technology, design, and strategic thinking.
            </p>
            <div className="flex gap-4">
              <Link
                href="/product-service"
                className="inline-flex items-center text-bg-secondary hover:translate-x-2 transition-transform duration-300"
              >
                <span className="mr-2">Explore Our Services</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
              </Link>
            </div>
          </div>
          <div className="relative h-[400px] rounded-2xl overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80"
              alt="Our Mission"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Our Values</h2>
          <p className="text-text-primary/70 max-w-2xl mx-auto">
            Core principles that guide our work and relationships
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div 
              key={index}
              className="p-6 rounded-xl border border-bg-secondary/10 hover:border-bg-secondary
                       transition-all duration-300 hover:shadow-lg hover:-translate-y-1 bg-bg-primary group cursor-pointer"
              onClick={() => setActiveValue(activeValue === index ? null : index)}
            >
              <div className="w-12 h-12 rounded-xl bg-bg-secondary/10 flex items-center justify-center mb-6
                           group-hover:bg-bg-secondary/20 transition-colors duration-300">
                <div className="text-bg-secondary">
                  {value.icon}
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-4 group-hover:text-bg-secondary transition-colors duration-300">
                {value.title}
              </h3>
              <p className="text-text-primary/70 mb-4">{value.description}</p>
              <div className={`overflow-hidden transition-all duration-300 ${activeValue === index ? 'max-h-40' : 'max-h-0'}`}>
                <ul className="space-y-2 text-text-primary/70">
                  {value.examples.map((example, i) => (
                    <li key={i} className="flex items-center">
                      <svg className="w-4 h-4 mr-2 text-bg-secondary" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {example}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Milestones Section */}
      <section className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Our Journey</h2>
          <p className="text-text-primary/70 max-w-2xl mx-auto">
            Key milestones in our growth story
          </p>
        </div>
        <div className="relative">
          {/* Timeline line - hidden on mobile, shown on md and up */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-bg-secondary/20"></div>
          
          {/* Mobile timeline line */}
          <div className="md:hidden absolute left-4 top-0 bottom-0 w-px bg-bg-secondary/20"></div>

          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <div 
                key={index} 
                className={`flex items-start gap-8 
                  ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}
                  flex-row`}
              >
                {/* Content for mobile (always left-aligned) and desktop (alternating) */}
                <div className={`flex-1 md:flex-none md:w-[calc(50%-2rem)] 
                  ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}
                  text-left pl-12 md:pl-0`}
                >
                  <div className="text-2xl md:text-3xl font-bold text-bg-secondary mb-2">
                    {milestone.year}
                  </div>
                  <h3 className="text-lg md:text-xl font-semibold mb-2">
                    {milestone.title}
                  </h3>
                  <p className="text-text-primary/70 text-sm md:text-base">
                    {milestone.description}
                  </p>
                </div>

                {/* Timeline dot - Adjusted for mobile */}
                <div className="absolute left-4 md:static md:flex md:items-center md:justify-center md:w-8 md:h-8">
                  <div className="w-3 h-3 bg-bg-secondary rounded-full 
                    ring-4 ring-bg-secondary/20"></div>
                </div>

                {/* Empty space for desktop layout */}
                <div className="hidden md:block md:flex-none md:w-[calc(50%-2rem)]"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Our Team</h2>
          <p className="text-text-primary/70 max-w-2xl mx-auto">
            Meet the experts behind our success
          </p>
        </div>
        <div className="flex overflow-x-auto pb-8 gap-8 snap-x snap-mandatory scrollbar-hide">
          {teamMembers.map((member, index) => (
            <div 
              key={index}
              className="group p-6 rounded-xl border border-bg-secondary/10 hover:border-bg-secondary
                       transition-all duration-300 hover:shadow-lg hover:-translate-y-1
                       flex-shrink-0 w-[300px] snap-center"
            >
              <div className="relative overflow-hidden rounded-xl mb-6 aspect-square">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute inset-0 bg-bg-secondary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300
                           flex items-center justify-center"
                >
                  <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
              </div>
              <h3 className="text-xl font-semibold mb-2 group-hover:text-bg-secondary transition-colors duration-300">
                {member.name}
              </h3>
              <p className="text-bg-secondary font-medium mb-3">{member.role}</p>
              <p className="text-text-primary/70">{member.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-bg-secondary/10 py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Work Together?</h2>
          <p className="text-text-primary/70 max-w-2xl mx-auto mb-10 text-lg">
            Let&apos;s collaborate to bring your digital vision to life. Our team is ready to help you achieve your goals.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact-us"
              className="inline-flex items-center justify-center px-8 py-4 rounded-lg bg-bg-secondary
                       text-text-secondary hover:bg-bg-secondary/90 transition-all duration-300
                       hover:shadow-lg hover:-translate-y-1 text-lg font-semibold min-w-[200px]"
            >
              Get in Touch
            </Link>
            <Link
              href="/product-service"
              className="inline-flex items-center justify-center px-8 py-4 rounded-lg border-2
                       border-bg-secondary text-bg-secondary hover:bg-bg-secondary hover:text-text-secondary
                       transition-all duration-300 hover:shadow-lg hover:-translate-y-1 text-lg
                       font-semibold min-w-[200px]"
            >
              Our Services
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}