import { Check } from 'lucide-react'
import Link from 'next/link'

interface PricingTiersProps {
  lang: string
}

export function PricingTiers({ lang }: PricingTiersProps) {
  const tiers = [
    {
      name: 'Essential',
      price: '€4,999',
      description: 'Perfect for individuals seeking basic relocation services',
      features: [
        'Residency permit application',
        'Basic documentation support',
        'Initial consultation',
        'Application submission',
        'Email support'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '€9,999',
      description: 'Comprehensive package for business owners and families',
      features: [
        'Everything in Essential',
        'Company formation',
        'Tax planning consultation',
        'Bank account setup',
        'Real estate guidance',
        'Priority support',
        'Quarterly check-ins'
      ],
      popular: true
    },
    {
      name: 'VIP',
      price: '€19,999',
      description: 'Premium concierge service for discerning clients',
      features: [
        'Everything in Professional',
        'Dedicated account manager',
        'Expedited processing',
        'Family relocation support',
        'Property management',
        'Ongoing legal support',
        '24/7 priority support',
        'Annual compliance review'
      ],
      popular: false
    }
  ]

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {tiers.map((tier, index) => (
            <div
              key={index}
              className={`relative rounded-xl p-8 ${
                tier.popular
                  ? 'bg-orange-50 border-2 border-orange-200'
                  : 'bg-gray-50 border border-gray-200'
              }`}
            >
              {tier.popular && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <span className="bg-orange-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{tier.name}</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-gray-900">{tier.price}</span>
                </div>
                <p className="text-gray-600">{tier.description}</p>
              </div>

              <ul className="space-y-4 mb-8">
                {tier.features.map((feature, i) => (
                  <li key={i} className="flex items-start space-x-3">
                    <Check className="text-green-500 flex-shrink-0 mt-0.5" size={16} />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <Link
                href={`/${lang}/contact`}
                className={`block w-full py-3 px-6 rounded-lg font-semibold text-center transition-colors ${
                  tier.popular
                    ? 'bg-orange-600 text-white hover:bg-orange-700'
                    : 'bg-gray-900 text-white hover:bg-gray-800'
                }`}
              >
                Get Started
              </Link>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            Need a custom solution? Let&apos;s discuss your specific requirements.
          </p>
          <Link
            href={`/${lang}/contact`}
            className="inline-flex items-center space-x-2 text-orange-600 hover:text-orange-700 font-medium"
          >
            <span>Schedule a Strategy Call</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}