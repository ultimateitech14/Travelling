import type { Metadata } from 'next';
import { Cormorant_Garamond, DM_Mono, Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CustomCursor from '@/components/CustomCursor';

const cormorant = Cormorant_Garamond({
  weight: ['300', '400', '500', '600'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: '--font-cormorant',
  display: 'swap',
});

const dmMono = DM_Mono({
  weight: ['300', '400', '500'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: '--font-dm-mono',
  display: 'swap',
});

const inter = Inter({
  weight: ['300', '400', '500'],
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://beingtraveller.in';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Being Traveller — Travel That Never Makes the Brochure',
    template: '%s | Being Traveller',
  },
  description:
    'Being Traveller curates invite-only expeditions across remote India. 16 curated seats, luxury Force Urbania travel, unmapped routes, and zero generic itineraries.',
  applicationName: 'Being Traveller',
  keywords: [
    'Being Traveller',
    'remote India expeditions',
    'Bir Billing trip',
    'Rajgundha valley trek',
    'Barot valley',
    'Himachal luxury expedition',
    'Force Urbania road trips',
    'curated travel cohort India',
    'offbeat travel experiences',
  ],
  authors: [{ name: 'Being Traveller', url: siteUrl }],
  creator: 'Being Traveller',
  publisher: 'Being Traveller',
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon.png', type: 'image/png', sizes: '32x32' },
      { url: '/icon-512x512.png', type: 'image/png', sizes: '512x512' },
    ],
    shortcut: '/favicon.ico',
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  openGraph: {
    title: 'Being Traveller — Travel That Never Makes the Brochure',
    description:
      'Curated invite-only expeditions across remote India. 16 seats, Force Urbania luxury travel, unmapped routes, and zero generic itineraries.',
    url: '/',
    siteName: 'Being Traveller',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Being Traveller — Travel That Never Makes the Brochure',
        type: 'image/png',
      },
      {
        url: '/og-square.png',
        width: 800,
        height: 800,
        alt: 'Being Traveller Official Logo',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Being Traveller — Travel That Never Makes the Brochure',
    description:
      'Curated invite-only expeditions across remote India. 16 seats, Force Urbania luxury travel, unmapped routes, and zero generic itineraries.',
    creator: '@beingtraveller._',
    images: ['/og-image.png'],
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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${dmMono.variable} ${inter.variable} scroll-smooth`}
    >
      <body className="bg-obsidian text-ivory antialiased selection:bg-gold selection:text-obsidian min-h-screen flex flex-col font-sans">
        <div className="noise-overlay" />
        <CustomCursor />
        <Navbar />
        <main className="flex-1 w-full">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
