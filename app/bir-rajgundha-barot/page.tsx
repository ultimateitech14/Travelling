import BirItineraryPage from '@/components/BirItineraryPage';

export const metadata = {
  title: 'Bir · Rajgundha · Barot Expedition',
  description:
    'Three valleys, two nights, one tribe. Delhi to Bir, remote Rajgundha valley riverside camp, and Uhl river Barot in Force Urbania. 16 seats only.',
  openGraph: {
    title: 'Bir · Rajgundha · Barot Expedition — Being Traveller',
    description:
      'Three valleys, two nights, one tribe. Delhi to Bir, remote Rajgundha valley riverside camp, and Uhl river Barot in Force Urbania. 16 seats only.',
    url: '/bir-rajgundha-barot',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Bir · Rajgundha · Barot Expedition — Being Traveller',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bir · Rajgundha · Barot Expedition — Being Traveller',
    description:
      'Three valleys, two nights, one tribe. Delhi to Bir, remote Rajgundha valley riverside camp, and Uhl river Barot in Force Urbania. 16 seats only.',
    images: ['/og-image.png'],
  },
};

export default function BirTripPage() {
  return <BirItineraryPage />;
}
