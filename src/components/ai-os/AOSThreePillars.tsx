export default function AOSThreePillars() {
  const pillars = [
    {
      number: '01',
      title: 'Architecture',
      subtitle: 'Map your business as it actually is',
      color: '#CC5500',
      points: [
        'Complete audit of all 15 business areas',
        'Gap analysis — what\'s structured vs what\'s chaos',
        'Priority ranking by revenue impact',
        'Custom AI OS blueprint for your operation',
        'Competitive positioning vs your market',
      ],
      outcome: 'A clear picture of exactly where your business stands — and a brain that now knows it.',
    },
    {
      number: '02',
      title: 'Installation',
      subtitle: 'Build the systems and infrastructure',
      color: '#0055A4',
      points: [
        'SOPs written for every critical process',
        'Technology stack selected and integrated',
        'Data infrastructure built and cleaned',
        'Team trained on new systems and workflows',
        'Custom AI tools built for your operation',
      ],
      outcome: 'The brain is wired in — systems, data, and infrastructure ready for the intelligence to run.',
    },
    {
      number: '03',
      title: 'Operation',
      subtitle: 'Deploy AI across the structured foundation',
      color: '#10B981',
      points: [
        'AI deployed across every structured area',
        'Automated workflows replacing manual steps',
        'AI monitoring, reporting, and alerts live',
        'Staff proficient with AI tools in their role',
        'Ongoing optimization as the business evolves',
      ],
      outcome: 'A business that runs smarter — with AI handling the work, not creating more of it.',
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-navy-deepest" id="aos-three-pillars">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-orange-cta mb-4">
            The three pillars
          </p>
          <h2 className="font-header font-bold text-3xl md:text-4xl lg:text-5xl text-white leading-tight mb-4">
            How the AI OS is built
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Three phases. Six months. A front-row seat to what AI looks like when it&apos;s applied
            correctly to your specific business.
          </p>
        </div>

        {/* Pillars */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {pillars.map((pillar) => (
            <div
              key={pillar.number}
              className="card-elevated-dark rounded-2xl p-8 flex flex-col"
              style={{ borderTop: `3px solid ${pillar.color}` }}
            >
              {/* Phase number */}
              <div className="flex items-center gap-3 mb-6">
                <span
                  className="text-sm font-bold tracking-widest"
                  style={{ color: pillar.color }}
                >
                  Phase {pillar.number}
                </span>
              </div>

              {/* Title */}
              <h3 className="font-header font-bold text-2xl text-white mb-1">{pillar.title}</h3>
              <p className="text-white/50 text-sm mb-6">{pillar.subtitle}</p>

              {/* Points */}
              <ul className="space-y-3 flex-1 mb-6">
                {pillar.points.map((point) => (
                  <li key={point} className="flex items-start gap-3 text-sm text-white/70">
                    <span className="mt-1 shrink-0 w-1.5 h-1.5 rounded-full" style={{ background: pillar.color }} />
                    {point}
                  </li>
                ))}
              </ul>

              {/* Outcome */}
              <div
                className="rounded-lg p-4 text-sm text-white/80 leading-relaxed italic"
                style={{ background: `${pillar.color}12`, border: `1px solid ${pillar.color}25` }}
              >
                {pillar.outcome}
              </div>
            </div>
          ))}
        </div>

        {/* Connector line */}
        <div className="mt-12 text-center">
          <p className="text-white/40 text-sm">
            Each phase builds on the last. The brain needs context before it can operate —
            skip that step and AI just automates the wrong things faster.
          </p>
        </div>
      </div>
    </section>
  );
}
