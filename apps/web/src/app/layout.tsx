import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import localFont from 'next/font/local';

import '~/styles/global.css';
import '@terrazone/ui/styles.css';
import { classNames } from '@terrazone/utils';

const Aeonik = localFont({
  src: [
    {
      path: '../../public/fonts/AeonikPro-Light.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/AeonikPro-LightItalic.woff2',
      weight: '400',
      style: 'italic',
    },
    {
      path: '../../public/fonts/AeonikPro-Regular.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../public/fonts/AeonikPro-RegularItalic.woff2',
      weight: '500',
      style: 'italic',
    },
    {
      path: '../../public/fonts/AeonikPro-Medium.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../../public/fonts/AeonikPro-MediumItalic.woff2',
      weight: '600',
      style: 'italic',
    },
    {
      path: '../../public/fonts/AeonikPro-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../../public/fonts/AeonikPro-BoldItalic.woff2',
      weight: '700',
      style: 'italic',
    },
  ],
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: 'Terrazone',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={classNames('text-white font-sans', Aeonik.variable)}
    >
      <body>{children}</body>
    </html>
  );
}
