import type { Metadata } from 'next';
import { Cookie, Open_Sans } from 'next/font/google';
import Providers from './providers';
import 'react-lazy-load-image-component/src/effects/blur.css';
import 'swiper/css';
import 'swiper/css/pagination';
import './globals.css';

const openSans = Open_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '600', '700'],
  display: 'swap',
});

const cookie = Cookie({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-cookie',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Galeria | Davhy Andrade',
  description:
    'Galeria pessoal de momentos fotografados por Davhy Andrade, uma coleção que registra o cotidiano sob uma perspectiva pessoal.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={`${openSans.className} ${cookie.variable}`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
