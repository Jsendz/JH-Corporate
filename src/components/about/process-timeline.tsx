import { UserPlus, Search, FileText, CheckCircle } from 'lucide-react'

interface ProcessTimelineProps {
  lang: string
}

export function ProcessTimeline({ lang }: ProcessTimelineProps) {
  const steps = [
    {
      icon: UserPlus,
      title: 'Initial Consultation',
      description: 'We start with a comprehensive consultation to understand your goals and requirements'
    },
    {
      icon: Search,
      title: 'Personalized Strategy',
      description: 'We develop a tailored strategy based on your specific needs and circumstances'
    },
    {
      icon: FileText,
      title: 'Documentation & Process',
      description: 'We handle all documentation and guide you through each step of the process'
    },
    {
      icon: CheckCircle,
      title: 'Successful Completion',
      description: 'We ensure everything is completed successfully and provide ongoing support'
    }
  ]

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Process
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A proven methodology to ensure your success
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="flex items-start space-x-6 mb-8">
              <div className="bg-blue-800 text-white w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                <step.icon size={24} />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}