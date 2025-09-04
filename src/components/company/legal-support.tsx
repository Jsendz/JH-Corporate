import { Scale, Calculator, FileCheck, Users, CheckCircle } from 'lucide-react'

interface LegalSupportProps {
  lang: string
}

export function LegalSupport({ lang }: LegalSupportProps) {
  const services = [
    {
      icon: Scale,
      title: 'Legal Compliance',
      description: 'Ensure your company meets all Andorran legal requirements',
      features: ['Corporate law compliance', 'Contract drafting', 'Legal documentation']
    },
    {
      icon: Calculator,
      title: 'Accounting Services',
      description: 'Professional accounting and bookkeeping services',
      features: ['Monthly bookkeeping', 'Tax preparation', 'Financial reporting']
    },
    {
      icon: FileCheck,
      title: 'Tax Optimization',
      description: 'Maximize your tax efficiency within legal frameworks',
      features: ['Tax planning', 'Deduction optimization', 'Compliance monitoring']
    },
    {
      icon: Users,
      title: 'Ongoing Support',
      description: 'Continuous support for your business operations',
      features: ['Annual filings', 'Regulatory updates', 'Business advisory']
    }
  ]

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Legal & Accounting Support
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive support to keep your business compliant and optimized
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-gray-50 p-8 rounded-xl">
              <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                <service.icon className="text-slate-800" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, i) => (
                  <li key={i} className="text-gray-600 flex items-center">
                    <CheckCircle className="text-green-500 mr-2" size={16} />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}