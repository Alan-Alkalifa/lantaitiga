import Image from "next/image";
import Link from "next/link";
import Hero from "@/components/ui/Hero";

const services = [
  {
    title: 'Web Development',
    description: 'Custom web applications built with modern technologies and best practices. From simple websites to complex enterprise solutions.',
    icon: '/icons/services/web.svg',
    href: '/product-service#web',
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
    href: '/product-service#mobile',
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
    href: '/product-service#cloud',
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
    href: '/product-service#analytics',
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
    href: '/product-service#consulting',
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
    href: '/product-service#design',
    features: [
      'User Research',
      'Interface Design',
      'Prototyping',
      'Usability Testing'
    ]
  }
];

const stats = [
  { number: "5+", label: "Successful Projects", description: "Delivering excellence across industries" },
  { number: "5+", label: "Happy Clients", description: "Trust us with their digital success" },
  { number: "2+", label: "Years Experience", description: "Of innovative solutions" },
  { number: "24/7", label: "Support", description: "Always here when you need us" }
];

const features = [
  { title: "Innovative Solutions", description: "We leverage cutting-edge technologies to create solutions that keep you ahead of the competition" },
  { title: "Expert Team", description: "Our seasoned professionals bring years of industry expertise to your project" },
  { title: "Agile Development", description: "Fast, flexible, and collaborative approach to deliver results that matter" },
  { title: "Quality Focused", description: "Rigorous testing and best practices ensure top-notch deliverables" }
];

export default function Home() {
  return (
    <main className="space-y-24 pb-20">
      {/* Hero Section */}
      <Hero 
        title="Transforming Ideas into"
        highlightedText="Digital Reality"
        description="We specialize in delivering innovative IT solutions that drive business growth. From custom software development to digital transformation, we're your trusted technology partner."
        backgroundImage="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=100"
        buttons={[
          {
            text: "Start Your Project",
            href: "/contact-us",
            primary: true
          },
          {
            text: "View Portfolio",
            href: "/project-portfolio",
            primary: false
          }
        ]}
        minHeight="60vh"
      />

      {/* Stats Section */}
      <section className="max-w-7xl mx-auto px-4 py-1">
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

      {/* Why Choose Us */}
      <section className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Why Choose Us</h2>
          <p className="text-text-primary/70 max-w-2xl mx-auto">
            Partner with us for innovative solutions that drive real business results
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="p-6 rounded-xl border border-bg-secondary/10 hover:border-bg-secondary
                                    transition-all duration-300 hover:shadow-lg group">
              <h3 className="text-xl font-semibold mb-3 group-hover:text-bg-secondary transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-text-primary/70">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Services Preview */}
      <section className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-text-primary/70 max-w-2xl mx-auto">
            Comprehensive IT solutions tailored to elevate your business in the digital age
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Link 
              key={index}
              href={service.href}
              className="group p-8 rounded-xl border border-bg-secondary/10 hover:border-bg-secondary
                       transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <div className="w-16 h-16 mb-6 rounded-xl bg-bg-secondary/10 flex items-center justify-center
                            group-hover:bg-bg-secondary/20 transition-colors duration-300">
                <Image
                  src={service.icon}
                  alt={service.title}
                  width={32}
                  height={32}
                  className="w-8 h-8"
                />
              </div>
              <h3 className="text-2xl font-semibold mb-3 group-hover:text-bg-secondary transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-text-primary/70 mb-4">
                {service.description}
              </p>
              <div className="flex items-center text-bg-secondary group-hover:translate-x-2 transition-transform duration-300">
                <span className="mr-2">Learn More</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-bg-secondary/10 py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
          <p className="text-text-primary/70 max-w-2xl mx-auto mb-10 text-lg">
            Take the first step towards digital excellence. Let&apos;s create something amazing together.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact-us"
              className="inline-flex items-center justify-center px-8 py-4 rounded-lg bg-bg-secondary
                       text-text-secondary hover:bg-bg-secondary/90 transition-all duration-300
                       hover:shadow-lg hover:-translate-y-1 text-lg font-semibold min-w-[200px]"
            >
              Start Your Project
            </Link>
            <Link
              href="/project-portfolio"
              className="inline-flex items-center justify-center px-8 py-4 rounded-lg border-2
                       border-bg-secondary text-bg-secondary hover:bg-bg-secondary hover:text-text-secondary
                       transition-all duration-300 hover:shadow-lg hover:-translate-y-1 text-lg
                       font-semibold min-w-[200px]"
            >
              View Portfolio
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
