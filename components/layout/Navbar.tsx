'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Product & Service', href: '/product-service' },
    { label: 'Project Portfolio', href: '/project-portfolio' },
    { label: 'About Us', href: '/about-us' },
    { label: 'Contact Us', href: '/contact-us' }
  ];

  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === href;
    }
    return pathname.startsWith(href);
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-bg-primary/95 backdrop-blur-lg shadow-lg border-b border-bg-secondary/10' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link 
            href="/" 
            className="flex-shrink-0 flex items-center gap-3 group transition-all duration-300 hover:-translate-y-0.5"
          >
            <Image
              src="/iconlantaitiga.png"
              alt="Lantai Tiga Logo"
              width={150}
              height={40}
              className="h-10 w-auto transition-all duration-300 group-hover:scale-105"
            />
            <span className="text-xl font-semibold group-hover:text-bg-secondary transition-colors duration-300">
              LantaiTiga
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => {
              const active = isActive(item.href);
              return (
                <Link
                  key={index}
                  href={item.href}
                  className={`relative text-text-primary transition-all duration-300 
                           font-medium py-2 group ${active ? 'text-bg-secondary' : 'hover:text-bg-secondary'}`}
                >
                  {item.label}
                  <span className={`absolute bottom-0 left-0 h-0.5 bg-bg-secondary transition-all duration-300 
                               ${active ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
                </Link>
              );
            })}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-text-primary p-2 hover:text-bg-secondary transition-all duration-300 
                       hover:scale-105 group"
              aria-label="Toggle menu"
            >
              <div className={`w-6 h-0.5 bg-current transition-all duration-300 ${
                isMobileMenuOpen ? 'rotate-45 translate-y-1.5 bg-bg-secondary' : ''
              }`} />
              <div className={`w-6 h-0.5 bg-current my-1.5 transition-all duration-300 ${
                isMobileMenuOpen ? 'opacity-0 scale-0' : ''
              }`} />
              <div className={`w-6 h-0.5 bg-current transition-all duration-300 ${
                isMobileMenuOpen ? '-rotate-45 -translate-y-1.5 bg-bg-secondary' : ''
              }`} />
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div 
          className={`md:hidden fixed inset-x-0 top-20 transition-all duration-300 transform
            ${isMobileMenuOpen 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 -translate-y-4 pointer-events-none'
            }`}
        >
          <div className="mx-4 rounded-xl shadow-lg overflow-hidden">
            <div className="bg-bg-primary/95 backdrop-blur-lg border border-bg-secondary/10">
              <div className="p-4 space-y-2">
                {navItems.map((item, index) => {
                  const active = isActive(item.href);
                  return (
                    <Link
                      key={index}
                      href={item.href}
                      className={`block px-4 py-3 rounded-lg transition-all duration-300 group
                               border hover:shadow-md hover:-translate-y-0.5
                               ${active 
                                 ? 'text-bg-secondary border-bg-secondary/20 bg-bg-secondary/5' 
                                 : 'text-text-primary hover:text-bg-secondary border-transparent hover:border-bg-secondary/10'
                               }`}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <span className="relative inline-block">
                        {item.label}
                        <span className={`absolute bottom-0 left-0 h-0.5 bg-bg-secondary transition-all duration-300
                                     ${active ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
                      </span>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;