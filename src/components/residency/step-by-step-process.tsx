import { FileText, CheckCircle, Home, UserCheck } from 'lucide-react'



export function StepByStepProcess() {
  const steps = [
    {
      icon: FileText,
      title: 'Documentation & Planning',
      description: 'We help you gather all required documents and create a personalized plan',
      duration: '1-2 weeks'
    },
    {
      icon: Home,
      title: 'Investment & Housing',
      description: 'Secure your required investment and find suitable accommodation',
      duration: '2-4 weeks'
    },
    {
      icon: UserCheck,
      title: 'Application Submission',
      description: 'Submit your complete application to Andorran immigration authorities',
      duration: '1 week'
    },
    {
      icon: CheckCircle,
      title: 'Approval & Residency',
      description: 'Receive your residency permit and complete the relocation process',
      duration: '2-3 months'
    }
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-28">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Your Path to Residency
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A clear, step-by-step process to get your Andorran residency
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="flex items-start space-x-6 mb-8">
              <div className="bg-slate-800 text-white w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                <step.icon size={24} />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-semibold text-gray-900">{step.title}</h3>
                  <span className="text-sm text-gray-500 bg-gray-200 px-3 py-1 rounded-full">
                    {step.duration}
                  </span>
                </div>
                <p className="text-gray-600">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}