import {Hero} from '@/src/components/company/hero';
import {CompanyTypes} from '@/src/components/company/company-types';
import {SetupProcess} from '@/src/components/company/setup-process';
import {LegalSupport} from '@/src/components/company/legal-support';
import {CTASection} from '@/src/components/cta-section';

import {routing} from '../../../i18n/routing';
import {hasLocale} from 'next-intl';
import {setRequestLocale} from 'next-intl/server';
import {notFound} from 'next/navigation';
import ProcessTimeline from '@/src/components/company/timeline';

export function generateStaticParams() {
  return routing.locales.map((locale) => ({locale}));
}

interface CompanyFormationPageProps {
  params: Promise<{locale: string}>;
  searchParams?: Promise<{[key: string]: string | string[] | undefined}>;
}

export default async function CompanyFormationPage({params}: CompanyFormationPageProps) {
  const {locale} = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  // Keep if you're using next-intl (recommended)
  setRequestLocale(locale);

  return (
    <>
      <Hero lang={locale} />
      <CompanyTypes lang={locale} />
      <ProcessTimeline />
      <LegalSupport lang={locale} />
      <CTASection lang={locale} />
    </>
  );
}
