'use client';

import {useState, useMemo} from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {Menu, X} from 'lucide-react';
import {useTranslations} from 'next-intl';
import LocaleSwitcher from './language-switcher';

interface NavigationProps {
  lang: string;
}

export function Navigation({lang}: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false);
  const tNav = useTranslations('nav');
  const tCta = useTranslations('cta');

  // If your route slugs are not localized, keep these.
  // If you WANT localized slugs later, map them by locale here.
  const navItems = useMemo(
    () => [
      {href: `/${lang}/residency`, label: tNav('residency')},
      {href: `/${lang}/company-formation`, label: tNav('company')},
      {href: `/${lang}/services`, label: tNav('services')},
      {href: `/${lang}/about`, label: tNav('about')},
      
    ],
    [lang, tNav]
  );

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Brand */}
          <div className="flex items-center">
            <Link href={`/${lang}`} className="text-xl font-bold text-blue-600" aria-label="Home">
              <Image src="/logo-azul-jc.png" width={150} height={150} alt="" />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map(item => (
              <Link
                key={item.href}
                href={item.href}
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            
            <Link
              href={`/${lang}/contact`}
              className="bg-slate-800 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              {tCta('bookCall')}
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(o => !o)}
              aria-label="Toggle menu"
              aria-expanded={isOpen}
              aria-controls="mobile-nav"
              className="p-2"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div id="mobile-nav" className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navItems.map(item => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block px-3 py-2 text-gray-700 hover:text-blue-600"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="px-3 py-2">
                <LocaleSwitcher />
              </div>
              <Link
                href={`/${lang}/contact`}
                className="block px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {tCta('bookCall')}
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
