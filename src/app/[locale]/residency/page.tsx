import {Hero} from '@/src/components/residency/hero';
import {ResidencyTypes} from '@/src/components/residency/residency-types';
import {StepByStepProcess} from '@/src/components/residency/step-by-step-process';
import {FAQ} from '@/src/components/residency/faq';
import {CTASection} from '@/src/components/cta-section';

import {routing} from '../../../i18n/routing';
import {hasLocale} from 'next-intl';
import {setRequestLocale} from 'next-intl/server';
import {notFound} from 'next/navigation';

export function generateStaticParams() {
  return routing.locales.map((locale) => ({locale}));
}

interface ResidencyPageProps {
  params: Promise<{locale: string}>;
  searchParams?: Promise<{[key: string]: string | string[] | undefined}>;
}

export default async function ResidencyPage({params}: ResidencyPageProps) {
  const {locale} = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  // Keep if you're using next-intl; remove if not.
  setRequestLocale(locale);

  return (
    <>
      <Hero lang={locale} />
      <ResidencyTypes lang={locale} />
      <StepByStepProcess lang={locale} />
      <FAQ lang={locale} />
      <CTASection lang={locale} />
    </>
  );
}
