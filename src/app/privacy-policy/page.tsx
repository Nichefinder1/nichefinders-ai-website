import Link from 'next/link';
import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';

export const metadata = {
  title: 'Privacy Policy | NicheFinders AI',
  description: 'NicheFinders AI Privacy Policy — how we collect, use, and safeguard your information.',
};

export default function PrivacyPolicyPage() {
  return (
    <main style={{ background: 'linear-gradient(180deg, #001A3A 0%, #002855 45%, #001A3A 100%)' }}>
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)',
            backgroundSize: '50px 50px',
          }}
        />
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(circle at 50% 0%, rgba(0,85,164,0.22) 0%, transparent 55%)' }} />

        <Container size="lg" className="relative z-10 text-center max-w-3xl">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-orange-cta mb-6">Legal</p>
          <h1 className="font-header font-bold text-4xl md:text-5xl leading-[1.1] tracking-tight text-[#E8EDF2] mb-4">
            Privacy Policy
          </h1>
          <p className="text-white/60 text-sm">Last updated: March 2026 · NicheFinders AI</p>
        </Container>
      </section>

      {/* Content */}
      <Section background="navy-deepest" padding={false}>
        <Container size="md" className="py-20">
          <div className="prose prose-invert max-w-none">
            <p className="text-white/70 leading-relaxed mb-6">
              NicheFinders AI ("we," "us," or "our") is committed to protecting your privacy. This policy explains how we collect, use, and safeguard information when you engage with our services, website, or partner program.
            </p>

            <h2 className="font-header font-bold text-2xl text-white mt-12 mb-4">Information We Collect</h2>
            <p className="text-white/70 leading-relaxed mb-4">We may collect the following types of information:</p>
            <ul className="space-y-3 mb-6">
              {[
                'Contact information — name, business name, email address, phone number',
                'Business information — industry, location, current systems, and operational details shared during onboarding',
                'Usage data — how you interact with our website and partner materials',
                'Communication records — emails, messages, and notes from calls or meetings',
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3 text-white/70">
                  <span className="text-orange-cta flex-shrink-0 mt-1">–</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <h2 className="font-header font-bold text-2xl text-white mt-12 mb-4">How We Use Your Information</h2>
            <ul className="space-y-3 mb-6">
              {[
                'To deliver and improve our services to you',
                'To communicate about your partnership, project status, and deliverables',
                'To send relevant updates, proposals, or educational content (you can opt out at any time)',
                'To fulfill legal and contractual obligations',
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3 text-white/70">
                  <span className="text-orange-cta flex-shrink-0 mt-1">–</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <h2 className="font-header font-bold text-2xl text-white mt-12 mb-4">Information Sharing</h2>
            <p className="text-white/70 leading-relaxed mb-4">We do not sell, rent, or trade your personal information. We may share information only in the following circumstances:</p>
            <ul className="space-y-3 mb-6">
              {[
                'With trusted service providers who assist in delivering our services (e.g., email, project management tools), under strict confidentiality agreements',
                'When required by law or to protect the rights and safety of our clients and business',
                'With your explicit consent',
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3 text-white/70">
                  <span className="text-orange-cta flex-shrink-0 mt-1">–</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <h2 className="font-header font-bold text-2xl text-white mt-12 mb-4">Data Security</h2>
            <p className="text-white/70 leading-relaxed mb-6">
              We implement reasonable technical and organizational measures to protect your information from unauthorized access, loss, or misuse. No transmission over the internet is 100% secure, but we take your data protection seriously.
            </p>

            <h2 className="font-header font-bold text-2xl text-white mt-12 mb-4">Data Retention</h2>
            <p className="text-white/70 leading-relaxed mb-6">
              We retain your information for as long as necessary to fulfill the purposes described in this policy, or as required by law. You may request deletion of your data at any time by contacting us.
            </p>

            <h2 className="font-header font-bold text-2xl text-white mt-12 mb-4">Your Rights</h2>
            <ul className="space-y-3 mb-6">
              {[
                'Request access to the personal data we hold about you',
                'Request correction of inaccurate information',
                'Request deletion of your data',
                'Opt out of marketing communications at any time',
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3 text-white/70">
                  <span className="text-orange-cta flex-shrink-0 mt-1">–</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <h2 className="font-header font-bold text-2xl text-white mt-12 mb-4">Cookies & Tracking</h2>
            <p className="text-white/70 leading-relaxed mb-6">
              Our website may use cookies and similar technologies to improve your browsing experience and analyze site traffic. You can control cookies through your browser settings.
            </p>

            <h2 className="font-header font-bold text-2xl text-white mt-12 mb-4">Contact Us</h2>
            <p className="text-white/70 leading-relaxed">
              If you have questions about this Privacy Policy or wish to exercise your rights, please contact us at{' '}
              <a href="mailto:hello@nichefinders.ai" className="text-[#7aafd4] hover:text-white transition-colors">
                hello@nichefinders.ai
              </a>{' '}
              or visit{' '}
              <a href="https://nichefinders.ai" className="text-[#7aafd4] hover:text-white transition-colors">
                nichefinders.ai
              </a>
              .
            </p>
          </div>

          {/* Footer Links */}
          <div className="mt-20 pt-8 border-t border-white/10 text-center">
            <Link
              href="/"
              className="inline-block text-sm text-white/60 hover:text-white transition-colors mb-4"
            >
              ← Back to Home
            </Link>
            <div className="flex items-center justify-center gap-3 flex-wrap text-xs text-white/40">
              <a href="https://nichefinders.ai" className="hover:text-white/60 transition-colors">
                nichefinders.ai
              </a>
              <span>·</span>
              <a href="/privacy-policy" className="hover:text-white/60 transition-colors">
                Privacy Policy
              </a>
              <span>·</span>
              <a href="/terms-of-service" className="hover:text-white/60 transition-colors">
                Terms of Service
              </a>
            </div>
            <p className="text-xs text-white/30 mt-4">© 2026 NicheFinders AI. All rights reserved.</p>
          </div>
        </Container>
      </Section>
    </main>
  );
}
