import {Hero} from '@/src/components/contact/hero';
import {ContactForm} from '@/src/components/contact/contact-form';
import {ContactSidebar} from '@/src/components/contact/contact-sidebar';

import {routing} from '../../../i18n/routing';
import {hasLocale} from 'next-intl';
import {setRequestLocale} from 'next-intl/server';
import {notFound} from 'next/navigation';

export function generateStaticParams() {
  return routing.locales.map((locale) => ({locale}));
}

interface ContactPageProps {
  params: Promise<{locale: string}>;
  searchParams?: Promise<{[key: string]: string | string[] | undefined}>;
}

export default async function ContactPage({params}: ContactPageProps) {
  const {locale} = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  // Keep if you're using next-intl (recommended)
  setRequestLocale(locale);

  return (
    <>
      <Hero lang={locale} />
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <ContactForm lang={locale} />
          </div>
          <div className="lg:col-span-1">
            <ContactSidebar lang={locale} />
          </div>
        </div>
      </div>
    </>
  );
}
