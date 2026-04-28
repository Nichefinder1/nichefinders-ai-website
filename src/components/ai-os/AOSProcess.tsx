export default function AOSProcess() {
  const steps = [
    {
      step: '1',
      title: 'Discovery Call',
      description:
        'We spend 45–60 minutes mapping your current operation — what\'s working, what\'s broken, and where AI would actually move the needle. No sales pitch. Just diagnosis.',
      timeframe: 'Week 1',
    },
    {
      step: '2',
      title: 'AI OS Audit',
      description:
        'We run your business through all 15 cluster areas and score each one: structured, partial, or chaos. You see exactly where you stand before we start building anything.',
      timeframe: 'Weeks 1–2',
    },
    {
      step: '3',
      title: 'Roadmap Delivery',
      description:
        'You receive a custom 12-month AI OS roadmap — phased by priority, with each system mapped to a business outcome. This is the plan we execute together.',
      timeframe: 'Week 2',
    },
    {
      step: '4',
      title: 'Weekly Build Sessions',
      description:
        'We meet weekly for 90-minute working sessions. No hand-off to account managers. You work directly with the team building your systems. Progress every single week.',
      timeframe: 'Months 1–6',
    },
    {
      step: '5',
      title: 'System Deployment',
      description:
        'As each area gets structured, we deploy the corresponding AI layer. Scheduling optimization, lead automation, reputation tools, financial dashboards — built and live.',
      timeframe: 'Months 2–6',
    },
    {
      step: '6',
      title: 'Team Training & Handoff',
      description:
        'Your team gets trained on every system we build. Six months builds the foundation. What comes next is up to you.',
      timeframe: 'Month 6',
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-navy-medium" id="aos-process">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-orange-cta mb-4">
            How it works
          </p>
          <h2 className="font-header font-bold text-3xl md:text-4xl lg:text-5xl text-white leading-tight mb-4">
            Six months. No hand-offs.
            <br />
            <span className="text-white/60">Direct access, real progress.</span>
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            The AI OS Partner Program is a high-touch, hands-on engagement. We work alongside you —
            not in a ticket queue.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((item) => (
            <div
              key={item.step}
              className="card-elevated-dark rounded-xl p-6 relative overflow-hidden"
            >
              {/* Step number (large, watermark style) */}
              <div
                className="absolute top-3 right-4 font-header font-black text-6xl leading-none select-none pointer-events-none"
                style={{ color: 'rgba(204,85,0,0.08)' }}
                aria-hidden="true"
              >
                {item.step}
              </div>

              {/* Timeframe badge */}
              <span
                className="inline-block text-[0.65rem] font-semibold tracking-widest uppercase px-2 py-0.5 rounded mb-4"
                style={{ background: 'rgba(204,85,0,0.12)', color: '#CC5500', border: '1px solid rgba(204,85,0,0.25)' }}
              >
                {item.timeframe}
              </span>

              <h3 className="font-header font-semibold text-white text-lg mb-2">{item.title}</h3>
              <p className="text-white/60 text-sm leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>

        {/* Tagline */}
        <div className="mt-12 text-center">
          <p className="font-header text-xl md:text-2xl text-white/80 uppercase tracking-wide">
            We install the intelligence first.{' '}
            <span className="text-orange-cta">It handles the rest.</span>
          </p>
        </div>
      </div>
    </section>
  );
}
