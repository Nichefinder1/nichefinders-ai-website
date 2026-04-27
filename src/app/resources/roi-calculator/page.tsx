'use client';

import { useState } from 'react';
import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';
import Button from '@/components/ui/Button';
import { CALENDAR_LINK } from '@/lib/constants';

export default function ROICalculatorPage() {
  const [monthlyLeads, setMonthlyLeads] = useState(100);
  const [conversionRate, setConversionRate] = useState(20);
  const [avgDealValue, setAvgDealValue] = useState(5000);
  const [responseTime, setResponseTime] = useState(4);

  const currentConversions = (monthlyLeads * conversionRate) / 100;
  const currentRevenue = currentConversions * avgDealValue;
  const leadsLostToSlowResponse = monthlyLeads * 0.45;

  const improvedConversionRate = conversionRate * 1.35;
  const aiConversions = (monthlyLeads * improvedConversionRate) / 100;
  const aiRevenue = aiConversions * avgDealValue;
  const additionalRevenue = aiRevenue - currentRevenue;
  const annualIncrease = additionalRevenue * 12;

  const estimatedInvestment = 10000;
  const roi = ((annualIncrease - estimatedInvestment) / estimatedInvestment) * 100;

  const sliderStyle = (value: number, min: number, max: number) => {
    const pct = ((value - min) / (max - min)) * 100;
    return {
      background: `linear-gradient(to right, #CC5500 ${pct}%, rgba(255,255,255,0.1) ${pct}%)`,
    };
  };

  return (
    <main style={{ background: 'linear-gradient(180deg, #001A3A 0%, #002855 45%, #001A3A 100%)' }}>

      {/* Hero */}
      <section className="relative pt-44 pb-20 overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)',
            backgroundSize: '50px 50px',
          }}
        />
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(circle at 50% 0%, rgba(0,85,164,0.22) 0%, transparent 55%)' }} />

        <Container size="lg" className="relative z-10 text-center">
          <div className="max-w-4xl mx-auto">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-orange-cta mb-6">
              Free Tool
            </p>
            <h1 className="font-header font-bold text-4xl md:text-5xl lg:text-[4rem] leading-[1.1] tracking-tight text-[#E8EDF2] mb-6">
              Calculate Your AI<br />Automation ROI
            </h1>
            <p className="text-white/60 text-xl leading-relaxed max-w-3xl mx-auto">
              See exactly how much revenue you're leaving on the table without AI automation. Takes 60 seconds.
            </p>
          </div>
        </Container>
      </section>

      {/* Calculator */}
      <Section background="navy-deepest" padding={false}>
        <Container size="lg" className="py-20 md:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

            {/* Left — Inputs */}
            <div>
              <h2 className="font-header font-bold text-2xl text-white mb-8">Your Current Situation</h2>

              <div className="space-y-8">
                {/* Monthly Leads */}
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <label className="text-sm font-semibold text-white/70">Monthly Leads</label>
                    <span className="font-header font-bold text-2xl text-orange-cta">{monthlyLeads}</span>
                  </div>
                  <input
                    type="range" min="10" max="500" step="10"
                    value={monthlyLeads}
                    onChange={(e) => setMonthlyLeads(Number(e.target.value))}
                    className="w-full h-2 rounded-full appearance-none cursor-pointer"
                    style={sliderStyle(monthlyLeads, 10, 500)}
                  />
                  <div className="flex justify-between text-xs text-white/30 mt-2">
                    <span>10</span><span>500</span>
                  </div>
                </div>

                {/* Conversion Rate */}
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <label className="text-sm font-semibold text-white/70">Current Conversion Rate</label>
                    <span className="font-header font-bold text-2xl text-orange-cta">{conversionRate}%</span>
                  </div>
                  <input
                    type="range" min="5" max="50" step="1"
                    value={conversionRate}
                    onChange={(e) => setConversionRate(Number(e.target.value))}
                    className="w-full h-2 rounded-full appearance-none cursor-pointer"
                    style={sliderStyle(conversionRate, 5, 50)}
                  />
                  <div className="flex justify-between text-xs text-white/30 mt-2">
                    <span>5%</span><span>50%</span>
                  </div>
                </div>

                {/* Average Deal Value */}
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <label className="text-sm font-semibold text-white/70">Average Deal Value</label>
                    <span className="font-header font-bold text-2xl text-orange-cta">${avgDealValue.toLocaleString()}</span>
                  </div>
                  <input
                    type="range" min="500" max="50000" step="500"
                    value={avgDealValue}
                    onChange={(e) => setAvgDealValue(Number(e.target.value))}
                    className="w-full h-2 rounded-full appearance-none cursor-pointer"
                    style={sliderStyle(avgDealValue, 500, 50000)}
                  />
                  <div className="flex justify-between text-xs text-white/30 mt-2">
                    <span>$500</span><span>$50,000</span>
                  </div>
                </div>

                {/* Response Time */}
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <label className="text-sm font-semibold text-white/70">Avg Response Time</label>
                    <span className="font-header font-bold text-2xl text-orange-cta">{responseTime}h</span>
                  </div>
                  <input
                    type="range" min="1" max="24" step="1"
                    value={responseTime}
                    onChange={(e) => setResponseTime(Number(e.target.value))}
                    className="w-full h-2 rounded-full appearance-none cursor-pointer"
                    style={sliderStyle(responseTime, 1, 24)}
                  />
                  <div className="flex justify-between text-xs text-white/30 mt-2">
                    <span>1h</span><span>24h</span>
                  </div>
                </div>
              </div>

              {/* Problem card */}
              <div
                className="mt-8 rounded-2xl p-6"
                style={{ background: 'rgba(239,68,68,0.08)', border: '1px solid rgba(239,68,68,0.2)' }}
              >
                <p className="text-xs font-semibold tracking-widest uppercase text-red-400/70 mb-3">Current Problem</p>
                <p className="text-white/60 text-sm leading-relaxed">
                  You're losing approximately{' '}
                  <span className="font-bold text-red-400">{leadsLostToSlowResponse.toFixed(0)} leads per month</span>{' '}
                  to slow response times. That's{' '}
                  <span className="font-bold text-red-400">
                    ${((leadsLostToSlowResponse * avgDealValue * conversionRate) / 100).toLocaleString()}
                  </span>{' '}
                  in potential monthly revenue walking out the door.
                </p>
              </div>
            </div>

            {/* Right — Results */}
            <div>
              <h2 className="font-header font-bold text-2xl text-white mb-8">Your AI-Powered Future</h2>

              <div className="space-y-5">

                {/* Current vs AI */}
                <div
                  className="card-elevated-dark rounded-2xl p-6"
                  style={{ boxShadow: '0 0 0 1px rgba(255,255,255,0.06)' }}
                >
                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <p className="text-xs text-white/30 uppercase tracking-widest mb-2">Current Monthly</p>
                      <p className="font-header font-bold text-2xl text-white/60">${currentRevenue.toLocaleString()}</p>
                      <p className="text-xs text-white/30 mt-1">{currentConversions.toFixed(1)} conversions/mo</p>
                    </div>
                    <div>
                      <p className="text-xs text-white/30 uppercase tracking-widest mb-2">With AI Automation</p>
                      <p className="font-header font-bold text-2xl text-orange-cta">${aiRevenue.toLocaleString()}</p>
                      <p className="text-xs text-orange-cta/60 mt-1">{aiConversions.toFixed(1)} conversions/mo</p>
                    </div>
                  </div>
                </div>

                {/* Additional Revenue */}
                <div
                  className="card-elevated-dark rounded-2xl p-6 text-center"
                  style={{ borderTop: '2px solid #CC5500', boxShadow: '0 0 0 1px rgba(255,255,255,0.06), 0 8px 32px rgba(204,85,0,0.1)' }}
                >
                  <p className="text-xs text-white/30 uppercase tracking-widest mb-2">Additional Monthly Revenue</p>
                  <p className="font-header font-bold text-5xl text-orange-cta mb-2">${additionalRevenue.toLocaleString()}</p>
                  <p className="text-sm text-white/40">That's <span className="text-white/60 font-semibold">${annualIncrease.toLocaleString()}</span> per year</p>
                </div>

                {/* ROI */}
                <div
                  className="card-elevated-dark rounded-2xl p-6 text-center"
                  style={{ background: 'rgba(204,85,0,0.08)', border: '1px solid rgba(204,85,0,0.2)' }}
                >
                  <p className="text-xs text-white/30 uppercase tracking-widest mb-2">First-Year ROI</p>
                  <p className="font-header font-bold text-6xl text-orange-cta mb-2">{roi.toFixed(0)}%</p>
                  <p className="text-xs text-white/30">Based on estimated ${estimatedInvestment.toLocaleString()} investment</p>
                </div>

                {/* Before/After */}
                <div className="space-y-2">
                  {[
                    { label: 'Response Time', before: `${responseTime} hours`, after: '< 60 seconds' },
                    { label: 'Lead Qualification', before: 'Manual', after: 'Automatic' },
                    { label: 'Follow-up', before: 'Sporadic', after: '100% Automated' },
                    { label: 'Calendar Booking', before: 'Back-and-forth', after: 'Instant' },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="flex items-center justify-between rounded-xl px-4 py-3"
                      style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.06)' }}
                    >
                      <span className="text-sm font-semibold text-white/50">{item.label}</span>
                      <div className="flex items-center gap-3">
                        <span className="text-xs text-white/30 line-through">{item.before}</span>
                        <svg className="w-4 h-4 text-orange-cta flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                        <span className="text-sm font-bold text-white">{item.after}</span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <div
                  className="rounded-2xl p-6 text-center"
                  style={{ background: 'linear-gradient(135deg, rgba(204,85,0,0.15) 0%, rgba(0,40,85,0.4) 100%)', border: '1px solid rgba(204,85,0,0.3)' }}
                >
                  <h4 className="font-header font-bold text-xl text-white mb-2">Ready to Capture This Revenue?</h4>
                  <p className="text-white/50 text-sm mb-5">Book a discovery call and we'll show you exactly how to implement these systems in your business.</p>
                  <Button href={CALENDAR_LINK} variant="primary" size="md" className="w-full shadow-cta-glow-lg">
                    Book Your Discovery Call
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* How We Calculate */}
      <Section background="navy-deepest" padding={false}>
        <Container size="lg" className="pb-20 md:pb-28">
          <h2 className="font-header font-bold text-2xl md:text-3xl text-white mb-8 text-center">How We Calculate This</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
            {[
              {
                title: 'Industry Data',
                body: '45% of leads go to competitors who respond first. Every hour of delay reduces conversion by 10%.',
                accent: '#CC5500',
              },
              {
                title: 'AI Performance',
                body: 'Our clients see 35% average conversion rate improvement with <60s response times and automated follow-up.',
                accent: '#3B82F6',
              },
              {
                title: 'Conservative Estimates',
                body: 'These projections use lower-end results. Many clients exceed 50–100% conversion improvements.',
                accent: '#10B981',
              },
            ].map((item, i) => (
              <div
                key={i}
                className="card-elevated-dark rounded-2xl p-6"
                style={{ borderTop: `2px solid ${item.accent}`, boxShadow: '0 0 0 1px rgba(255,255,255,0.06)' }}
              >
                <h3 className="font-header font-bold text-lg text-white mb-3">{item.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>

          <div
            className="rounded-2xl p-8 text-center"
            style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}
          >
            <p className="text-xs font-semibold tracking-widest uppercase text-white/30 mb-3">Disclaimer</p>
            <p className="text-white/40 text-sm leading-relaxed max-w-3xl mx-auto">
              This calculator provides estimates based on industry averages and our client results. Actual results vary by industry, market, and implementation. During your discovery call, we'll provide a custom ROI projection specific to your business.
            </p>
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <Section background="navy-deepest" padding={false} glow>
        <Container size="lg" className="py-28 md:py-36 pb-36 md:pb-44 text-center">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-orange-cta mb-4">Ready to Start</p>
          <h2 className="font-header font-bold text-3xl md:text-4xl lg:text-5xl text-white leading-tight mb-6">
            Stop Estimating. Start Growing.
          </h2>
          <p className="text-white/60 text-lg leading-relaxed max-w-2xl mx-auto mb-10">
            Book a discovery call and get a custom ROI projection built around your specific business, industry, and market.
          </p>
          <Button href={CALENDAR_LINK} variant="primary" size="lg" className="min-w-[240px] shadow-cta-glow-lg">
            Book Discovery Call
          </Button>
        </Container>
      </Section>

    </main>
  );
}
