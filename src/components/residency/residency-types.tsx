import { Users, Briefcase, Heart, GraduationCap } from 'lucide-react'




export function ResidencyTypes() {
  const residencyTypes = [
    {
      icon: Briefcase,
      title: 'Active Residency',
      description: 'For those who want to work and live actively in Andorra',
      requirements: ['Minimum investment of €400,000', 'Minimum 90 days/year in Andorra', 'Employment or business activity'],
      benefits: ['Work permit included', 'Access to healthcare', 'EU travel benefits']
    },
    {
      icon: Users,
      title: 'Passive Residency',
      description: 'For investors and retirees seeking tax optimization',
      requirements: ['Minimum investment of €600,000', 'Minimum 90 days/year in Andorra', 'Cannot work for others'],
      benefits: ['Tax advantages', 'Investment flexibility', 'Privacy protection']
    },
    {
      icon: Heart,
      title: 'Family Reunification',
      description: 'For family members of Andorran residents',
      requirements: ['Existing resident family member', 'Proof of relationship', 'Financial support guarantee'],
      benefits: ['Same rights as principal', 'Healthcare access', 'Education access']
    },
    {
      icon: GraduationCap,
      title: 'Study Residency',
      description: 'For students enrolled in Andorran institutions',
      requirements: ['University enrollment', 'Proof of financial means', 'Health insurance'],
      benefits: ['Student visa benefits', 'Part-time work allowed', 'EU student exchange']
    }
  ]

  return (
    <section className="py-16 bg-[#062540]">
      <div className="container mx-auto px-4 ">
        <div className="text-center mb-24">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-wide text-gray-100 mb-4">
            Types of Residency
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Choose the residency type that best fits your lifestyle and goals
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {residencyTypes.map((type, index) => (
            <div key={index} className="bg-gray-100 p-8 rounded-xl">
              <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                <type.icon className="text-slate-800" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{type.title}</h3>
              <p className="text-gray-600 mb-6">{type.description}</p>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Requirements:</h4>
                  <ul className="space-y-1">
                    {type.requirements.map((req, i) => (
                      <li key={i} className="text-sm text-gray-600">• {req}</li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Benefits:</h4>
                  <ul className="space-y-1">
                    {type.benefits.map((benefit, i) => (
                      <li key={i} className="text-sm text-gray-600">• {benefit}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}