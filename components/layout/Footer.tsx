import Link from 'next/link';
import Image from 'next/image';

const footerLinks = {
  Links: [
    { name: 'About Us', href: '/about-us' },
    { name: 'Portfolio', href: '/project-portfolio' },
    { name: 'Contact Us', href: '/contact-us' },
  ],
  support: [
    { name: 'FAQ', href: '/faq' },
    { name: 'Privacy Policy', href: '/privacy-policy' },
    { name: 'Terms of Service', href: '/terms-of-service' },
    { name: 'Support Center', href: '/support' },
  ],
  social: [
    { name: 'Facebook', href: 'https://facebook.com', icon: '/icons/social/facebook.svg' },
    { name: 'Twitter', href: 'https://twitter.com', icon: '/icons/social/twitter.svg' },
    { name: 'Instagram', href: 'https://instagram.com', icon: '/icons/social/instagram.svg' },
    { name: 'LinkedIn', href: 'https://linkedin.com', icon: '/icons/social/linkedin.svg' },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-bg-primary border-t border-bg-secondary/10">
      <div className="max-w-7xl mx-auto px-4 py-16 md:py-20">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2 space-y-6">
            <Link href="/" className="inline-flex items-center space-x-2 group">
              <Image
                src="/iconlantaitiga.png"
                alt="Lantai Tiga"
                width={150}
                height={40}
                className="h-10 w-auto"
              />
              <span className="text-xl font-semibold group-hover:text-bg-secondary transition-colors duration-300">
                LantaiTiga
              </span>
            </Link>
            <p className="text-text-primary/80 max-w-md transform transition-all duration-300 hover:text-text-primary">
              We are a leading IT solutions provider, dedicated to transforming businesses through innovative digital solutions and cutting-edge technology.
            </p>
            <div className="flex space-x-6">
              {footerLinks.social.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="group"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.name}
                >
                  <div className="w-10 h-10 rounded-full bg-bg-secondary/10 flex items-center justify-center
                               transition-all duration-300 group-hover:bg-bg-secondary/20 group-hover:shadow-lg
                               transform group-hover:scale-110">
                    <Image
                      src={item.icon}
                      alt={item.name}
                      width={20}
                      height={20}
                      className="w-5 h-5 transition-all duration-300 group-hover:brightness-200"
                    />
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="transform transition-all duration-300 hover:translate-y-[-5px]">
            <h3 className="text-lg font-semibold mb-6 text-bg-secondary">Links</h3>
            <ul className="space-y-4">
              {footerLinks.Links.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-text-primary/70 hover:text-bg-secondary transition-all duration-300
                             group inline-flex items-center"
                  >
                    <span className="transform transition-all duration-300 group-hover:translate-x-2">
                      {item.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="transform transition-all duration-300 hover:translate-y-[-5px]">
            <h3 className="text-lg font-semibold mb-6 text-bg-secondary">Support</h3>
            <ul className="space-y-4">
              {footerLinks.support.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-text-primary/70 hover:text-bg-secondary transition-all duration-300
                             group inline-flex items-center"
                  >
                    <span className="transform transition-all duration-300 group-hover:translate-x-2">
                      {item.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-bg-secondary/10">
          <p className="text-center text-text-primary/60 text-sm">
            {new Date().getFullYear()} Created By Alan Alkalifa
          </p>
        </div>
      </div>
    </footer>
  );
}