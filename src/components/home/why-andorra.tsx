import { Shield, TrendingUp, Heart, Globe } from 'lucide-react'

interface WhyAndorraProps {
  lang: string
}

export function WhyAndorra({ lang }: WhyAndorraProps) {
  const benefits = [
    {
      icon: TrendingUp,
      title: 'Low Tax Rates',
      description: 'Corporate tax from 2% and personal income tax up to 10%'
    },
    {
      icon: Shield,
      title: 'Political Stability',
      description: 'Stable democracy with strong rule of law and EU agreements'
    },
    {
      icon: Heart,
      title: 'Quality of Life',
      description: 'Beautiful mountains, excellent healthcare, and safety'
    },
    {
      icon: Globe,
      title: 'Strategic Location',
      description: 'Between France and Spain with easy access to major EU cities'
    }
  ]

  return (
    <section className="py-24 bg-white mb-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-28">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Choose Andorra?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the advantages of living and doing business in one of Europe's most attractive jurisdictions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <benefit.icon className="text-blue-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}