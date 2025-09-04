import {Hero} from '@/src/components/home/hero';
import {WhyAndorra} from '@/src/components/home/why-andorra';

import {TestimonialsCarousel} from '@/src/components/home/testimonials-carousel';
import {CTASection} from '@/src/components/cta-section';
import HeroSection from '@/src/components/home/heroSection';


import {routing} from '../../i18n/routing';
import {hasLocale} from 'next-intl';
import {setRequestLocale} from 'next-intl/server';
import {notFound} from 'next/navigation';
import ServicesSnapshot from '@/src/components/home/services-snapshot';


export function generateStaticParams() {
return routing.locales.map((locale) => ({locale}));
}


interface HomePageProps {
params: Promise<{locale: string}>;
searchParams?: Promise<{[key: string]: string | string[] | undefined}>;
}


export default async function HomePage({params}: HomePageProps) {
const {locale} = await params;


if (!hasLocale(routing.locales, locale)) {
notFound();
}


setRequestLocale(locale);


return (
<>
<HeroSection />
<WhyAndorra lang={locale} />
<ServicesSnapshot  />
<TestimonialsCarousel lang={locale} />
<CTASection lang={locale} />
</>
);
}