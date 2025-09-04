import {Hero} from '@/src/components/services/hero';

import {CTASection} from '@/src/components/cta-section';

import {routing} from "../../../i18n/routing";
import {hasLocale} from 'next-intl';
import {setRequestLocale} from 'next-intl/server';
import {notFound} from 'next/navigation';
import ServiceGridComponent from '@/src/components/services/services-grid';


export function generateStaticParams() {
  return routing.locales.map((locale) => ({locale}));
}

interface ServicesPageProps {
  params: Promise<{locale: string}>;
  searchParams?: Promise<{[key: string]: string | string[] | undefined}>;
}

export default async function ServicesPage({params}: ServicesPageProps) {
  const {locale} = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  // Enable static rendering with next-intl
  setRequestLocale(locale);

  return (
    <>
      <Hero lang={locale} />
      <ServiceGridComponent  />
      <CTASection  />
    </>
  );
}
