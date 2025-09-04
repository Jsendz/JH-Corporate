import { FileText, DollarSign, Building, CheckCircle } from 'lucide-react'

interface SetupProcessProps {
  lang: string
}

export function SetupProcess({ lang }: SetupProcessProps) {
  const steps = [
    {
      icon: FileText,
      title: 'Name Reservation',
      description: 'Reserve your company name with the Andorran Commercial Registry',
      duration: '1-2 days'
    },
    {
      icon: DollarSign,
      title: 'Capital Deposit',
      description: 'Deposit minimum share capital in an Andorran bank account',
      duration: '3-5 days'
    },
    {
      icon: Building,
      title: 'Incorporation',
      description: 'Sign incorporation documents before a notary public',
      duration: '1 day'
    },
    {
      icon: CheckCircle,
      title: 'Registration',
      description: 'Register with tax authorities and obtain business licenses',
      duration: '1-2 weeks'
    }
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Setup Process
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Simple steps to establish your company in Andorra
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="bg-blue-400 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <step.icon size={32} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600 mb-4">{step.description}</p>
                <span className="text-sm text-slate-200 bg-slate-800 px-3 py-1 rounded-full">
                  {step.duration}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}