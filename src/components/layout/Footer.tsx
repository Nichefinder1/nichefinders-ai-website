import Link from 'next/link';
import Image from 'next/image';
import { SERVICES, INDUSTRIES, FLORIDA_CITIES, CALENDAR_LINK } from '@/lib/constants';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy-deep text-white">
      {/* Main Footer Content */}
      <div className="container-custom max-w-screen-xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center space-x-3 mb-6 group">
              <div className="relative w-16 h-16 transition-all duration-300 group-hover:scale-110">
                <Image
                  src="/logo.svg"
                  alt="NicheFinders AI"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-2xl font-black">NicheFinders AI</span>
            </Link>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Transforming businesses with AI automation. From lead
              generation to customer retention, we build intelligent systems
              that drive growth and efficiency.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://linkedin.com/company/nichefinders-ai"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-cyan-primary transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
              <a
                href="https://twitter.com/nichefinders"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-cyan-primary transition-colors duration-300"
                aria-label="Twitter"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                </svg>
              </a>
              <a
                href="https://facebook.com/nichefinders"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-cyan-primary transition-colors duration-300"
                aria-label="Facebook"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="text-lg font-bold mb-4">Solutions</h3>
            <ul className="space-y-3">
              {SERVICES.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/solutions/${service.slug}`}
                    className="text-gray-400 hover:text-cyan-primary transition-colors duration-300"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/6-stage-system"
                  className="text-cyan-primary hover:text-cyan-light font-semibold transition-colors duration-300"
                >
                  Our 6-Stage System
                </Link>
              </li>
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h3 className="text-lg font-bold mb-4">Industries</h3>
            <ul className="space-y-3">
              {INDUSTRIES.map((industry) => (
                <li key={industry.slug}>
                  <Link
                    href={`/industries/${industry.slug}`}
                    className="text-gray-400 hover:text-cyan-primary transition-colors duration-300"
                  >
                    {industry.name}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3">
                Resources
              </h4>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/case-studies"
                    className="text-gray-400 hover:text-cyan-primary transition-colors duration-300"
                  >
                    Case Studies
                  </Link>
                </li>
                <li>
                  <Link
                    href="/resources"
                    className="text-gray-400 hover:text-cyan-primary transition-colors duration-300"
                  >
                    Blog & Resources
                  </Link>
                </li>
                <li>
                  <Link
                    href="/resources/roi-calculator"
                    className="text-gray-400 hover:text-cyan-primary transition-colors duration-300"
                  >
                    ROI Calculator
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Florida Locations */}
          <div>
            <h3 className="text-lg font-bold mb-4">Florida Locations</h3>
            <ul className="space-y-3">
              {FLORIDA_CITIES.map((city) => (
                <li key={city.slug}>
                  <Link
                    href={`/florida/${city.slug}`}
                    className="text-gray-400 hover:text-cyan-primary transition-colors duration-300"
                  >
                    {city.name}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3">
                Company
              </h4>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/about"
                    className="text-gray-400 hover:text-cyan-primary transition-colors duration-300"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <a
                    href={CALENDAR_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-cyan-primary transition-colors duration-300"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container-custom max-w-screen-xl mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              &copy; {currentYear} NicheFinders AI. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link
                href="/privacy-policy"
                className="text-gray-400 hover:text-cyan-primary text-sm transition-colors duration-300"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms-of-service"
                className="text-gray-400 hover:text-cyan-primary text-sm transition-colors duration-300"
              >
                Terms of Service
              </Link>
              <Link
                href="/sitemap.xml"
                className="text-gray-400 hover:text-cyan-primary text-sm transition-colors duration-300"
              >
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
