'use client';

import { useState, useEffect } from 'react';
import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';
import { formatCurrency, calculateROI } from '@/lib/utils';
import { CALENDAR_LINK } from '@/lib/constants';

export default function ROICalculator() {
  const [monthlyLeads, setMonthlyLeads] = useState(100);
  const [avgDealValue, setAvgDealValue] = useState(2000);
  const [currentConversionRate, setCurrentConversionRate] = useState(20);

  // Calculate results
  const currentMonthlyRevenue = (monthlyLeads * currentConversionRate / 100) * avgDealValue;
  const improvedConversionRate = Math.min(currentConversionRate + 15, 50); // Conservative 15% improvement
  const improvedMonthlyRevenue = (monthlyLeads * improvedConversionRate / 100) * avgDealValue;
  const monthlyGain = improvedMonthlyRevenue - currentMonthlyRevenue;
  const annualGain = monthlyGain * 12;
  const averageInvestment = 3000; // Monthly average for AI automation
  const annualInvestment = averageInvestment * 12;
  const roi = calculateROI(annualInvestment, annualGain);

  return (
    <Section background="gray" padding>
      <Container size="lg">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block px-4 py-1.5 bg-cyan-primary/10 text-cyan-primary font-bold text-sm rounded-full mb-4">
            INTERACTIVE TOOL
          </span>
          <h2 className="text-4xl lg:text-5xl font-black text-navy-deep mb-6">
            Calculate Your AI ROI in 60 Seconds
          </h2>
          <p className="text-xl text-gray-600">
            See exactly how much revenue you're leaving on the table without AI
            automation. Enter your numbers below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left: Input Form */}
          <Card variant="elevated" className="p-8 bg-white">
            <h3 className="text-2xl font-black text-navy-deep mb-6">
              Your Current Metrics
            </h3>

            <div className="space-y-6">
              {/* Monthly Leads */}
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">
                  Monthly Leads
                </label>
                <input
                  type="range"
                  min="10"
                  max="1000"
                  step="10"
                  value={monthlyLeads}
                  onChange={(e) => setMonthlyLeads(Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-cyan-primary"
                />
                <div className="flex justify-between items-center mt-2">
                  <span className="text-sm text-gray-600">10</span>
                  <span className="text-2xl font-black text-cyan-primary">
                    {monthlyLeads}
                  </span>
                  <span className="text-sm text-gray-600">1000+</span>
                </div>
              </div>

              {/* Average Deal Value */}
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">
                  Average Deal Value
                </label>
                <input
                  type="range"
                  min="100"
                  max="10000"
                  step="100"
                  value={avgDealValue}
                  onChange={(e) => setAvgDealValue(Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-cyan-primary"
                />
                <div className="flex justify-between items-center mt-2">
                  <span className="text-sm text-gray-600">$100</span>
                  <span className="text-2xl font-black text-cyan-primary">
                    {formatCurrency(avgDealValue)}
                  </span>
                  <span className="text-sm text-gray-600">$10,000+</span>
                </div>
              </div>

              {/* Current Conversion Rate */}
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">
                  Current Conversion Rate
                </label>
                <input
                  type="range"
                  min="5"
                  max="50"
                  step="1"
                  value={currentConversionRate}
                  onChange={(e) => setCurrentConversionRate(Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-cyan-primary"
                />
                <div className="flex justify-between items-center mt-2">
                  <span className="text-sm text-gray-600">5%</span>
                  <span className="text-2xl font-black text-cyan-primary">
                    {currentConversionRate}%
                  </span>
                  <span className="text-sm text-gray-600">50%</span>
                </div>
              </div>
            </div>

            {/* Assumptions */}
            <div className="mt-8 p-4 bg-gray-50 rounded-lg">
              <h4 className="text-sm font-bold uppercase tracking-wide text-gray-500 mb-2">
                Conservative Assumptions:
              </h4>
              <ul className="space-y-1 text-sm text-gray-600">
                <li>• 15% conversion rate improvement</li>
                <li>• {formatCurrency(averageInvestment)}/month average investment</li>
                <li>• Based on actual client results</li>
              </ul>
            </div>
          </Card>

          {/* Right: Results */}
          <div className="space-y-6">
            {/* Current vs Improved */}
            <Card variant="gradient-border" className="p-8 bg-white">
              <h3 className="text-2xl font-black text-navy-deep mb-6">
                Your Potential Results
              </h3>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="p-4 bg-gray-50 rounded-lg">
                  <div className="text-sm text-gray-600 mb-1">Current</div>
                  <div className="text-2xl font-black text-gray-700">
                    {formatCurrency(currentMonthlyRevenue)}
                  </div>
                  <div className="text-xs text-gray-500">per month</div>
                </div>

                <div className="p-4 bg-gradient-to-br from-cyan-50 to-blue-50 rounded-lg border-2 border-cyan-primary">
                  <div className="text-sm text-cyan-primary mb-1">With AI</div>
                  <div className="text-2xl font-black text-cyan-primary">
                    {formatCurrency(improvedMonthlyRevenue)}
                  </div>
                  <div className="text-xs text-gray-600">per month</div>
                </div>
              </div>

              {/* Key Metrics */}
              <div className="space-y-4">
                <div className="p-6 bg-success/10 border-l-4 border-success rounded-lg">
                  <div className="text-sm text-gray-600 mb-1">
                    Monthly Revenue Gain
                  </div>
                  <div className="text-4xl font-black text-success">
                    +{formatCurrency(monthlyGain)}
                  </div>
                </div>

                <div className="p-6 bg-cyan-primary/10 border-l-4 border-cyan-primary rounded-lg">
                  <div className="text-sm text-gray-600 mb-1">
                    Annual Revenue Gain
                  </div>
                  <div className="text-4xl font-black text-cyan-primary">
                    +{formatCurrency(annualGain)}
                  </div>
                </div>

                <div className="p-6 bg-navy-deep text-white rounded-lg">
                  <div className="text-sm text-gray-300 mb-1">Return on Investment</div>
                  <div className="text-5xl font-black">
                    {Math.round(roi * 100)}%
                  </div>
                  <div className="text-sm text-gray-300 mt-2">
                    That's {(roi).toFixed(1)}x return on your investment
                  </div>
                </div>
              </div>
            </Card>

            {/* CTA */}
            <Card variant="elevated" className="p-6 bg-gradient-to-br from-cyan-primary to-navy-deep text-white text-center">
              <h4 className="text-2xl font-black mb-3">
                Ready to Capture This Revenue?
              </h4>
              <p className="text-white/90 mb-6">
                Book a discovery call and we'll show you exactly how to
                implement AI automation in your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button
                  href={CALENDAR_LINK}
                  external
                  variant="secondary"
                  size="lg"
                  className="flex-1 bg-white text-navy-deep hover:bg-gray-100"
                >
                  Book Discovery Call
                </Button>
                <Button
                  href="/resources/roi-calculator"
                  variant="ghost"
                  size="lg"
                  className="flex-1 border-2 border-white/30 hover:bg-white/10"
                >
                  Full Calculator
                </Button>
              </div>
            </Card>
          </div>
        </div>

        {/* Bottom Note */}
        <div className="mt-12 text-center max-w-2xl mx-auto">
          <p className="text-gray-600">
            <strong>Note:</strong> These are conservative estimates based on
            average client results. Many clients see 2-5x higher returns. Your
            actual results will vary based on your specific business and
            implementation.
          </p>
        </div>
      </Container>
    </Section>
  );
}
