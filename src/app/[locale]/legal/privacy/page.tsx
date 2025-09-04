import { LegalPageLayout } from '@/src/components/legal/legal-page-layout'
import { use } from 'react'

interface PrivacyPageProps {
  params: Promise<{ lang: string }>
  searchParams?: Promise<{ [key: string]: string | string[] | undefined }>
}

export default function PrivacyPage({ params }: PrivacyPageProps) {
  const { lang } = use(params) 
  return (
    <LegalPageLayout 
      title="Privacy Policy" 
      lastUpdated="January 1, 2024"
      lang={lang}
    >
      <div className="space-y-6">
        <section>
          <h2 className="text-2xl font-semibold mb-4">Information We Collect</h2>
          <p className="text-gray-600 mb-4">
            We collect information you provide directly to us, such as when you create an account, 
            fill out a form, or contact us for support.
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            <li>Personal information (name, email, phone number)</li>
            <li>Professional information (company, job title)</li>
            <li>Communication preferences</li>
            <li>Service requirements and preferences</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">How We Use Your Information</h2>
          <p className="text-gray-600 mb-4">
            We use the information we collect to provide, maintain, and improve our services.
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            <li>Provide relocation and company formation services</li>
            <li>Communicate with you about our services</li>
            <li>Send you marketing communications (with your consent)</li>
            <li>Comply with legal obligations</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Data Security</h2>
          <p className="text-gray-600">
            We implement appropriate technical and organizational measures to protect your personal 
            information against unauthorized access, alteration, disclosure, or destruction.
          </p>
        </section>
      </div>
    </LegalPageLayout>
  )
}