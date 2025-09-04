import { Calendar } from 'lucide-react'

interface LegalPageLayoutProps {
  title: string
  lastUpdated: string
  lang: string
  children: React.ReactNode
}

export function LegalPageLayout({ title, lastUpdated, lang, children }: LegalPageLayoutProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-sm p-8">
            <div className="mb-8">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">{title}</h1>
              <div className="flex items-center space-x-2 text-gray-600">
                <Calendar size={16} />
                <span>Last updated: {lastUpdated}</span>
              </div>
            </div>
            
            <div className="prose prose-lg max-w-none">
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}