'use client'

import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'



export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      question: 'How long does it take to get Andorran residency?',
      answer: 'The process typically takes 3-6 months from application submission to receiving your residency permit, depending on the type of residency and completeness of documentation.'
    },
    {
      question: 'What is the minimum investment required?',
      answer: 'The minimum investment varies by residency type: €400,000 for active residency and €600,000 for passive residency. This can be in real estate, business investment, or bank deposits.'
    },
    {
      question: 'Do I need to speak Catalan to get residency?',
      answer: 'No, you don\'t need to speak Catalan initially. However, for permanent residency and citizenship, basic Catalan proficiency is required.'
    },
    {
      question: 'Can I work in Andorra with passive residency?',
      answer: 'With passive residency, you cannot work for others but can manage your own investments and business activities.'
    },
    {
      question: 'What are the tax implications?',
      answer: 'Andorran tax residents benefit from low tax rates: corporate tax from 2%, personal income tax up to 10%, and no inheritance tax between direct family members.'
    }
  ]

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get answers to common questions about Andorran residency
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-200">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full py-6 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
              >
                <h3 className="text-lg font-semibold text-gray-900 pr-4">{faq.question}</h3>
                {openIndex === index ? (
                  <ChevronUp className="text-gray-500 flex-shrink-0" size={20} />
                ) : (
                  <ChevronDown className="text-gray-500 flex-shrink-0" size={20} />
                )}
              </button>
              {openIndex === index && (
                <div className="pb-6">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}