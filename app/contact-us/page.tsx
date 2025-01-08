'use client';
import Hero from '@/components/ui/Hero';
import { useState } from 'react';
import Link from 'next/link';

const contactInfo = [
  {
    title: "Email Us",
    description: "Our team typically responds within 24 hours",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    value: "business.lantaitiga@gmail.com",
    href: "mailto:business.lantaitiga@gmail.com"
  },
  {
    title: "Call Us",
    description: "Available Monday to Friday, 9am - 6pm",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
    value: "+62 85771882690",
    href: "tel:+6285771882690"
  },
  {
    title: "Visit Us",
    description: "Our office is open for meetings",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    value: "Jakarta, Indonesia",
    href: "https://maps.google.com"
  }
];

const faqs = [
  {
    question: "What services do you offer?",
    answer: "We offer a comprehensive range of IT solutions including web development, mobile app development, cloud solutions, UI/UX design, and IT consulting services."
  },
  {
    question: "How long does a typical project take?",
    answer: "Project timelines vary depending on complexity and requirements. A simple website might take 4-6 weeks, while a complex application could take 3-6 months. We'll provide a detailed timeline during our initial consultation."
  },
  {
    question: "What is your pricing model?",
    answer: "We offer flexible pricing models including fixed-price projects, time and materials, and retainer arrangements. Each project is unique, and we'll work with you to find the most suitable pricing structure."
  },
  {
    question: "Do you provide ongoing support?",
    answer: "Yes, we offer comprehensive maintenance and support packages to ensure your digital solutions continue to perform optimally after launch."
  }
];

export default function ContactUs() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <main className="min-h-screen bg-gradient-to-b from-bg-primary to-bg-primary/95">
      <Hero 
        title="Get in Touch"
        highlightedText="Let's Connect"
        description="Ready to transform your business? We're here to help you achieve your digital goals. Reach out to us for a consultation or to discuss your project."
        backgroundImage="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80"
        buttons={[
          {
            text: "Send Message",
            href: "/contact-us/form-contact-us",
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

      {/* Contact Information */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-8">
          {contactInfo.map((info, index) => (
            <Link
              href={info.href}
              key={index}
              className="group p-6 rounded-xl border border-bg-secondary/10 hover:border-bg-secondary
                       transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded-xl bg-bg-secondary/10 flex items-center justify-center
                           group-hover:bg-bg-secondary/20 transition-colors duration-300 mb-4">
                <div className="text-bg-secondary">
                  {info.icon}
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2 group-hover:text-bg-secondary transition-colors duration-300">
                {info.title}
              </h3>
              <p className="text-text-primary/70 text-sm mb-3">
                {info.description}
              </p>
              <p className="text-bg-secondary font-medium">
                {info.value}
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="max-w-7xl mx-auto px-4 py-16 border-t border-bg-secondary/10">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-text-primary/70 max-w-2xl mx-auto">
            Find quick answers to common questions about our services and process
          </p>
        </div>
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-bg-secondary/10 rounded-lg overflow-hidden hover:border-bg-secondary/30 transition-all duration-300"
            >
              <button
                onClick={() => setOpenFaq(openFaq === index ? null : index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-bg-secondary/5"
              >
                <span className="font-medium">{faq.question}</span>
                <svg
                  className={`w-5 h-5 transform transition-transform duration-300 ${
                    openFaq === index ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div
                className={`px-6 transition-all duration-300 overflow-hidden ${
                  openFaq === index ? 'max-h-48 py-4' : 'max-h-0'
                }`}
              >
                <p className="text-text-primary/70">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-bg-secondary/10 py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Project?</h2>
          <p className="text-text-primary/70 max-w-2xl mx-auto mb-8">
            Let&apos;s discuss how we can help you achieve your digital transformation goals
          </p>
          <Link
            href="/contact-us/form-contact-us"
            className="inline-flex items-center justify-center px-8 py-4 rounded-lg bg-bg-secondary
                     text-text-secondary hover:bg-bg-secondary/90 transition-all duration-300
                     hover:shadow-lg hover:-translate-y-1 text-lg font-semibold"
          >
            Get Started Now
          </Link>
        </div>
      </section>
    </main>
  );
}