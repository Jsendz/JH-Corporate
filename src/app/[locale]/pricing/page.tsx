import {Hero} from '@/src/components/pricing/hero';
import {PricingTiers} from '@/src/components/pricing/pricing-tiers';
import {CTASection} from '@/src/components/cta-section';

import {routing} from '../../../i18n/routing';
import {hasLocale} from 'next-intl';
import {setRequestLocale} from 'next-intl/server';
import {notFound} from 'next/navigation';

export function generateStaticParams() {
  return routing.locales.map((locale) => ({locale}));
}

interface PricingPageProps {
  params: Promise<{locale: string}>;
  searchParams?: Promise<{[key: string]: string | string[] | undefined}>;
}

export default async function PricingPage({params}: PricingPageProps) {
  const {locale} = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  // Keep if using next-intl (recommended)
  setRequestLocale(locale);

  return (
    <>
      <Hero lang={locale} />
      <PricingTiers lang={locale} />
      <CTASection lang={locale} />
    </>
  );
}
