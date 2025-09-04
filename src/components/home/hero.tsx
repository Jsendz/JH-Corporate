import Link from 'next/link'
import { ArrowRight, CheckCircle } from 'lucide-react'

interface HeroProps {
  lang: string
}

export function Hero({ lang }: HeroProps) {
  return (
    <section className="relative bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
      <div className="container mx-auto max-w-6xl px-4 ">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Your Gateway to
            <span className="text-blue-600"> Andorra</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Expert guidance for relocation, residency permits, and company formation in Andorra. 
            Start your new life in one of Europe's most attractive tax havens.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Link
              href={`/${lang}/contact`}
              className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center space-x-2"
            >
              <span>Book Free Consultation</span>
              <ArrowRight size={20} />
            </Link>
            <Link
              href={`/${lang}/services`}
              className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
            >
              View Our Services
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto">
            <div className="flex items-center space-x-2">
              <CheckCircle className="text-green-500" size={20} />
              <span className="text-gray-600">Tax Optimization</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="text-green-500" size={20} />
              <span className="text-gray-600">EU Residency</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="text-green-500" size={20} />
              <span className="text-gray-600">Business Setup</span>
            </div>
          </div>
        </div>
        
      </div>
    </section>
  )
}