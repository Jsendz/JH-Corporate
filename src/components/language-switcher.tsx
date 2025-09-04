'use client';

import {useState} from 'react';
import {useLocale} from 'next-intl';
import Link from 'next/link';
import { usePathname } from 'next/navigation';


const locales = [
  {code: 'en', label: 'English', flag: '🇺🇸'},
  {code: 'es', label: 'Español', flag: '🇪🇸'},
  {code: 'fr', label: 'Français', flag: '🇫🇷'},
  {code: 'ca', label: 'Català', flag: '🏴‍☠️'}
];

export default function LocaleSwitcher() {
  const [isOpen, setIsOpen] = useState(false);
  const locale = useLocale();
  const pathname = usePathname();

  const currentLocale = locales.find(l => l.code === locale) ?? locales[0];

  return (
    <div className="relative">
      {/* Dropdown Button */}
      <button
        onClick={() => setIsOpen(o => !o)}
        className="flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-lg shadow-sm hover:shadow-md transition-all duration-200 hover:bg-white/90"
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        <span className="text-lg">{currentLocale.flag}</span>
        <span className="text-sm font-medium text-gray-700">
          {currentLocale.label}
        </span>
        <svg
          className={`w-4 h-4 text-gray-500 transition-transform duration-200 ${
            isOpen ? 'rotate-180' : ''
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"/>
        </svg>
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <>
          <div
            className="fixed inset-0 z-10"
            onClick={() => setIsOpen(false)}
            aria-hidden="true"
          />
          <div className="absolute right-0 mt-2 w-48 bg-white/95 backdrop-blur-md border border-gray-200/50 rounded-xl shadow-lg z-20 overflow-hidden animate-in fade-in slide-in-from-top-1 duration-200">
            {locales.map(({code, label, flag}) => (
              <Link
                key={code}
                href={pathname}
                locale={code}
                onClick={() => setIsOpen(false)}
                className={`flex items-center gap-3 px-4 py-3 text-sm transition-colors duration-150 hover:bg-gray-50/80 ${
                  code === locale
                    ? 'bg-blue-50/80 text-blue-700 font-medium'
                    : 'text-gray-700 hover:text-gray-900'
                }`}
              >
                <span className="text-lg">{flag}</span>
                <span>{label}</span>
                {code === locale && (
                  <svg className="w-4 h-4 ml-auto text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                )}
              </Link>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
