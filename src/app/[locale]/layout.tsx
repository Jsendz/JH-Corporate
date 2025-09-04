import '../globals.css';
import type {Metadata} from 'next';
import {Hedvig_Letters_Serif} from 'next/font/google';
import {Navigation} from '@/src/components/navigation';
import {StickyCTA} from '@/src/components/sticky-cta';
import {Footer} from '@/src/components/footer';

import {routing} from '../../i18n/routing';
import {hasLocale, NextIntlClientProvider} from 'next-intl';
import {setRequestLocale} from 'next-intl/server';
import {notFound} from 'next/navigation';

const hedvigLettersSerif = Hedvig_Letters_Serif({
  subsets: ['latin'],
  weight: '400',
  display: 'swap',
  variable: '--font-hedvig-letters-serif'
});

export function generateStaticParams() {
  return routing.locales.map((locale) => ({locale}));
}

export const metadata: Metadata = {
  title: 'Andorra Relocation & Company Formation | Expert Advisory Services',
  description:
    'Professional relocation and company formation services in Andorra. Expert guidance for residency permits, tax optimization, and business setup.',
  keywords:
    'Andorra, relocation, company formation, residency permits, tax optimization'
};

export default async function RootLayout({
  children,
  params
}: {
  children: React.ReactNode;
  // Next.js 15 passes params as a Promise in layouts
  params: Promise<{locale: string}>;
}) {
  const {locale} = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  // Only keep if you're using next-intl (recommended)
  setRequestLocale(locale);

  return (
    <html lang={locale} className={hedvigLettersSerif.variable}>
      <body className={hedvigLettersSerif.className}>
        <NextIntlClientProvider locale={locale} >
        <Navigation lang={locale} />
        <main className="min-h-screen">{children}</main>
        <StickyCTA lang={locale} />
        <Footer lang={locale} />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
