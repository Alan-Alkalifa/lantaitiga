'use client';

import { useState, FormEvent } from 'react';
import { gsap } from 'gsap';
import { useEffect, useRef } from 'react';
import RichTextEditor from '@/components/ui/RichTextEditor';

interface FormData {
  name: string;
  email: string;
  company: string;
  phone: string;
  message: string;
  service: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: '',
    service: 'general'
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
    
    tl.fromTo(titleRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.8 }
    ).fromTo(formRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.8 },
      '-=0.4'
    );
  }, []);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Here you would typically send the form data to your backend
      await new Promise(resolve => setTimeout(resolve, 1000)); // Simulated API call
      alert('Thank you for your message! We will get back to you soon.');
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        message: '',
        service: 'general'
      });
    } catch (error) {
      alert('There was an error sending your message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="min-h-screen bg-bg-primary py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 
          ref={titleRef}
          className="text-4xl md:text-5xl font-bold text-center mb-4"
        >
          Let's Start a <span className="text-bg-secondary">Conversation</span>
        </h1>
        <p className="text-text-primary/70 text-center max-w-2xl mx-auto mb-12">
          Tell us about your project and let's create something amazing together
        </p>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="bg-bg-primary/50 backdrop-blur-lg p-8 rounded-xl shadow-lg border border-bg-secondary/10
                   hover:border-bg-secondary transition-all duration-300"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="group">
              <label htmlFor="name" className="block text-sm font-medium mb-2 group-hover:text-bg-secondary transition-colors duration-300">
                Full Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-bg-primary border border-bg-secondary/20 
                         focus:border-bg-secondary focus:ring-1 focus:ring-bg-secondary outline-none
                         transition-all duration-300 hover:border-bg-secondary/50"
                placeholder="Enter your full name"
              />
            </div>

            <div className="group">
              <label htmlFor="email" className="block text-sm font-medium mb-2 group-hover:text-bg-secondary transition-colors duration-300">
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-bg-primary border border-bg-secondary/20 
                         focus:border-bg-secondary focus:ring-1 focus:ring-bg-secondary outline-none
                         transition-all duration-300 hover:border-bg-secondary/50"
                placeholder="Enter your email address"
              />
            </div>

            <div className="group">
              <label htmlFor="company" className="block text-sm font-medium mb-2 group-hover:text-bg-secondary transition-colors duration-300">
                Company Name
              </label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-bg-primary border border-bg-secondary/20 
                         focus:border-bg-secondary focus:ring-1 focus:ring-bg-secondary outline-none
                         transition-all duration-300 hover:border-bg-secondary/50"
                placeholder="Enter your company name"
              />
            </div>

            <div className="group">
              <label htmlFor="phone" className="block text-sm font-medium mb-2 group-hover:text-bg-secondary transition-colors duration-300">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-bg-primary border border-bg-secondary/20 
                         focus:border-bg-secondary focus:ring-1 focus:ring-bg-secondary outline-none
                         transition-all duration-300 hover:border-bg-secondary/50"
                placeholder="Enter your phone number"
              />
            </div>
          </div>

          <div className="mb-6 group relative">
            <label htmlFor="service" className="block text-sm font-medium mb-2 group-hover:text-bg-secondary transition-colors duration-300">
              Service Interest *
            </label>
            <div className="relative">
              <select
                id="service"
                name="service"
                required
                value={formData.service}
                onChange={handleChange}
                className="appearance-none w-full px-4 py-3 rounded-lg bg-bg-primary border border-bg-secondary/20 
                         focus:border-bg-secondary focus:ring-1 focus:ring-bg-secondary outline-none
                         transition-all duration-300 hover:border-bg-secondary/50 cursor-pointer
                         pr-10 hover:bg-bg-secondary/5"
              >
                <option value="general" className="py-2">General Inquiry</option>
                <option value="web" className="py-2">Web Development</option>
                <option value="mobile" className="py-2">Mobile Development</option>
                <option value="design" className="py-2">UI/UX Design</option>
                <option value="cloud" className="py-2">Cloud Solutions</option>
                <option value="consulting" className="py-2">IT Consulting</option>
                <option value="support" className="py-2">Maintenance & Support</option>
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none text-bg-secondary">
                <svg className="w-5 h-5 transition-transform duration-300 group-hover:text-bg-secondary" 
                     fill="none" 
                     stroke="currentColor" 
                     viewBox="0 0 24 24">
                  <path strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </div>

          <div className="mb-8 group">
            <label htmlFor="message" className="block text-sm font-medium mb-2 group-hover:text-bg-secondary transition-colors duration-300">
              Your Message *
            </label>
            <RichTextEditor
              value={formData.message}
              onChange={(value) => setFormData(prev => ({ ...prev, message: value }))}
              placeholder="Tell us about your project or requirements..."
            />
          </div>

          <div className="text-center">
            <button
              type="submit"
              disabled={isSubmitting}
              className={`inline-flex items-center justify-center px-8 py-4 rounded-lg bg-bg-secondary
                       text-text-secondary transition-all duration-300 text-lg font-semibold
                       min-w-[200px] hover:shadow-lg hover:-translate-y-1
                       ${isSubmitting 
                         ? 'opacity-70 cursor-not-allowed hover:transform-none' 
                         : 'hover:bg-bg-secondary/90'}`}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}