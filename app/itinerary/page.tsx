import BirItineraryPage from '@/components/BirItineraryPage';

export const metadata = {
  title: 'Itinerary — Bir · Rajgundha · Barot Expedition',
  description:
    'Three valleys, two nights, one tribe. Complete day-by-day expedition itinerary with Being Traveller.',
  openGraph: {
    title: 'Expedition Itinerary — Being Traveller',
    description:
      'Three valleys, two nights, one tribe. Complete day-by-day expedition itinerary with Being Traveller.',
    url: '/itinerary',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Being Traveller Expedition Itinerary',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Expedition Itinerary — Being Traveller',
    description:
      'Three valleys, two nights, one tribe. Complete day-by-day expedition itinerary with Being Traveller.',
    images: ['/og-image.png'],
  },
};

export default function ItineraryPage() {
  return <BirItineraryPage />;
}
