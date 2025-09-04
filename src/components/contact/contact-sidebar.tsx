import { Mail, Phone, MapPin, Clock, MessageCircle } from 'lucide-react'

interface ContactSidebarProps {
  lang: string
}

export function ContactSidebar({ lang }: ContactSidebarProps) {
  return (
    <div className="space-y-8">
      <div className="bg-white p-6 rounded-xl shadow-sm">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Contact Information</h3>
        
        <div className="space-y-4">
          <div className="flex items-center space-x-3">
            <Mail className="text-teal-600 flex-shrink-0" size={20} />
            <div>
              <p className="font-medium text-gray-900">Email</p>
              <p className="text-gray-600">info@jhcorporateservices.com</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-3">
            <Phone className="text-teal-600 flex-shrink-0" size={20} />
            <div>
              <p className="font-medium text-gray-900">Phone</p>
              <p className="text-gray-600">+376 612400</p>
            </div>
          </div>
          
        
          
          <div className="flex items-center space-x-3">
            <Clock className="text-teal-600 flex-shrink-0" size={20} />
            <div>
              <p className="font-medium text-gray-900">Business Hours</p>
              <p className="text-gray-600">Mon-Fri: 9:00 AM - 7:00 PM</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-green-50 p-6 rounded-xl">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Quick Contact</h3>
        <a
          href="https://wa.me/376123456789"
          className="inline-flex items-center space-x-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors"
        >
          <MessageCircle size={20} />
          <span>WhatsApp</span>
        </a>
        <p className="text-sm text-gray-600 mt-2">
          Get instant answers to your questions via WhatsApp
        </p>
      </div>

      <div className="bg-blue-50 p-6 rounded-xl">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Schedule a Call</h3>
        <p className="text-gray-600 mb-4">
          Book a free 30-minute consultation to discuss your relocation goals
        </p>
        <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors">
          Book Consultation
        </button>
      </div>
    </div>
  )
}