'use client'

import { useState } from 'react'
import { Building, Users, Globe, ChevronDown, ChevronUp } from 'lucide-react'

interface CompanyTypesProps {
  lang: string
}

export function CompanyTypes({ lang }: CompanyTypesProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const companyTypes = [
    {
      icon: Building,
      title: 'Sociedad Limitada (SL)',
      description: 'Limited liability company - the most popular business structure',
      details: {
        minCapital: '€3,000',
        liability: 'Limited to capital contribution',
        taxation: 'Corporate tax from 2%',
        benefits: ['Easy to set up', 'Flexible management', 'Good for small-medium businesses']
      }
    },
    {
      icon: Users,
      title: 'Sociedad Anónima (SA)',
      description: 'Public limited company for larger enterprises',
      details: {
        minCapital: '€60,000',
        liability: 'Limited to share capital',
        taxation: 'Corporate tax from 2%',
        benefits: ['Can issue shares publicly', 'Suitable for large investments', 'Enhanced credibility']
      }
    },
    {
      icon: Globe,
      title: 'Holding Company',
      description: 'For managing investments and subsidiaries',
      details: {
        minCapital: '€3,000',
        liability: 'Limited liability',
        taxation: 'Special holding regime available',
        benefits: ['Tax efficient structure', 'International operations', 'Investment management']
      }
    }
  ]

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Company Types
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose the right business structure for your needs
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {companyTypes.map((type, index) => (
            <div key={index} className="border border-gray-200 rounded-xl mb-4">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full p-6 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center space-x-4">
                  <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center">
                    <type.icon className="text-slate-800" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">{type.title}</h3>
                    <p className="text-gray-600">{type.description}</p>
                  </div>
                </div>
                {openIndex === index ? (
                  <ChevronUp className="text-gray-500 flex-shrink-0" size={20} />
                ) : (
                  <ChevronDown className="text-gray-500 flex-shrink-0" size={20} />
                )}
              </button>
              
              {openIndex === index && (
                <div className="px-6 pb-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Minimum Capital</h4>
                      <p className="text-slate-800 font-medium">{type.details.minCapital}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Liability</h4>
                      <p className="text-gray-600">{type.details.liability}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Taxation</h4>
                      <p className="text-gray-600">{type.details.taxation}</p>
                    </div>
                  </div>
                  
                  <div className="mt-6">
                    <h4 className="font-semibold text-gray-900 mb-2">Key Benefits</h4>
                    <ul className="space-y-1">
                      {type.details.benefits.map((benefit, i) => (
                        <li key={i} className="text-gray-600">• {benefit}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}