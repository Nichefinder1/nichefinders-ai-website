export default function AOSWhatsIncluded() {
  const included = [
    {
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
          <line x1="16" y1="2" x2="16" y2="6"/>
          <line x1="8" y1="2" x2="8" y2="6"/>
          <line x1="3" y1="10" x2="21" y2="10"/>
        </svg>
      ),
      title: 'Weekly 90-Min Strategy Sessions',
      description: 'Direct face time every week. No hand-off to account managers. No tickets.',
    },
    {
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <polyline points="16 18 22 12 16 6"/>
          <polyline points="8 6 2 12 8 18"/>
        </svg>
      ),
      title: 'Direct Developer Access',
      description: 'A real developer builds your systems alongside you. Not a templated solution.',
    },
    {
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21"/>
          <line x1="9" y1="3" x2="9" y2="18"/>
          <line x1="15" y1="6" x2="15" y2="21"/>
        </svg>
      ),
      title: 'Custom AI OS Roadmap',
      description: 'A 12-month implementation plan specific to your operation, not a generic template.',
    },
    {
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
          <circle cx="9" cy="7" r="4"/>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
        </svg>
      ),
      title: 'Staff AI Training',
      description: 'Your team learns how to use AI tools effectively in their specific role — or they won\'t use them.',
    },
    {
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/>
          <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/>
          <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/>
          <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/>
        </svg>
      ),
      title: 'MVP & Application Development',
      description: 'We build tools that run inside your actual business — custom software for your specific workflows.',
    },
    {
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"/>
          <path d="M9 18h6"/>
          <path d="M10 22h4"/>
        </svg>
      ),
      title: 'Complete AI Clarity',
      description: 'You\'ll know exactly what AI can do for your business — and what it can\'t. No hype.',
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-navy-deepest" id="aos-whats-included">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-orange-cta mb-4">
            What&apos;s included
          </p>
          <h2 className="font-header font-bold text-3xl md:text-4xl lg:text-5xl text-white leading-tight mb-4">
            Everything the brain needs
            <br />
            <span className="text-white/60">to run your operation.</span>
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            This is a hands-on partnership, not a software subscription. Every deliverable is
            built specifically for your business.
          </p>
        </div>

        {/* Included items */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {included.map((item) => (
            <div key={item.title} className="flex items-start gap-5 py-5 border-b border-white/6 last:border-0">
              <div
                className="w-10 h-10 rounded shrink-0 flex items-center justify-center"
                style={{ background: 'rgba(0,85,164,0.15)', border: '1px solid rgba(0,85,164,0.3)', color: '#1A6EC8' }}
              >
                {item.icon}
              </div>
              <div>
                <h3 className="font-semibold text-white text-base mb-1">{item.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom callout */}
        <div
          className="mt-12 text-center max-w-2xl mx-auto rounded-xl p-8"
          style={{ background: 'rgba(204,85,0,0.06)', border: '1px solid rgba(204,85,0,0.2)' }}
        >
          <p className="font-header text-xl text-white font-semibold mb-2">
            We only take on a few partners at a time.
          </p>
          <p className="text-white/60 text-sm">
            This is a high-touch engagement — not a product you purchase. We work directly inside your
            business, which means capacity is limited. If you&apos;re serious about it, book the call before the next cohort closes.
          </p>
        </div>
      </div>
    </section>
  );
}
