import {defineRouting} from 'next-intl/routing';


export const routing = defineRouting({
locales: ['en', 'es', 'fr', 'ca'],
defaultLocale: 'en'
// Optional: localePrefix: 'as-needed' | 'always'
});