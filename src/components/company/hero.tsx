interface HeroProps {
  lang: string
}

export function Hero({ lang }: HeroProps) {
  return (
    <section className="relative bg-gradient-to-br  py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Company Formation
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Establish your business in Andorra with optimal tax structure and full legal compliance
          </p>
        </div>
      </div>
    </section>
  )
}