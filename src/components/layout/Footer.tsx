import Link from 'next/link';
import Image from 'next/image';
import { SERVICES, INDUSTRIES, FLORIDA_CITIES, CALENDAR_LINK, GOOGLE_BUSINESS_URL } from '@/lib/constants';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy-deep text-white">
      {/* Main Footer Content */}
      <div className="container-custom max-w-screen-xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 items-start">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-1 group">
              <div className="relative w-40 h-40 transition-all duration-300 group-hover:scale-110">
                <Image
                  src="/logo.svg"
                  alt="NicheFinders AI"
                  fill
                  className="object-contain"
                />
              </div>
            </Link>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Transforming businesses with AI automation. From lead
              generation to customer retention, we build intelligent systems
              that drive growth and efficiency.
            </p>
            <a
              href={GOOGLE_BUSINESS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 hover:border-orange-cta/40 hover:bg-orange-cta/5 transition-all duration-200"
              aria-label="NicheFinders AI on Google"
            >
              <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" fill="none">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              <span className="text-sm font-semibold text-white/80">View on Google</span>
              <svg className="w-3.5 h-3.5 text-white/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="text-lg font-bold mb-4">Solutions</h3>
            <ul className="space-y-3">
              {SERVICES.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/solutions/${service.slug}`}
                    className="text-gray-400 hover:text-orange-cta transition-colors duration-300"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/6-stage-system"
                  className="text-orange-cta hover:text-orange-hover font-semibold transition-colors duration-300"
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
                    className="text-gray-400 hover:text-orange-cta transition-colors duration-300"
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
                    className="text-gray-400 hover:text-orange-cta transition-colors duration-300"
                  >
                    Case Studies
                  </Link>
                </li>
                <li>
                  <Link
                    href="/resources"
                    className="text-gray-400 hover:text-orange-cta transition-colors duration-300"
                  >
                    Blog & Resources
                  </Link>
                </li>
                <li>
                  <Link
                    href="/resources/ai-insights"
                    className="text-gray-400 hover:text-orange-cta transition-colors duration-300"
                  >
                    AI Insights
                  </Link>
                </li>
                <li>
                  <Link
                    href="/resources/roi-calculator"
                    className="text-gray-400 hover:text-orange-cta transition-colors duration-300"
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
                    className="text-gray-400 hover:text-orange-cta transition-colors duration-300"
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
                    className="text-gray-400 hover:text-orange-cta transition-colors duration-300"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href={CALENDAR_LINK}
                    className="text-gray-400 hover:text-orange-cta transition-colors duration-300"
                  >
                    Contact
                  </Link>
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
                className="text-gray-400 hover:text-orange-cta text-sm transition-colors duration-300"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms-of-service"
                className="text-gray-400 hover:text-orange-cta text-sm transition-colors duration-300"
              >
                Terms of Service
              </Link>
              <Link
                href="/sitemap"
                className="text-gray-400 hover:text-orange-cta text-sm transition-colors duration-300"
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
