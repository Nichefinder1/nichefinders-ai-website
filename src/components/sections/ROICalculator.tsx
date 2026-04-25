'use client';

import { useState } from 'react';
import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';
import Button from '@/components/ui/Button';
import { formatCurrency, calculateROI } from '@/lib/utils';
import { CALENDAR_LINK } from '@/lib/constants';

export default function ROICalculator() {
  const [monthlyLeads, setMonthlyLeads] = useState(100);
  const [avgDealValue, setAvgDealValue] = useState(2000);
  const [currentConversionRate, setCurrentConversionRate] = useState(20);

  const currentMonthlyRevenue = (monthlyLeads * currentConversionRate / 100) * avgDealValue;
  const improvedConversionRate = Math.min(currentConversionRate + 15, 50);
  const improvedMonthlyRevenue = (monthlyLeads * improvedConversionRate / 100) * avgDealValue;
  const monthlyGain = improvedMonthlyRevenue - currentMonthlyRevenue;
  const annualGain = monthlyGain * 12;
  const averageInvestment = 3000;
  const annualInvestment = averageInvestment * 12;
  const roi = calculateROI(annualInvestment, annualGain);

  return (
    <Section background="navy-deepest" padding={false} glow>
      <Container size="lg" className="py-20 md:py-28">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-orange-cta mb-4">
            Interactive Tool
          </p>
          <h2 className="font-header font-bold text-3xl md:text-4xl lg:text-5xl text-white leading-tight mb-6">
            Calculate Your AI ROI in 60 Seconds
          </h2>
          <p className="text-white/60 text-lg leading-relaxed">
            See exactly how much revenue you're leaving on the table without AI automation.
            Enter your numbers below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

          {/* Left — Inputs */}
          <div
            className="card-elevated-dark rounded-2xl p-8"
            style={{ borderTop: '2px solid rgba(255,255,255,0.08)', boxShadow: '0 0 0 1px rgba(255,255,255,0.06)' }}
          >
            <h3 className="font-header font-bold text-xl text-white mb-8">
              Your Current Metrics
            </h3>

            <div className="space-y-8">
              {/* Monthly Leads */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <label className="text-sm font-semibold text-white/60 uppercase tracking-widest">
                    Monthly Leads
                  </label>
                  <span className="font-header font-bold text-2xl text-orange-cta">{monthlyLeads}</span>
                </div>
                <input
                  type="range" min="10" max="1000" step="10"
                  value={monthlyLeads}
                  onChange={(e) => setMonthlyLeads(Number(e.target.value))}
                  className="w-full h-1.5 rounded-full appearance-none cursor-pointer accent-orange-cta"
                  style={{ background: `linear-gradient(to right, #CC5500 ${(monthlyLeads - 10) / 990 * 100}%, rgba(255,255,255,0.1) 0%)` }}
                />
                <div className="flex justify-between mt-2 text-xs text-white/25">
                  <span>10</span><span>1000+</span>
                </div>
              </div>

              {/* Average Deal Value */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <label className="text-sm font-semibold text-white/60 uppercase tracking-widest">
                    Avg Deal Value
                  </label>
                  <span className="font-header font-bold text-2xl text-orange-cta">{formatCurrency(avgDealValue)}</span>
                </div>
                <input
                  type="range" min="100" max="10000" step="100"
                  value={avgDealValue}
                  onChange={(e) => setAvgDealValue(Number(e.target.value))}
                  className="w-full h-1.5 rounded-full appearance-none cursor-pointer accent-orange-cta"
                  style={{ background: `linear-gradient(to right, #CC5500 ${(avgDealValue - 100) / 9900 * 100}%, rgba(255,255,255,0.1) 0%)` }}
                />
                <div className="flex justify-between mt-2 text-xs text-white/25">
                  <span>$100</span><span>$10,000+</span>
                </div>
              </div>

              {/* Current Conversion Rate */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <label className="text-sm font-semibold text-white/60 uppercase tracking-widest">
                    Conversion Rate
                  </label>
                  <span className="font-header font-bold text-2xl text-orange-cta">{currentConversionRate}%</span>
                </div>
                <input
                  type="range" min="5" max="50" step="1"
                  value={currentConversionRate}
                  onChange={(e) => setCurrentConversionRate(Number(e.target.value))}
                  className="w-full h-1.5 rounded-full appearance-none cursor-pointer accent-orange-cta"
                  style={{ background: `linear-gradient(to right, #CC5500 ${(currentConversionRate - 5) / 45 * 100}%, rgba(255,255,255,0.1) 0%)` }}
                />
                <div className="flex justify-between mt-2 text-xs text-white/25">
                  <span>5%</span><span>50%</span>
                </div>
              </div>
            </div>

            {/* Assumptions */}
            <div
              className="mt-8 p-4 rounded-xl"
              style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}
            >
              <p className="text-xs font-semibold tracking-widest uppercase text-white/30 mb-3">
                Conservative Assumptions
              </p>
              <ul className="space-y-1.5 text-sm text-white/40">
                <li className="flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-white/20 flex-shrink-0" />
                  15% conversion rate improvement
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-white/20 flex-shrink-0" />
                  {formatCurrency(averageInvestment)}/month average investment
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-white/20 flex-shrink-0" />
                  Based on actual client results
                </li>
              </ul>
            </div>
          </div>

          {/* Right — Results */}
          <div className="flex flex-col gap-4">

            {/* Current vs With AI */}
            <div
              className="card-elevated-dark rounded-2xl p-6"
              style={{ borderTop: '2px solid rgba(255,255,255,0.08)', boxShadow: '0 0 0 1px rgba(255,255,255,0.06)' }}
            >
              <h3 className="font-header font-bold text-lg text-white mb-5">Your Potential Results</h3>
              <div className="grid grid-cols-2 gap-3 mb-5">
                <div className="rounded-xl p-4 text-center" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}>
                  <p className="text-xs text-white/30 uppercase tracking-widest mb-1">Current</p>
                  <p className="font-header font-bold text-xl text-white/60">{formatCurrency(currentMonthlyRevenue)}</p>
                  <p className="text-xs text-white/20 mt-1">per month</p>
                </div>
                <div className="rounded-xl p-4 text-center" style={{ background: 'rgba(204,85,0,0.1)', border: '1.5px solid rgba(204,85,0,0.35)' }}>
                  <p className="text-xs text-orange-cta uppercase tracking-widest mb-1">With AI</p>
                  <p className="font-header font-bold text-xl text-orange-cta">{formatCurrency(improvedMonthlyRevenue)}</p>
                  <p className="text-xs text-white/30 mt-1">per month</p>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center justify-between rounded-xl p-4" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}>
                  <span className="text-sm text-white/50">Monthly Revenue Gain</span>
                  <span className="font-header font-bold text-lg text-white">+{formatCurrency(monthlyGain)}</span>
                </div>
                <div className="flex items-center justify-between rounded-xl p-4" style={{ background: 'rgba(204,85,0,0.08)', border: '1px solid rgba(204,85,0,0.2)' }}>
                  <span className="text-sm text-white/50">Annual Revenue Gain</span>
                  <span className="font-header font-bold text-lg text-orange-cta">+{formatCurrency(annualGain)}</span>
                </div>
                <div className="flex items-center justify-between rounded-xl p-4" style={{ background: 'rgba(204,85,0,0.12)', border: '1.5px solid rgba(204,85,0,0.3)' }}>
                  <span className="text-sm text-white/60 font-semibold">Return on Investment</span>
                  <div className="text-right">
                    <span className="font-header font-bold text-2xl text-orange-cta">{Math.round(roi * 100)}%</span>
                    <p className="text-xs text-white/30">{(roi).toFixed(1)}x return</p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA card */}
            <div
              className="rounded-2xl p-6 text-center"
              style={{ background: 'linear-gradient(135deg, #CC5500 0%, #a84400 100%)', boxShadow: '0 8px 32px rgba(204,85,0,0.3)' }}
            >
              <h4 className="font-header font-bold text-xl text-white mb-2">
                Ready to Capture This Revenue?
              </h4>
              <p className="text-white/80 text-sm mb-5">
                Book a discovery call and we'll show you exactly how to implement AI automation in your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button
                  href={CALENDAR_LINK}
                  external
                  variant="secondary"
                  size="lg"
                  className="flex-1 bg-white text-navy-deep hover:bg-gray-100 border-white"
                >
                  Book Discovery Call
                </Button>
                <Button
                  href="/resources/roi-calculator"
                  variant="secondary"
                  size="lg"
                  className="flex-1"
                >
                  Full Calculator
                </Button>
              </div>
            </div>

            {/* Disclaimer */}
            <p className="text-center text-xs text-white/25 leading-relaxed px-2">
              Conservative estimates based on average client results. Many clients see 2–5x higher returns.
              Actual results vary based on your specific business and implementation.
            </p>
          </div>
        </div>

      </Container>
    </Section>
  );
}
