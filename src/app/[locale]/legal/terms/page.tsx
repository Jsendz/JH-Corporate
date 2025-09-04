import { LegalPageLayout } from '@/src/components/legal/legal-page-layout'
import { use } from 'react'

interface TermsPageProps {
  params: Promise<{ lang: string }>
  searchParams?: Promise<{ [key: string]: string | string[] | undefined }>
}

export default function TermsPage({ params }: TermsPageProps) {
  const { lang } = use(params) 
  return (
    <LegalPageLayout 
      title="Terms of Service" 
      lastUpdated="January 1, 2024"
      lang={lang}
    >
      <div className="space-y-6">
        <section>
          <h2 className="text-2xl font-semibold mb-4">Acceptance of Terms</h2>
          <p className="text-gray-600">
            By accessing and using our services, you accept and agree to be bound by the terms 
            and provision of this agreement.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Use License</h2>
          <p className="text-gray-600 mb-4">
            Permission is granted to temporarily access our services for personal, non-commercial 
            transitory viewing only.
          </p>
          <p className="text-gray-600">This is the grant of a license, not a transfer of title, and under this license you may not:</p>
          <ul className="list-disc list-inside space-y-2 text-gray-600 mt-4">
            <li>Modify or copy the materials</li>
            <li>Use the materials for any commercial purpose</li>
            <li>Remove any copyright or other proprietary notations</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Service Terms</h2>
          <p className="text-gray-600">
            Our relocation and company formation services are provided subject to availability 
            and compliance with applicable laws and regulations.
          </p>
        </section>
      </div>
    </LegalPageLayout>
  )
}