const icons = {
  robot: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="8" width="18" height="12" rx="2" />
      <path d="M9 8V6a3 3 0 0 1 6 0v2" />
      <circle cx="9" cy="14" r="1.5" fill="currentColor" stroke="none" />
      <circle cx="15" cy="14" r="1.5" fill="currentColor" stroke="none" />
      <path d="M8 19v2M16 19v2" />
    </svg>
  ),
  clipboard: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2" />
      <rect x="9" y="3" width="6" height="4" rx="1" />
      <path d="M9 12h6M9 16h4" />
    </svg>
  ),
  data: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M3 5v4c0 1.66 4.03 3 9 3s9-1.34 9-3V5" />
      <path d="M3 9v4c0 1.66 4.03 3 9 3s9-1.34 9-3V9" />
      <path d="M3 13v4c0 1.66 4.03 3 9 3s9-1.34 9-3v-4" />
    </svg>
  ),
  loop: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M17 2l4 4-4 4" />
      <path d="M3 11V9a4 4 0 0 1 4-4h14" />
      <path d="M7 22l-4-4 4-4" />
      <path d="M21 13v2a4 4 0 0 1-4 4H3" />
    </svg>
  ),
};

export default function AOSProblem() {
  const problems = [
    {
      icon: icons.robot,
      title: 'AI tools deployed on broken processes',
      description:
        'Most businesses buy AI tools before their operations are structured enough to benefit from them. The result: AI that automates the wrong things at machine speed.',
    },
    {
      icon: icons.clipboard,
      title: 'No documented systems or SOPs',
      description:
        'When everything lives in employees\' heads, AI has nothing to learn from and nothing to optimize. Institutional knowledge walks out the door every time someone quits.',
    },
    {
      icon: icons.data,
      title: 'Data scattered across disconnected systems',
      description:
        'AI is only as good as its data. Disconnected tools, duplicate records, and missing fields mean AI produces confident-sounding answers that are flat-out wrong.',
    },
    {
      icon: icons.loop,
      title: 'Manual workflows nobody has time to fix',
      description:
        'The team is too busy doing the work to build the systems that would eliminate the work. Every day of reactive firefighting delays the structural work that creates capacity.',
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-navy-deepest" id="aos-problem">
      <div className="container-custom">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-orange-cta mb-4">
            The real problem
          </p>
          <h2 className="font-header font-bold text-3xl md:text-4xl lg:text-5xl text-white leading-tight mb-6" style={{ textWrap: 'balance' }}>
            AI doesn&apos;t fix a broken business.
            <br />
            <span className="text-white/60">It amplifies whatever&apos;s already there.</span>
          </h2>
          <p className="text-white/70 text-lg leading-relaxed max-w-2xl mx-auto">
            The contractors who are failing with AI aren&apos;t using the wrong tools. They&apos;re trying to automate
            operations that were never structured in the first place.
          </p>
        </div>

        {/* Problem grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {problems.map((problem) => (
            <div
              key={problem.title}
              className="card-elevated-dark p-6 rounded-xl border border-white/8"
            >
              <div className="text-orange-cta mb-4">{problem.icon}</div>
              <h3 className="font-header font-semibold text-white text-lg mb-2">
                {problem.title}
              </h3>
              <p className="text-white/60 text-sm leading-relaxed">{problem.description}</p>
            </div>
          ))}
        </div>

        {/* Callout stat */}
        <div className="text-center max-w-3xl mx-auto">
          <div
            className="rounded-xl p-8"
            style={{ background: 'rgba(239,68,68,0.06)', border: '1px solid rgba(239,68,68,0.2)' }}
          >
            <p className="font-header font-bold text-2xl md:text-3xl text-white mb-3">
              9 out of 15 business areas have critical gaps
              <br />
              <span className="text-red-400">in the average contracting company.</span>
            </p>
            <p className="text-white/60 text-base mb-4">
              Click through the visualization below to see which ones apply to your business —
              and what they look like when they&apos;re actually structured.
            </p>
            <p className="text-white/35 text-sm">
              Research from{' '}
              <a href="https://www.mckinsey.com/capabilities/mckinsey-digital/our-insights/the-top-trends-in-tech" target="_blank" rel="noopener noreferrer" className="text-[#7aafd4] hover:text-white transition-colors underline underline-offset-2">McKinsey Digital</a>
              {' '}shows businesses that systematically automate operations outgrow competitors by 3–5x.{' '}
              <a href="https://www.bls.gov/productivity/" target="_blank" rel="noopener noreferrer" className="text-[#7aafd4] hover:text-white transition-colors underline underline-offset-2">BLS productivity data</a>
              {' '}confirms the gap between structured and unstructured operations widens every year.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
