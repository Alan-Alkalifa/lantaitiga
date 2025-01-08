import Hero from '@/components/ui/Hero';
import Statistics from '@/components/sections/Statistics';
import Benefits from '@/components/sections/Benefits';
import Services from '@/components/sections/Services';
import Testimonials from '@/components/sections/Testimonials';
import CTA from '@/components/sections/CTA';

const services = [
  {
    title: 'Web Development',
    description: 'Custom web applications built with modern technologies and best practices. From simple websites to complex enterprise solutions.',
    icon: '/icons/services/web.svg',
    features: [
      'Responsive Web Design',
      'Progressive Web Apps',
      'E-commerce Solutions',
      'Custom CMS Development'
    ]
  },
  {
    title: 'Mobile Development',
    description: 'Native and cross-platform mobile applications for iOS and Android. Delivering seamless user experiences across all devices.',
    icon: '/icons/services/mobile.svg',
    features: [
      'iOS & Android Apps',
      'Cross-platform Development',
      'App Store Optimization',
      'Mobile UI/UX Design'
    ]
  },
  {
    title: 'Cloud Solutions',
    description: 'Scalable cloud infrastructure and services. Helping businesses leverage the power of cloud computing for growth and efficiency.',
    icon: '/icons/services/cloud.svg',
    features: [
      'Cloud Migration',
      'Infrastructure Setup',
      'Performance Optimization',
      'Security Implementation'
    ]
  },
  {
    title: 'Data Analytics',
    description: 'Transform raw data into actionable insights. Helping businesses make data-driven decisions through advanced analytics and visualization.',
    icon: '/icons/services/analytics.svg',
    features: [
      'Business Intelligence',
      'Data Visualization',
      'Predictive Analytics',
      'Performance Metrics'
    ]
  },
  {
    title: 'IT Consulting',
    description: 'Strategic technology consulting to help businesses make informed decisions. Providing roadmaps for digital transformation.',
    icon: '/icons/services/consulting.svg',
    features: [
      'Digital Strategy',
      'Technology Assessment',
      'Process Optimization',
      'IT Roadmap Planning'
    ]
  },
  {
    title: 'UI/UX Design',
    description: 'User-centered design solutions that combine aesthetics with functionality. Creating intuitive and engaging digital experiences.',
    icon: '/icons/services/design.svg',
    features: [
      'User Research',
      'Interface Design',
      'Prototyping',
      'Usability Testing'
    ]
  },
  {
    title: 'Maintenance & Support',
    description: '24/7 maintenance and support services. Ensuring your digital solutions run smoothly and stay up-to-date.',
    icon: '/icons/services/support.svg',
    features: [
      '24/7 Technical Support',
      'Performance Monitoring',
      'Security Updates',
      'Regular Maintenance'
    ]
  }
];

const benefits = [
  { title: "Expertise", description: "Years of experience in delivering cutting-edge IT solutions" },
  { title: "Innovation", description: "Stay ahead with the latest technologies and methodologies" },
  { title: "Quality", description: "Rigorous testing and best practices for reliable solutions" },
  { title: "Support", description: "Dedicated team providing round-the-clock assistance" }
];

const statistics = [
  { value: '500+', label: 'Projects Completed' },
  { value: '98%', label: 'Client Satisfaction' },
  { value: '15+', label: 'Years Experience' },
  { value: '50+', label: 'Expert Team Members' }
];

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

export default function ProductService() {
  return (
    <main className="min-h-screen space-y-24 pb-20">
      <Hero 
        title="Transform Your Business with"
        highlightedText="Cutting-Edge Solutions"
        description="Award-winning IT solutions that drive growth, innovation, and success. Join 500+ satisfied clients who trust us with their digital transformation."
        backgroundImage="https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0?auto=format&fit=crop&q=100"
        buttons={[
          {
            text: "View Success Stories",
            href: "/project-portfolio",
            primary: false
          }
        ]}
        minHeight="70vh"
      />
      <Statistics />
      <Benefits />
      <Services />
      <Testimonials />
      <CTA />
    </main>
  );
}