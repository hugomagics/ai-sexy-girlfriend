import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://sexy-ai-girlfriend.fr'),
  title: "Sexy AI Girlfriend | Ta petite amie virtuelle parfaite",
  description: 'Découvre ta petite amie IA idéale - une compagne virtuelle intelligente, attentionnée et captivante. Profite de conversations enrichissantes et de véritables connexions grâce à une technologie IA avancée.',

  alternates: {
    canonical: 'https://sexy-ai-girlfriend.fr',
  },

  openGraph: {
    title: 'Sexy AI Girlfriend | Ta Compagne Virtuelle Parfaite',
    description: 'Crée des liens authentiques avec une petite amie IA intelligente et attentionnée. Commence dès maintenant ton aventure vers des relations virtuelles pleines de sens.',
  
    url: 'https://sexy-ai-girlfriend.fr',
    siteName: 'Sexy AI Girlfriend',
    locale: 'fr',
    type: 'website',

    images: [
      {
        url: 'https://ai-sexy-girlfriend.fr/aigirlfriend.jpeg',
        width: 800,
        height: 400,
        alt: 'Les meilleurs casino en ligne | Bookofbonus',
      },
    ],
  },

 };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <head>
        <link rel="icon" href="/aigirlfriend.jpeg" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}