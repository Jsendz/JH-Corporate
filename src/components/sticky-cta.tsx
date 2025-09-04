'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { X } from 'lucide-react'

interface StickyCTAProps {
  lang: string
}

export function StickyCTA({ lang }: StickyCTAProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [isHidden, setIsHidden] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      setIsVisible(scrollY > 500)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  if (isHidden || !isVisible) return null

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div className="bg-blue-600 text-white px-6 py-3 rounded-full shadow-lg flex items-center space-x-4">
        <span className="font-medium">Ready to move to Andorra?</span>
        <Link
          href={`/${lang}/contact`}
          className="bg-white text-blue-600 px-4 py-2 rounded-full hover:bg-gray-100 transition-colors"
        >
          Book Consultation
        </Link>
        <button
          onClick={() => setIsHidden(true)}
          className="text-white hover:text-gray-200"
        >
          <X size={20} />
        </button>
      </div>
    </div>
  )
}