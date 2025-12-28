'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';
import Button from '@/components/ui/Button';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function ProblemAgitation() {
  const sectionRef = useRef<HTMLElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const left = leftRef.current;
    const right = rightRef.current;

    if (!section || !left || !right) return;

    // Split-screen reveal animation
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: 'top center',
        end: 'center center',
        scrub: 1,
      },
    });

    // Slide in from sides
    tl.from(left, {
      x: -100,
      opacity: 0,
      duration: 1,
    }).from(
      right,
      {
        x: 100,
        opacity: 0,
        duration: 1,
      },
      '<'
    );

    // Animate list items on scroll
    const problemItems = left.querySelectorAll('.problem-item');
    const solutionItems = right.querySelectorAll('.solution-item');

    gsap.from(problemItems, {
      x: -30,
      opacity: 0,
      stagger: 0.1,
      duration: 0.6,
      scrollTrigger: {
        trigger: left,
        start: 'top 75%',
      },
    });

    gsap.from(solutionItems, {
      x: 30,
      opacity: 0,
      stagger: 0.1,
      duration: 0.6,
      scrollTrigger: {
        trigger: right,
        start: 'top 75%',
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const problems = [
    {
      icon: '',
      title: 'Missed Opportunities',
      description:
        '78% of leads never get a response. Every unanswered call is money left on the table.',
    },
    {
      icon: '',
      title: 'Manual Follow-Up Hell',
      description:
        'Your team spends hours doing repetitive tasks instead of closing high-value deals.',
    },
    {
      icon: '',
      title: 'Inconsistent Customer Experience',
      description:
        'Response times vary wildly. Some customers wait days while others get instant replies.',
    },
    {
      icon: '',
      title: 'Revenue Leaking Everywhere',
      description:
        'Without automation, you are bleeding money on wasted time, lost leads, and inefficiency.',
    },
  ];

  const solutions = [
    {
      icon: '',
      title: 'Instant Lead Capture',
      description:
        'AI responds within 60 seconds, 24/7. Never lose a hot lead to slow response times again.',
    },
    {
      icon: '',
      title: 'Automated Follow-Up',
      description:
        'Smart sequences nurture every lead with personalized messages—no manual work required.',
    },
    {
      icon: '',
      title: 'Consistent Excellence',
      description:
        'Every customer gets VIP treatment with instant, accurate responses at any hour.',
    },
    {
      icon: '',
      title: '400% ROI on Average',
      description:
        'Our clients see massive returns by automating what used to take hours of manual labor.',
    },
  ];

  return (
    <Section ref={sectionRef} background="white" padding>
      <Container size="xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 lg:gap-16 min-h-[600px]">
          {/* Left Side - Problems */}
          <div
            ref={leftRef}
            className="relative p-8 lg:p-12 rounded-2xl bg-gradient-to-br from-red-50 to-orange-50 border-l-4 border-alert"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-alert to-orange-500" />

            <div className="mb-8">
              <span className="inline-block px-4 py-1.5 bg-alert/10 text-alert font-bold text-sm rounded-full mb-4">
                THE PROBLEM
              </span>
              <h2 className="text-3xl lg:text-4xl font-black text-navy-deep mb-4">
                Your Business Is Hemorrhaging Money
              </h2>
              <p className="text-lg text-gray-700">
                While you're busy running your business, opportunities slip
                through the cracks every single day.
              </p>
            </div>

            <div className="space-y-6">
              {problems.map((problem, index) => (
                <div
                  key={index}
                  className="problem-item flex items-start space-x-4 p-4 bg-white rounded-lg shadow-sm"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-alert/10 rounded-full flex items-center justify-center text-2xl">
                    {problem.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-navy-deep mb-1">
                      {problem.title}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {problem.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 p-6 bg-alert/5 border border-alert/20 rounded-lg">
              <p className="text-sm font-semibold text-gray-700 text-center">
                Sound familiar? You're not alone. But there's a better way...
              </p>
            </div>
          </div>

          {/* Right Side - Solutions */}
          <div
            ref={rightRef}
            className="relative p-8 lg:p-12 rounded-2xl bg-gradient-to-br from-cyan-50 to-blue-50 border-l-4 border-cyan-primary mt-8 lg:mt-0"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-primary to-navy-deep" />

            <div className="mb-8">
              <span className="inline-block px-4 py-1.5 bg-cyan-primary/10 text-cyan-primary font-bold text-sm rounded-full mb-4">
                THE SOLUTION
              </span>
              <h2 className="text-3xl lg:text-4xl font-black text-navy-deep mb-4">
                AI Automation That Actually Delivers
              </h2>
              <p className="text-lg text-gray-700">
                Our 6-Stage System transforms your entire customer journey into
                a revenue-generating machine.
              </p>
            </div>

            <div className="space-y-6">
              {solutions.map((solution, index) => (
                <div
                  key={index}
                  className="solution-item flex items-start space-x-4 p-4 bg-white rounded-lg shadow-sm"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-cyan-primary/10 rounded-full flex items-center justify-center text-2xl">
                    {solution.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-navy-deep mb-1">
                      {solution.title}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {solution.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <Button
                href="/6-stage-system"
                variant="primary"
                size="lg"
                className="w-full justify-center"
              >
                See How Our 6-Stage System Works
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
