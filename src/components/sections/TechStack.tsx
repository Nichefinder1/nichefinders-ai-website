'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';

const TECH_ITEMS = [
  {
    name: 'OpenAI',
    category: 'AI Models',
    bg: '#10a37f',
    logo: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
        <path d="M22.28 9.28a5.998 5.998 0 00-.52-4.93 6.13 6.13 0 00-6.6-2.93A6.003 6.003 0 009.8.1a6.13 6.13 0 00-5.84 4.22 6.003 6.003 0 00-4 2.9 6.13 6.13 0 00.76 7.18 5.998 5.998 0 00.52 4.93 6.13 6.13 0 006.6 2.93 6.003 6.003 0 005.37 2.32 6.13 6.13 0 005.84-4.22 6.003 6.003 0 004-2.9 6.13 6.13 0 00-.77-7.18zM13.37 21.3a4.55 4.55 0 01-2.9-.99l.14-.08 4.82-2.78a.8.8 0 00.4-.69v-6.8l2.04 1.18a.07.07 0 01.04.06v5.62a4.57 4.57 0 01-4.54 4.48zM3.6 17.6a4.55 4.55 0 01-.54-3.06l.14.08 4.82 2.78a.8.8 0 00.8 0l5.88-3.4v2.36a.07.07 0 01-.03.06L9.8 19.2a4.57 4.57 0 01-6.2-1.6zm-1.18-10a4.55 4.55 0 012.37-2l-.01.16v5.56a.8.8 0 00.4.69l5.88 3.4-2.04 1.17a.07.07 0 01-.07 0L4.07 13.8A4.57 4.57 0 012.42 7.6zm16.76 3.92l-5.88-3.4 2.04-1.18a.07.07 0 01.07 0l4.88 2.82a4.57 4.57 0 01-.71 8.24v-5.72a.8.8 0 00-.4-.76zm2.03-3.07l-.14-.08-4.82-2.78a.8.8 0 00-.8 0L9.57 9.07V6.7a.07.07 0 01.03-.06l4.88-2.82a4.57 4.57 0 016.73 4.73zm-12.76 4.2L6.41 11.5a.07.07 0 01-.04-.06V5.82a4.57 4.57 0 017.5-3.5l-.14.08-4.82 2.78a.8.8 0 00-.4.69v6.8l-2.04-1.18zm1.1-2.38l2.62-1.51 2.62 1.51v3.02l-2.62 1.51-2.62-1.51v-3.02z"/>
      </svg>
    ),
  },
  {
    name: 'Claude',
    category: 'AI Models',
    bg: '#c96442',
    logo: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
        <path d="M4.709 15.955l4.72-2.647.08-.23-.08-.23-4.72-2.648v-.93l5.7 3.2a.5.5 0 010 .864l-5.7 3.2v-.93zM9.993 9.4l2.608 7.16h-1.02L9.43 13.8l-1.157 2.76h-1.02L9.86 9.4h.133zm4.5 7.16V9.4h.96v7.16h-.96z"/>
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/>
      </svg>
    ),
  },
  {
    name: 'Google Gemini',
    category: 'AI Models',
    bg: '#4285F4',
    logo: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
        <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 100-16 8 8 0 000 16zm-.5-4.5v-3h-3v-1h3v-3h1v3h3v1h-3v3h-1z"/>
      </svg>
    ),
  },
  {
    name: 'n8n',
    category: 'Automation',
    bg: '#ea4b71',
    logo: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
        <path d="M7 8a3 3 0 110 6 3 3 0 010-6zm10 0a3 3 0 110 6 3 3 0 010-6zM7 9.5a1.5 1.5 0 100 3 1.5 1.5 0 000-3zm10 0a1.5 1.5 0 100 3 1.5 1.5 0 000-3zm-5.25.75h.5v3.5h-.5v-3.5zm-2 1h4.5v.5h-4.5v-.5z"/>
      </svg>
    ),
  },
  {
    name: 'Make',
    category: 'Automation',
    bg: '#6d00cc',
    logo: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
        <circle cx="6" cy="12" r="2.5"/>
        <circle cx="12" cy="7" r="2.5"/>
        <circle cx="18" cy="12" r="2.5"/>
        <circle cx="12" cy="17" r="2.5"/>
        <line x1="8" y1="11" x2="10.5" y2="8.5" stroke="white" strokeWidth="1.5"/>
        <line x1="13.5" y1="8.5" x2="16" y2="11" stroke="white" strokeWidth="1.5"/>
        <line x1="16" y1="13" x2="13.5" y2="15.5" stroke="white" strokeWidth="1.5"/>
        <line x1="10.5" y1="15.5" x2="8" y2="13" stroke="white" strokeWidth="1.5"/>
      </svg>
    ),
  },
  {
    name: 'Zapier',
    category: 'Automation',
    bg: '#ff4a00',
    logo: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
      </svg>
    ),
  },
  {
    name: 'Airtable',
    category: 'Database',
    bg: '#18bfff',
    logo: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
        <path d="M11.5 3.5l-9 3.75v1.5l9 3.75 9-3.75v-1.5l-9-3.75zM2.5 10.75v1.5l9 3.75 9-3.75v-1.5l-9 3.75-9-3.75zM2.5 15.25v1.5l9 3.75 9-3.75v-1.5l-9 3.75-9-3.75z"/>
      </svg>
    ),
  },
  {
    name: 'HubSpot',
    category: 'CRM',
    bg: '#ff7a59',
    logo: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
        <path d="M15 8.5V6a2 2 0 10-2 0v2.5a3.5 3.5 0 00-1.5 6.6V18a2 2 0 102 0v-2.9A3.5 3.5 0 0015 8.5z"/>
        <circle cx="7" cy="10" r="3"/>
        <path d="M7 13v5"/>
      </svg>
    ),
  },
  {
    name: 'Salesforce',
    category: 'CRM',
    bg: '#00a1e0',
    logo: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
        <path d="M10 4a4 4 0 014 4 4 4 0 01-.2 1.3A3.5 3.5 0 0117 12.5a3.5 3.5 0 01-3.5 3.5H7A3.5 3.5 0 013.5 12.5a3.5 3.5 0 012.8-3.43A4 4 0 0110 4z"/>
      </svg>
    ),
  },
  {
    name: 'Twilio',
    category: 'Communication',
    bg: '#f22f46',
    logo: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
        <circle cx="12" cy="12" r="9" fill="none" stroke="white" strokeWidth="2"/>
        <circle cx="9" cy="9" r="1.5"/>
        <circle cx="15" cy="9" r="1.5"/>
        <circle cx="9" cy="15" r="1.5"/>
        <circle cx="15" cy="15" r="1.5"/>
      </svg>
    ),
  },
  {
    name: 'SendGrid',
    category: 'Communication',
    bg: '#1a82e2',
    logo: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
        <path d="M3 8h8v8H3zM13 3h8v8h-8zM13 13h4v4h-4zM3 3h4v4H3z" fillOpacity="0.9"/>
      </svg>
    ),
  },
  {
    name: 'Stripe',
    category: 'Payments',
    bg: '#635bff',
    logo: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
        <path d="M13.976 9.15c-2.172-.806-3.356-1.426-3.356-2.409 0-.831.683-1.305 1.901-1.305 2.227 0 4.515.858 6.09 1.631l.89-5.494C18.252.975 15.697 0 12.165 0 9.667 0 7.589.654 6.104 1.872 4.56 3.147 3.757 4.992 3.757 7.218c0 4.039 2.467 5.76 6.476 7.219 2.585.92 3.445 1.574 3.445 2.583 0 .98-.84 1.545-2.354 1.545-1.875 0-4.965-.921-6.99-2.109l-.9 5.555C5.175 22.99 8.385 24 11.714 24c2.641 0 4.843-.624 6.328-1.813 1.664-1.305 2.525-3.236 2.525-5.732 0-4.128-2.524-5.851-6.591-7.305z"/>
      </svg>
    ),
  },
];

export default function TechStack() {
  const marqueeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const marquee = marqueeRef.current;
    if (!marquee) return;

    const items = marquee.querySelectorAll('.tech-item');
    const totalWidth = Array.from(items).reduce(
      (acc, item) => acc + (item as HTMLElement).offsetWidth,
      0
    );

    // Duplicate items for seamless loop
    const clone = marquee.innerHTML;
    marquee.innerHTML += clone;

    // Animate infinite scroll
    gsap.to(marquee, {
      x: -totalWidth,
      duration: 30,
      ease: 'none',
      repeat: -1,
    });

    // Pause on hover
    const handleMouseEnter = () => gsap.to(marquee, { timeScale: 0, duration: 0.3 });
    const handleMouseLeave = () => gsap.to(marquee, { timeScale: 1, duration: 0.3 });

    marquee.addEventListener('mouseenter', handleMouseEnter);
    marquee.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      marquee.removeEventListener('mouseenter', handleMouseEnter);
      marquee.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <Section background="navy-deepest" padding glow>
      <Container size="full">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 px-6">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-orange-cta mb-4">
            OUR TECHNOLOGY
          </p>
          <h2 className="font-header text-4xl lg:text-5xl font-bold text-white mb-6">
            Powered by Best-in-Class Tools
          </h2>
          <p className="text-xl text-gray-300">
            We leverage the most powerful AI and automation platforms to build
            custom solutions that actually work for your business.
          </p>
        </div>

        {/* Infinite Scroll Marquee */}
        <div className="relative overflow-hidden py-8">
          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-navy-deep to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-navy-deep to-transparent z-10 pointer-events-none" />

          {/* Marquee Container */}
          <div
            ref={marqueeRef}
            className="flex items-center space-x-12"
            style={{ willChange: 'transform' }}
          >
            {TECH_ITEMS.map((tech, index) => (
              <div key={index} className="tech-item flex-shrink-0 group cursor-pointer">
                <div className="px-6 py-4 bg-white/5 border border-white/10 rounded-xl hover:border-white/25 transition-all duration-300 flex items-center gap-4 min-w-[180px]">
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform"
                    style={{ background: tech.bg }}
                  >
                    {tech.logo}
                  </div>
                  <div>
                    <div className="font-bold text-white text-sm">{tech.name}</div>
                    <div className="text-xs text-white/40">{tech.category}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 px-6 text-center">
          <a
            href="/6-stage-system"
            className="inline-flex items-center text-orange-cta font-bold hover:text-orange-hover transition-colors"
          >
            <span>See How We Choose the Right Tools</span>
            <svg
              className="w-5 h-5 ml-2"
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
          </a>
        </div>
      </Container>
    </Section>
  );
}
