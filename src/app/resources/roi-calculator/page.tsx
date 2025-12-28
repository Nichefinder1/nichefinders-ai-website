'use client';

import { useState } from 'react';
import Image from 'next/image';
import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';
import { CALENDAR_LINK } from '@/lib/constants';

export default function ROICalculatorPage() {
  const [monthlyLeads, setMonthlyLeads] = useState(100);
  const [conversionRate, setConversionRate] = useState(20);
  const [avgDealValue, setAvgDealValue] = useState(5000);
  const [responseTime, setResponseTime] = useState(4);

  // Calculate current metrics
  const currentConversions = (monthlyLeads * conversionRate) / 100;
  const currentRevenue = currentConversions * avgDealValue;
  const leadsLostToSlowResponse = monthlyLeads * 0.45; // Industry avg: 45% of leads lost to slow response

  // Calculate with AI automation
  const improvedConversionRate = conversionRate * 1.35; // 35% improvement
  const aiConversions = (monthlyLeads * improvedConversionRate) / 100;
  const aiRevenue = aiConversions * avgDealValue;
  const additionalRevenue = aiRevenue - currentRevenue;
  const annualIncrease = additionalRevenue * 12;

  // ROI calculation (assuming ~$5k-15k investment)
  const estimatedInvestment = 10000;
  const roi = ((annualIncrease - estimatedInvestment) / estimatedInvestment) * 100;

  return (
    <main>
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden hero-gradient pt-32 pb-20">
        {/* Animated Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-primary/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-navy-deep/30 rounded-full blur-3xl animate-pulse delay-1000" />
          <div className="absolute inset-0 opacity-10">
            <div
              className="w-full h-full"
              style={{
                backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                                 linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
                backgroundSize: '50px 50px',
              }}
            />
          </div>
        </div>

        {/* Content */}
        <Container size="lg" className="relative z-10 text-center">
          <div className="max-w-4xl mx-auto">
            <Badge variant="secondary" size="md" className="mb-6">
              ROI CALCULATOR
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
              Calculate Your AI Automation ROI
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 leading-relaxed max-w-3xl mx-auto">
              See exactly how much revenue you're leaving on the table without AI automation
            </p>
          </div>
        </Container>
      </section>

      {/* Calculator Section */}
      <Section background="white" padding>
        <Container size="lg">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left: Input Controls */}
            <div>
              <h2 className="text-3xl font-black text-navy-deep mb-8">
                Your Current Situation
              </h2>

              <div className="space-y-8">
                {/* Monthly Leads */}
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <label className="text-lg font-bold text-navy-deep">
                      Monthly Leads
                    </label>
                    <span className="text-2xl font-black text-cyan-primary">
                      {monthlyLeads}
                    </span>
                  </div>
                  <input
                    type="range"
                    min="10"
                    max="500"
                    step="10"
                    value={monthlyLeads}
                    onChange={(e) => setMonthlyLeads(Number(e.target.value))}
                    className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-cyan-primary"
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>10</span>
                    <span>500</span>
                  </div>
                </div>

                {/* Conversion Rate */}
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <label className="text-lg font-bold text-navy-deep">
                      Current Conversion Rate
                    </label>
                    <span className="text-2xl font-black text-cyan-primary">
                      {conversionRate}%
                    </span>
                  </div>
                  <input
                    type="range"
                    min="5"
                    max="50"
                    step="1"
                    value={conversionRate}
                    onChange={(e) => setConversionRate(Number(e.target.value))}
                    className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-cyan-primary"
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>5%</span>
                    <span>50%</span>
                  </div>
                </div>

                {/* Average Deal Value */}
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <label className="text-lg font-bold text-navy-deep">
                      Average Deal Value
                    </label>
                    <span className="text-2xl font-black text-cyan-primary">
                      ${avgDealValue.toLocaleString()}
                    </span>
                  </div>
                  <input
                    type="range"
                    min="500"
                    max="50000"
                    step="500"
                    value={avgDealValue}
                    onChange={(e) => setAvgDealValue(Number(e.target.value))}
                    className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-cyan-primary"
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>$500</span>
                    <span>$50,000</span>
                  </div>
                </div>

                {/* Response Time */}
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <label className="text-lg font-bold text-navy-deep">
                      Average Response Time (hours)
                    </label>
                    <span className="text-2xl font-black text-cyan-primary">
                      {responseTime}h
                    </span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="24"
                    step="1"
                    value={responseTime}
                    onChange={(e) => setResponseTime(Number(e.target.value))}
                    className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-cyan-primary"
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>1h</span>
                    <span>24h</span>
                  </div>
                </div>
              </div>

              <Card variant="elevated" className="mt-8 p-6 bg-red-50 border-l-4 border-red-500">
                <h3 className="font-bold text-red-900 mb-2">Current Problem</h3>
                <p className="text-red-800 text-sm">
                  You're losing approximately{' '}
                  <span className="font-black">
                    {leadsLostToSlowResponse.toFixed(0)} leads per month
                  </span>{' '}
                  due to slow response times. That's{' '}
                  <span className="font-black">
                    ${((leadsLostToSlowResponse * avgDealValue * conversionRate) / 100).toLocaleString()}
                  </span>{' '}
                  in potential monthly revenue.
                </p>
              </Card>
            </div>

            {/* Right: Results */}
            <div>
              <h2 className="text-3xl font-black text-navy-deep mb-8">
                Your AI-Powered Future
              </h2>

              <div className="space-y-6">
                {/* Current vs AI Comparison */}
                <Card variant="elevated" className="p-6 bg-white">
                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <div className="text-sm text-gray-600 mb-2">
                        Current Monthly Revenue
                      </div>
                      <div className="text-3xl font-black text-gray-700">
                        ${currentRevenue.toLocaleString()}
                      </div>
                      <div className="text-xs text-gray-500 mt-1">
                        {currentConversions.toFixed(1)} conversions/mo
                      </div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-600 mb-2">
                        With AI Automation
                      </div>
                      <div className="text-3xl font-black text-success">
                        ${aiRevenue.toLocaleString()}
                      </div>
                      <div className="text-xs text-success mt-1">
                        {aiConversions.toFixed(1)} conversions/mo
                      </div>
                    </div>
                  </div>
                </Card>

                {/* Monthly Increase */}
                <Card
                  variant="gradient-border"
                  className="p-6 bg-gradient-to-br from-cyan-50 to-blue-50"
                >
                  <div className="text-center">
                    <div className="text-sm text-gray-600 mb-2">
                      Additional Monthly Revenue
                    </div>
                    <div className="text-5xl font-black text-cyan-primary mb-2">
                      ${additionalRevenue.toLocaleString()}
                    </div>
                    <div className="text-sm text-gray-600">
                      That's ${annualIncrease.toLocaleString()} per year
                    </div>
                  </div>
                </Card>

                {/* ROI */}
                <Card variant="elevated" className="p-6 bg-navy-deep text-white">
                  <div className="text-center">
                    <div className="text-sm text-gray-300 mb-2">
                      First-Year ROI
                    </div>
                    <div className="text-6xl font-black mb-2">
                      {roi.toFixed(0)}%
                    </div>
                    <div className="text-sm text-gray-300">
                      Based on estimated ${estimatedInvestment.toLocaleString()}{' '}
                      investment
                    </div>
                  </div>
                </Card>

                {/* Key Benefits */}
                <div className="space-y-3">
                  {[
                    {
                      label: 'Response Time',
                      before: `${responseTime} hours`,
                      after: '< 60 seconds',
                    },
                    {
                      label: 'Lead Qualification',
                      before: 'Manual',
                      after: 'Automatic',
                    },
                    {
                      label: 'Follow-up Consistency',
                      before: 'Sporadic',
                      after: '100% Automated',
                    },
                    {
                      label: 'Calendar Booking',
                      before: 'Back-and-forth',
                      after: 'Instant',
                    },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                    >
                      <span className="text-sm font-semibold text-navy-deep">
                        {item.label}
                      </span>
                      <div className="flex items-center space-x-2">
                        <span className="text-xs text-gray-500 line-through">
                          {item.before}
                        </span>
                        <svg
                          className="w-4 h-4 text-cyan-primary"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M13 7l5 5m0 0l-5 5m5-5H6"
                          />
                        </svg>
                        <span className="text-sm font-bold text-success">
                          {item.after}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <Card
                  variant="elevated"
                  className="p-6 bg-gradient-to-br from-cyan-primary to-navy-deep text-white text-center"
                >
                  <h4 className="text-2xl font-black mb-3">
                    Ready to Capture This Revenue?
                  </h4>
                  <p className="text-white/90 mb-6">
                    Book a discovery call and we'll show you exactly how to
                    implement AI automation in your business.
                  </p>
                  <Button
                    href={CALENDAR_LINK}
                    variant="primary"
                    size="lg"
                    className="bg-white text-navy-deep hover:bg-gray-100 w-full"
                    external
                  >
                    Book Your Discovery Call
                  </Button>
                </Card>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* How We Calculate This */}
      <Section background="gray" padding>
        <Container size="lg">
          <div className="text-center mb-8">
            {/* Logo Badge */}
            <div className="flex justify-center mb-4">
              <div className="relative w-12 h-12 opacity-30">
                <Image
                  src="/logo.svg"
                  alt="NicheFinders AI"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
            <h2 className="text-4xl font-black text-navy-deep">
              How We Calculate This
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Industry Data',
                description:
                  '45% of leads go to competitors who respond first. Every hour of delay reduces conversion by 10%.',
              },
              {
                title: 'AI Performance',
                description:
                  'Our clients see 35% average conversion rate improvement with <60s response times and automated follow-up.',
              },
              {
                title: 'Conservative Estimates',
                description:
                  'These projections are based on lower-end results. Many clients exceed 50-100% conversion improvements.',
              },
            ].map((item, index) => (
              <Card key={index} variant="elevated" className="p-6 bg-white">
                <h3 className="text-xl font-bold text-navy-deep mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.description}</p>
              </Card>
            ))}
          </div>

          <Card variant="elevated" className="mt-12 p-8 bg-cyan-50 text-center">
            <h3 className="text-2xl font-black text-navy-deep mb-4">
              Important Disclaimer
            </h3>
            <p className="text-gray-700 max-w-3xl mx-auto">
              This calculator provides estimates based on industry averages and our
              client results. Actual results vary by industry, market, and
              implementation. During your discovery call, we'll provide a custom ROI
              projection specific to your business.
            </p>
          </Card>
        </Container>
      </Section>
    </main>
  );
}
