export default function AOSTrustBar() {
  const trustPoints = [
    {
      value: '15',
      label: 'Business Areas',
      sub: 'Covered by the AI OS framework',
    },
    {
      value: '6 mo',
      label: 'Engagement',
      sub: 'Direct, hands-on partnership',
    },
    {
      value: '100%',
      label: 'Custom Built',
      sub: 'No templates. Built for you.',
    },
    {
      value: '1:1',
      label: 'Direct Access',
      sub: 'To the team building your systems',
    },
  ];

  const signals = [
    'Florida-based agency with national clients',
    'Active AI OS deployments in home services, contractors, and professional services',
    'Every system built and owned by your business — not locked in our platform',
    'Direct developer access from day one',
  ];

  return (
    <section className="py-16 md:py-20 bg-navy-medium border-y border-white/6" id="aos-trust">
      <div className="container-custom">
        {/* Stats row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-14">
          {trustPoints.map(({ value, label, sub }) => (
            <div key={label} className="text-center">
              <p className="font-header font-black text-3xl md:text-4xl text-orange-cta mb-1">
                {value}
              </p>
              <p className="font-semibold text-white text-sm mb-0.5">{label}</p>
              <p className="text-white/50 text-xs">{sub}</p>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div
          className="h-px w-full mb-12"
          style={{ background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)' }}
        />

        {/* Trust signals */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto">
          {signals.map((signal) => (
            <div key={signal} className="flex items-start gap-3 text-sm text-white/60">
              <span className="text-orange-cta mt-0.5 shrink-0" aria-hidden="true">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
              </span>
              <span>{signal}</span>
            </div>
          ))}
        </div>

        {/* Brand tagline */}
        <div className="mt-12 text-center">
          <p className="font-header text-lg md:text-xl text-white/50 uppercase tracking-widest">
            Nichefinders AI &nbsp;·&nbsp;{' '}
            <span className="text-orange-cta">We install the intelligence first. It handles the rest.</span>
          </p>
        </div>
      </div>
    </section>
  );
}
