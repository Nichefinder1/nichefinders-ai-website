import Link from 'next/link';
import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';

export const metadata = {
  title: 'Terms of Service | NicheFinders AI',
  description: 'NicheFinders AI Terms of Service — legal terms governing your use of our services and partner program.',
};

export default function TermsOfServicePage() {
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
            Terms of Service
          </h1>
          <p className="text-white/60 text-sm">Last updated: March 2026 · NicheFinders AI</p>
        </Container>
      </section>

      {/* Content */}
      <Section background="navy-deepest" padding={false}>
        <Container size="md" className="py-20">
          <div className="prose prose-invert max-w-none">
            <p className="text-white/70 leading-relaxed mb-6">
              These Terms of Service ("Terms") govern your access to and use of NicheFinders AI's services, website, and partner program materials. By engaging with NicheFinders AI, you agree to these Terms.
            </p>

            <h2 className="font-header font-bold text-2xl text-white mt-12 mb-4">1. Services</h2>
            <p className="text-white/70 leading-relaxed mb-6">
              NicheFinders AI provides business intelligence, AI-powered automation, SEO, and digital marketing services. The scope of services delivered to any client or partner is defined by a signed proposal or partner agreement.
            </p>

            <h2 className="font-header font-bold text-2xl text-white mt-12 mb-4">2. Partner Program</h2>
            <p className="text-white/70 leading-relaxed mb-4">
              Participation in the NicheFinders AI OS Partner Program is subject to acceptance of a separate partnership agreement. These Terms supplement but do not replace that agreement. Partners are expected to:
            </p>
            <ul className="space-y-3 mb-6">
              {[
                'Represent NicheFinders AI services accurately and professionally',
                'Maintain the confidentiality of proprietary program materials',
                'Comply with applicable laws in all referral and marketing activities',
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3 text-white/70">
                  <span className="text-orange-cta flex-shrink-0 mt-1">–</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <h2 className="font-header font-bold text-2xl text-white mt-12 mb-4">3. Intellectual Property</h2>
            <p className="text-white/70 leading-relaxed mb-6">
              All content, frameworks, tools, methodologies, and materials provided by NicheFinders AI remain the sole property of NicheFinders AI. Partners and clients may not reproduce, resell, or distribute these materials without written permission.
            </p>

            <h2 className="font-header font-bold text-2xl text-white mt-12 mb-4">4. Confidentiality</h2>
            <p className="text-white/70 leading-relaxed mb-6">
              Program documents, pricing, strategies, and client information are confidential. You agree not to share this information with third parties without our prior written consent.
            </p>

            <h2 className="font-header font-bold text-2xl text-white mt-12 mb-4">5. Payment & Fees</h2>
            <p className="text-white/70 leading-relaxed mb-6">
              Payment terms, commission structures, and fee schedules are defined in your signed agreement. All fees are due as specified and are non-refundable unless otherwise agreed in writing.
            </p>

            <h2 className="font-header font-bold text-2xl text-white mt-12 mb-4">6. Limitation of Liability</h2>
            <p className="text-white/70 leading-relaxed mb-6">
              NicheFinders AI's liability to you for any cause whatsoever shall not exceed the amount paid by you to NicheFinders AI in the three months preceding the claim. We are not liable for indirect, incidental, or consequential damages.
            </p>

            <h2 className="font-header font-bold text-2xl text-white mt-12 mb-4">7. Termination</h2>
            <p className="text-white/70 leading-relaxed mb-6">
              Either party may terminate the partnership or service engagement with 30 days written notice, unless otherwise specified in your agreement. We reserve the right to terminate immediately for breach of these Terms or your partner agreement.
            </p>

            <h2 className="font-header font-bold text-2xl text-white mt-12 mb-4">8. Governing Law</h2>
            <p className="text-white/70 leading-relaxed mb-6">
              These Terms are governed by the laws of the State of Illinois, without regard to its conflict of law provisions. Any disputes shall be resolved in the appropriate courts of Illinois.
            </p>

            <h2 className="font-header font-bold text-2xl text-white mt-12 mb-4">9. Changes to These Terms</h2>
            <p className="text-white/70 leading-relaxed mb-6">
              We may update these Terms from time to time. We will notify active partners of material changes. Continued use of our services after changes constitutes acceptance of the updated Terms.
            </p>

            <h2 className="font-header font-bold text-2xl text-white mt-12 mb-4">10. Contact</h2>
            <p className="text-white/70 leading-relaxed">
              For questions about these Terms, contact us at{' '}
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
