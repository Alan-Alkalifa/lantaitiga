import Image from 'next/image';

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

export default function Services() {
  return (
    <section className="max-w-7xl mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4">Our Services</h2>
        <p className="text-text-primary/70 max-w-2xl mx-auto">
          Comprehensive solutions to help your business thrive in the digital age
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
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
            <p className="text-text-primary/70 mb-6">
              {service.description}
            </p>
            <ul className="space-y-2">
              {service.features.map((feature, featureIndex) => (
                <li key={featureIndex} className="flex items-center text-text-primary/70">
                  <svg className="w-5 h-5 mr-2 text-bg-secondary" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
