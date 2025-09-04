'use client'

import { useState } from 'react'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'

interface TestimonialsCarouselProps {
  lang: string
}

export function TestimonialsCarousel({ lang }: TestimonialsCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Tech Entrepreneur',
      content: 'AndorraFlow made my relocation seamless. Their expertise in tax optimization saved me thousands while ensuring full compliance.',
      rating: 5
    },
    {
      name: 'Miguel Rodriguez',
      role: 'Business Owner',
      content: 'The team guided us through company formation with incredible professionalism. We were operational in Andorra within weeks.',
      rating: 5
    },
    {
      name: 'Emma Thompson',
      role: 'Digital Nomad',
      content: 'From residency permit to finding the perfect home, AndorraFlow handled everything. Highly recommended for anyone considering Andorra.',
      rating: 5
    }
  ]

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600">
            Real stories from people who made Andorra their new home
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="bg-gray-50 rounded-xl p-8 text-center">
            <div className="flex justify-center mb-4">
              {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                <Star key={i} className="text-yellow-400 fill-current" size={20} />
              ))}
            </div>
            <p className="text-lg text-gray-700 mb-6 italic">
              "{testimonials[currentIndex].content}"
            </p>
            <div>
              <h4 className="font-semibold text-gray-900">{testimonials[currentIndex].name}</h4>
              <p className="text-gray-600">{testimonials[currentIndex].role}</p>
            </div>
          </div>

          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white shadow-lg rounded-full p-2 hover:bg-gray-50"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white shadow-lg rounded-full p-2 hover:bg-gray-50"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        <div className="flex justify-center mt-6 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full ${
                index === currentIndex ? 'bg-blue-600' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}