'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import Button from '@/components/ui/Button';
import { SERVICES, INDUSTRIES, FLORIDA_CITIES, CALENDAR_LINK } from '@/lib/constants';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeMegaMenu, setActiveMegaMenu] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  const toggleMegaMenu = (menuName: string) => {
    setActiveMegaMenu(activeMegaMenu === menuName ? null : menuName);
  };

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-md'
          : 'bg-transparent'
      )}
    >
      <nav className="container-custom max-w-screen-xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative w-12 h-12 transition-transform duration-300 group-hover:scale-110">
              <Image
                src="/logo.png"
                alt="NicheFinders AI"
                fill
                className="object-contain"
                priority
              />
            </div>
            <span
              className={cn(
                'text-xl font-bold transition-colors duration-300',
                isScrolled ? 'text-navy-deep' : 'text-white'
              )}
            >
              NicheFinders AI
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {/* Solutions Mega Menu */}
            <div
              className="relative"
              onMouseEnter={() => setActiveMegaMenu('solutions')}
              onMouseLeave={() => setActiveMegaMenu(null)}
            >
              <button
                onClick={() => setActiveMegaMenu(activeMegaMenu === 'solutions' ? null : 'solutions')}
                className={cn(
                  'nav-link flex items-center space-x-1',
                  isScrolled ? 'text-navy-deep' : 'text-white'
                )}
              >
                <span>Solutions</span>
                <svg
                  className={cn(
                    'w-4 h-4 transition-transform duration-300',
                    activeMegaMenu === 'solutions' && 'rotate-180'
                  )}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {/* Solutions Dropdown */}
              {activeMegaMenu === 'solutions' && (
                <div className="absolute top-full left-0 mt-0 pt-2 w-80">
                  <div className="bg-white rounded-lg shadow-xl border border-gray-200 overflow-hidden">
                  <div className="p-4">
                    <p className="text-sm text-gray-600 mb-4">
                      End-to-end AI solutions for every stage of your journey
                    </p>
                    <div className="space-y-2">
                      {SERVICES.map((service) => {
                        const iconMap: { [key: string]: JSX.Element } = {
                          'ai-consulting': (
                            <svg className="w-6 h-6 text-cyan-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                            </svg>
                          ),
                          'custom-ai-development': (
                            <svg className="w-6 h-6 text-cyan-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                            </svg>
                          ),
                          'ai-powered-marketing': (
                            <svg className="w-6 h-6 text-cyan-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                            </svg>
                          ),
                          'ai-education-training': (
                            <svg className="w-6 h-6 text-cyan-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                            </svg>
                          ),
                        };

                        return (
                          <Link
                            key={service.slug}
                            href={`/solutions/${service.slug}`}
                            className="block p-3 rounded-lg hover:bg-gray-50 transition-colors group"
                          >
                            <div className="flex items-start space-x-3">
                              <div className="flex-shrink-0 mt-0.5">
                                {iconMap[service.slug]}
                              </div>
                              <div>
                                <h3 className="font-semibold text-navy-deep group-hover:text-cyan-primary transition-colors">
                                  {service.name}
                                </h3>
                                <p className="text-sm text-gray-600 mt-1">
                                  {service.description}
                                </p>
                              </div>
                            </div>
                          </Link>
                        );
                      })}
                    </div>
                    <Link
                      href="/6-stage-system"
                      className="block mt-4 pt-4 border-t border-gray-200"
                    >
                      <div className="p-3 rounded-lg bg-gradient-to-r from-cyan-50 to-navy-50 hover:from-cyan-100 hover:to-navy-100 transition-colors">
                        <h3 className="font-semibold text-navy-deep flex items-center">
                          Our 6-Stage System
                          <svg
                            className="w-4 h-4 ml-2"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M17 8l4 4m0 0l-4 4m4-4H3"
                            />
                          </svg>
                        </h3>
                        <p className="text-sm text-gray-600 mt-1">
                          Discover our proprietary framework
                        </p>
                      </div>
                    </Link>
                  </div>
                  </div>
                </div>
              )}
            </div>

            {/* Who We Serve Mega Menu */}
            <div
              className="relative"
              onMouseEnter={() => setActiveMegaMenu('industries')}
              onMouseLeave={() => setActiveMegaMenu(null)}
            >
              <button
                onClick={() => setActiveMegaMenu(activeMegaMenu === 'industries' ? null : 'industries')}
                className={cn(
                  'nav-link flex items-center space-x-1',
                  isScrolled ? 'text-navy-deep' : 'text-white'
                )}
              >
                <span>Who We Serve</span>
                <svg
                  className={cn(
                    'w-4 h-4 transition-transform duration-300',
                    activeMegaMenu === 'industries' && 'rotate-180'
                  )}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {/* Industries Dropdown */}
              {activeMegaMenu === 'industries' && (
                <div className="absolute top-full left-0 mt-0 pt-2 w-96">
                  <div className="bg-white rounded-lg shadow-xl border border-gray-200 overflow-hidden">
                  <div className="p-4">
                    <p className="text-sm text-gray-600 mb-4">
                      Specialized AI solutions for your industry
                    </p>
                    <div className="grid grid-cols-2 gap-2">
                      {INDUSTRIES.map((industry) => {
                        const industryIconMap: { [key: string]: JSX.Element } = {
                          'home-services': (
                            <svg className="w-7 h-7 text-cyan-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                            </svg>
                          ),
                          'automotive': (
                            <svg className="w-7 h-7 text-cyan-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                            </svg>
                          ),
                          'nonprofits': (
                            <svg className="w-7 h-7 text-cyan-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                            </svg>
                          ),
                          'professional-services': (
                            <svg className="w-7 h-7 text-cyan-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                          ),
                        };

                        return (
                          <Link
                            key={industry.slug}
                            href={`/industries/${industry.slug}`}
                            className="p-3 rounded-lg hover:bg-gray-50 transition-colors group"
                          >
                            <div className="text-center">
                              <div className="flex justify-center mb-2">
                                {industryIconMap[industry.slug]}
                              </div>
                              <h3 className="font-semibold text-sm text-navy-deep group-hover:text-cyan-primary transition-colors">
                                {industry.name}
                              </h3>
                            </div>
                          </Link>
                        );
                      })}
                    </div>
                    <div className="mt-4 pt-4 border-t border-gray-200">
                      <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">
                        Florida Locations
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {FLORIDA_CITIES.slice(0, 6).map((city) => (
                          <Link
                            key={city.slug}
                            href={`/florida/${city.slug}`}
                            className="text-sm text-cyan-primary hover:text-cyan-dark transition-colors"
                          >
                            {city.name}
                          </Link>
                        ))}
                      </div>
                      <Link
                        href="/florida"
                        className="text-sm text-gray-600 hover:text-cyan-primary transition-colors mt-2 inline-flex items-center"
                      >
                        View all Florida locations
                        <svg
                          className="w-3 h-3 ml-1"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                          />
                        </svg>
                      </Link>
                    </div>
                  </div>
                  </div>
                </div>
              )}
            </div>

            {/* Simple Links */}
            <Link
              href="/case-studies"
              className={cn(
                'nav-link',
                isScrolled ? 'text-navy-deep' : 'text-white'
              )}
            >
              Case Studies
            </Link>

            <Link
              href="/resources"
              className={cn(
                'nav-link',
                isScrolled ? 'text-navy-deep' : 'text-white'
              )}
            >
              Resources
            </Link>

            <Link
              href="/about"
              className={cn(
                'nav-link',
                isScrolled ? 'text-navy-deep' : 'text-white'
              )}
            >
              About
            </Link>

            <Link
              href="/contact"
              className={cn(
                'nav-link',
                isScrolled ? 'text-navy-deep' : 'text-white'
              )}
            >
              Contact
            </Link>
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button href={CALENDAR_LINK} variant="primary" size="md" external>
              Book Discovery Call
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className={cn(
              'lg:hidden p-2',
              isScrolled ? 'text-navy-deep' : 'text-white'
            )}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-20 bg-white z-40 overflow-y-auto">
          <div className="container-custom max-w-screen-xl mx-auto px-6 py-6">
            {/* Solutions */}
            <div className="mb-6">
              <button
                onClick={() => toggleMegaMenu('solutions')}
                className="flex items-center justify-between w-full text-left font-semibold text-navy-deep mb-3"
              >
                <span>Solutions</span>
                <svg
                  className={cn(
                    'w-5 h-5 transition-transform duration-300',
                    activeMegaMenu === 'solutions' && 'rotate-180'
                  )}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {activeMegaMenu === 'solutions' && (
                <div className="space-y-2 ml-4">
                  {SERVICES.map((service) => (
                    <Link
                      key={service.slug}
                      href={`/solutions/${service.slug}`}
                      className="block py-2 text-gray-600 hover:text-cyan-primary transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {service.icon} {service.name}
                    </Link>
                  ))}
                  <Link
                    href="/6-stage-system"
                    className="block py-2 text-cyan-primary font-semibold"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Our 6-Stage System →
                  </Link>
                </div>
              )}
            </div>

            {/* Who We Serve */}
            <div className="mb-6">
              <button
                onClick={() => toggleMegaMenu('industries')}
                className="flex items-center justify-between w-full text-left font-semibold text-navy-deep mb-3"
              >
                <span>Who We Serve</span>
                <svg
                  className={cn(
                    'w-5 h-5 transition-transform duration-300',
                    activeMegaMenu === 'industries' && 'rotate-180'
                  )}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {activeMegaMenu === 'industries' && (
                <div className="space-y-2 ml-4">
                  {INDUSTRIES.map((industry) => (
                    <Link
                      key={industry.slug}
                      href={`/industries/${industry.slug}`}
                      className="block py-2 text-gray-600 hover:text-cyan-primary transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {industry.icon} {industry.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Simple Links */}
            <div className="space-y-4">
              <Link
                href="/case-studies"
                className="block font-semibold text-navy-deep"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Case Studies
              </Link>
              <Link
                href="/resources"
                className="block font-semibold text-navy-deep"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Resources
              </Link>
              <Link
                href="/about"
                className="block font-semibold text-navy-deep"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="/contact"
                className="block font-semibold text-navy-deep"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </Link>
            </div>

            {/* Mobile CTA */}
            <div className="mt-8">
              <Button
                href={CALENDAR_LINK}
                variant="primary"
                size="lg"
                className="w-full justify-center"
                external
              >
                Book Discovery Call
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
