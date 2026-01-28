'use client';

import { useState, useEffect } from 'react';
import Script from 'next/script';
import { cn } from '@/lib/utils';

const GA_MEASUREMENT_ID = 'G-72H0P1G7BM';

export default function CookieConsent() {
  const [consentStatus, setConsentStatus] = useState<'pending' | 'accepted' | 'rejected' | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem('cookie-consent');
    if (stored === 'accepted') {
      setConsentStatus('accepted');
    } else if (stored === 'rejected') {
      setConsentStatus('rejected');
    } else {
      setConsentStatus('pending');
      // Small delay for slide-up animation
      const timer = setTimeout(() => setIsVisible(true), 100);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    setConsentStatus('accepted');
    setIsVisible(false);
  };

  const handleReject = () => {
    localStorage.setItem('cookie-consent', 'rejected');
    setConsentStatus('rejected');
    setIsVisible(false);
  };

  // Don't render anything until we've checked localStorage
  if (consentStatus === null) {
    return null;
  }

  return (
    <>
      {/* Google Analytics - only loads when consent is accepted */}
      {consentStatus === 'accepted' && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
            strategy="afterInteractive"
          />
          <Script id="google-analytics" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_MEASUREMENT_ID}');
            `}
          </Script>
        </>
      )}

      {/* Cookie Consent Banner */}
      {consentStatus === 'pending' && (
        <div
          className={cn(
            'fixed bottom-0 left-0 right-0 z-50 bg-[#002855] text-white',
            'transform transition-all duration-300 ease-out',
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
          )}
        >
          <div className="container-custom py-4 md:py-5">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-sm md:text-base text-center sm:text-left">
                We use cookies to analyze site traffic and improve your experience.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
                <button
                  onClick={handleAccept}
                  className={cn(
                    'btn btn-primary',
                    'px-6 py-2.5 text-sm font-semibold',
                    'bg-[#0055A4] hover:bg-[#004080]',
                    'min-h-[44px] w-full sm:w-auto'
                  )}
                >
                  Accept All
                </button>
                <button
                  onClick={handleReject}
                  className={cn(
                    'btn',
                    'px-6 py-2.5 text-sm font-semibold',
                    'bg-transparent text-white',
                    'border-2 border-white/60 hover:border-white hover:bg-white/10',
                    'min-h-[44px] w-full sm:w-auto',
                    'transition-all duration-300'
                  )}
                >
                  Reject
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
