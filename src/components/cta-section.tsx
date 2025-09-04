import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

interface CTASectionProps {
  lang: string
}

export function CTASection({ lang }: CTASectionProps) {
  return (
    <section className="py-24 mb-12 max-w-5xl rounded-lg mx-auto bg-slate-900">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Ready to Start Your Andorran Journey?
        </h2>
        <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
          Book a free consultation with our experts and discover how we can help you relocate to Andorra
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href={`/${lang}/contact`}
            className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center space-x-2"
          >
            <span>Book Free Consultation</span>
            <ArrowRight size={20} />
          </Link>
          <Link
            href={`/${lang}/pricing`}
            className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
          >
            View Pricing
          </Link>
        </div>
      </div>
    </section>
  )
}