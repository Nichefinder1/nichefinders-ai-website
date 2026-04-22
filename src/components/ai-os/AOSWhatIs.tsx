export default function AOSWhatIs() {
  return (
    <section className="py-20 md:py-28 bg-navy-medium" id="aos-what-is">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: copy */}
          <div>
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-orange-cta mb-4">
              What is the AI OS?
            </p>
            <h2 className="font-header font-bold text-3xl md:text-4xl text-white leading-tight mb-6" style={{ textWrap: 'balance' }}>
              An intelligent brain installed
              <span className="block mt-3 text-white/60">inside your business.</span>
            </h2>
            <div className="space-y-4 text-white/70 leading-relaxed">
              <p>
                The Nichefinders AI OS is not a software product. It&apos;s not a chatbot or a dashboard.
                It&apos;s an intelligence layer — installed directly into how your business operates across
                15 interconnected areas.
              </p>
              <p>
                The brain learns your operation: every system, every gap, every connection. Once it&apos;s
                inside, it surfaces what needs to change, drives your automations, and guides your structure
                from the inside out.
              </p>
              <p>
                You&apos;re not hiring consultants to reorganize you. You&apos;re installing intelligence
                that makes your business self-aware — and then acts on what it knows.
              </p>
            </div>

            {/* Phases summary */}
            <div className="mt-8 space-y-3">
              {[
                { phase: '01', label: 'Architecture', desc: 'Install the brain\'s context layer — map how the business thinks' },
                { phase: '02', label: 'Installation', desc: 'Build what the brain needs to operate inside your systems' },
                { phase: '03', label: 'Operation', desc: 'Let the brain drive — automations, reporting, and AI running live' },
              ].map(({ phase, label, desc }) => (
                <div key={phase} className="flex items-start gap-4">
                  <div
                    className="w-10 h-10 rounded flex items-center justify-center text-xs font-bold tracking-wider shrink-0 mt-0.5"
                    style={{ background: 'rgba(204,85,0,0.15)', border: '1px solid rgba(204,85,0,0.3)', color: '#CC5500' }}
                  >
                    {phase}
                  </div>
                  <div>
                    <p className="font-semibold text-white text-sm">{label}</p>
                    <p className="text-white/60 text-sm">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: visual callout */}
          <div
            className="rounded-2xl p-8 md:p-10"
            style={{ background: 'rgba(0,26,58,0.6)', border: '1px solid rgba(255,255,255,0.08)' }}
          >
            <p className="font-header text-sm font-semibold tracking-widest uppercase text-white/50 mb-6">
              The Core Principle
            </p>
            <blockquote className="font-header font-bold text-2xl md:text-3xl text-white leading-snug mb-6">
              &ldquo;Install the brain first.
              <br />
              <span className="text-orange-cta">Let it drive.&rdquo;</span>
            </blockquote>
            <p className="text-white/60 leading-relaxed text-sm mb-8">
              Every AI tool we deploy — scheduling optimization, lead follow-up, reputation management,
              financial forecasting — is driven by the intelligence layer we install inside your operation.
              That intelligence is the AI OS.
            </p>

            {/* Mini stats */}
            <div className="grid grid-cols-3 gap-4 border-t border-white/8 pt-6">
              {[
                { value: '15', label: 'Business Areas' },
                { value: '6 mo', label: 'Engagement' },
                { value: '1:1', label: 'Direct Access' },
              ].map(({ value, label }) => (
                <div key={label} className="text-center">
                  <p className="font-header font-black text-2xl text-orange-cta">{value}</p>
                  <p className="text-white/50 text-xs mt-1">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
