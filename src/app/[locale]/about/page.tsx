import {Hero} from '@/src/components/about/hero';
import {Mission} from '@/src/components/about/mission';
import {TeamBios} from '@/src/components/about/team-bios';
import {ProcessTimeline} from '@/src/components/about/process-timeline';
import {TestimonialsCarousel} from '@/src/components/home/testimonials-carousel';
import {CTASection} from '@/src/components/cta-section';

import {routing} from '../../../i18n/routing';
import {hasLocale} from 'next-intl';
import {setRequestLocale} from 'next-intl/server';
import {notFound} from 'next/navigation';

export function generateStaticParams() {
  return routing.locales.map((locale) => ({locale}));
}

interface AboutPageProps {
  params: Promise<{locale: string}>;
  searchParams?: Promise<{[key: string]: string | string[] | undefined}>;
}

export default async function AboutPage({params}: AboutPageProps) {
  const {locale} = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  // Keep if you're using next-intl (recommended)
  setRequestLocale(locale);

  return (
    <>
      <Hero />
      <Mission  />
      <ProcessTimeline lang={locale} />
      <TestimonialsCarousel lang={locale} />
      <CTASection  />
    </>
  );
}
