import Link from 'next/link'
import { Mail, Phone, MapPin, Linkedin, Twitter } from 'lucide-react'

interface FooterProps {
  lang: string
}

export function Footer({ lang }: FooterProps) {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">JH Corporate</h3>
            <p className="text-gray-400 mb-4">
              Your trusted partner for relocation and company formation in Andorra.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link href={`/${lang}/residency`} className="hover:text-white">Residency Permits</Link></li>
              <li><Link href={`/${lang}/company-formation`} className="hover:text-white">Company Formation</Link></li>
              <li><Link href={`/${lang}/services`} className="hover:text-white">Tax Planning</Link></li>
              <li><Link href={`/${lang}/services`} className="hover:text-white">Real Estate</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link href={`/${lang}/about`} className="hover:text-white">About Us</Link></li>
              <li><Link href={`/${lang}/blog`} className="hover:text-white">Blog</Link></li>
              <li><Link href={`/${lang}/pricing`} className="hover:text-white">Pricing</Link></li>
              <li><Link href={`/${lang}/contact`} className="hover:text-white">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-center space-x-2">
                <Mail size={16} />
                <span>info@jhcorporateservices.com</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone size={16} />
                <span>+376 612400</span>
              </li>
              <li className="flex items-center space-x-2">
                <MapPin size={16} />
                <span>Andorra la Vella, Andorra</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400">© 2024 JH Corporate. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href={`/${lang}/legal/privacy`} className="text-gray-400 hover:text-white">Privacy Policy</Link>
            <Link href={`/${lang}/legal/terms`} className="text-gray-400 hover:text-white">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}