interface HeroProps {
  lang: string
}

export function Hero({ lang }: HeroProps) {
  return (
    <section className="relative bg-gradient-to-br from-blue-50 to-transparent py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Our <span className="text-blue-600">Services</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Comprehensive solutions for your relocation and business needs in Andorra
          </p>
        </div>
      </div>
    </section>
  )
}