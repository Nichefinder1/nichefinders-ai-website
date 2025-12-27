import type { Metadata } from 'next';
import { Poppins, Inter, Space_Mono } from 'next/font/google';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import FloatingActionButton from '@/components/layout/FloatingActionButton';
import ScrollProgress from '@/components/layout/ScrollProgress';
import SmoothScroll from '@/components/SmoothScroll';
import '@/styles/globals.css';

const poppins = Poppins({
  weight: ['400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
  variable: '--font-poppins',
  display: 'swap',
});

const inter = Inter({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const spaceMono = Space_Mono({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-space-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://nichefinders.ai'),
  title: {
    default: 'NicheFinders AI | Florida\'s #1 AI Automation Agency',
    template: '%s | NicheFinders AI',
  },
  description:
    'Transform your Florida business with AI automation that actually works. Proven 6-Stage System delivering 400% average ROI for home services, automotive, nonprofits, and professional services.',
  keywords: [
    'AI automation',
    'business automation',
    'Florida AI agency',
    'automated lead generation',
    'AI consulting',
    'business process automation',
    'AI for small business',
  ],
  authors: [{ name: 'NicheFinders AI' }],
  creator: 'NicheFinders AI',
  publisher: 'NicheFinders AI',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://nichefinders.ai',
    siteName: 'NicheFinders AI',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'NicheFinders AI - Transform Your Business with AI',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@nichefinders',
    creator: '@nichefinders',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
    // Add other verification codes as needed
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${inter.variable} ${spaceMono.variable}`}
    >
      <head>
        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

        {/* Schema.org markup for Google */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'NicheFinders AI',
              url: 'https://nichefinders.ai',
              logo: 'https://nichefinders.ai/logo.png',
              description:
                'Florida\'s premier AI automation agency specializing in custom AI solutions for home services, automotive, nonprofits, and professional services.',
              address: {
                '@type': 'PostalAddress',
                addressRegion: 'Florida',
                addressCountry: 'US',
              },
              sameAs: [
                'https://www.linkedin.com/company/nichefinders-ai',
                'https://twitter.com/nichefinders',
                'https://www.facebook.com/nichefinders',
              ],
              contactPoint: {
                '@type': 'ContactPoint',
                contactType: 'Sales',
                availableLanguage: 'English',
              },
            }),
          }}
        />
      </head>
      <body className="font-body antialiased">
        {/* Smooth Scrolling */}
        <SmoothScroll />

        {/* Scroll Progress Bar */}
        <ScrollProgress />

        {/* Header Navigation */}
        <Header />

        {/* Main Content */}
        {children}

        {/* Footer */}
        <Footer />

        {/* Floating Action Button */}
        <FloatingActionButton />
      </body>
    </html>
  );
}
