'use client'

import React from 'react'
import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card'
import { Button } from '../ui/button'
import {
  Shield,
  Building2,
  Home,
  Briefcase,
  CheckCircle2,
  ArrowRight,
  type LucideIcon
} from 'lucide-react'

type ServiceItem = {
  title: string
  description: string
  href: string
  features: string[]
  icon: LucideIcon            // ✅ use LucideIcon (fixes the type error)
  accent: 'blue' | 'emerald' | 'amber' | 'violet'
}

const FeatureRow: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <li className="flex items-start gap-2">
    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0" />
    <span className="text-gray-700">{children}</span>
  </li>
)

const items: ServiceItem[] = [
  {
    title: 'Residency Services',
    description:
      'Active and passive residency made simple. We manage eligibility, paperwork, appointments and approvals.',
    href: '/residency',
    features: [
      'Eligibility assessment & personalized plan',
      'Document preparation & certified translations',
      'Appointments: banking, notary, government'
    ],
    icon: Shield,
    accent: 'blue'
  },
  {
    title: 'Company Formation',
    description:
      'Incorporate an SL, branch or holding in Andorra. End-to-end support from authorization to registry.',
    href: '/company-formation',
    features: [
      'Company type selection (SL, branch, holding)',
      'Foreign investment authorization & business plan',
      'Banking setup, notary & trade registry'
    ],
    icon: Building2,
    accent: 'emerald'
  },
  {
    title: 'Concierge Relocation',
    description:
      'Everything after approval: housing, utilities, insurance and family integration handled for you.',
    href: '/services',
    features: [
      'Housing search, negotiation & contracts',
      'Utilities, insurance & healthcare setup',
      'School guidance & enrollment support'
    ],
    icon: Home,
    accent: 'amber'
  },
  {
    title: 'Compliance & Advisory',
    description:
      'Stay compliant with local requirements while you scale—accounting, tax and corporate governance.',
    href: '/services',
    features: [
      'Accounting & periodic tax filings',
      'Payroll & social security',
      'Board minutes, renewals & filings'
    ],
    icon: Briefcase,
    accent: 'violet'
  }
]

const accentClasses: Record<ServiceItem['accent'], string> = {
  blue: 'bg-blue-100 text-blue-700',
  emerald: 'bg-emerald-100 text-emerald-700',
  amber: 'bg-amber-100 text-amber-700',
  violet: 'bg-violet-100 text-violet-700'
}

const ServiceGridComponent: React.FC = () => {
  return (
    <section className="relative w-full bg-white py-16">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
            Services at a Glance
          </h2>
          <p className="mt-3 text-lg text-gray-600">
            Four core services that cover every step—moving to Andorra, building your company and staying compliant.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {items.map(({ title, description, href, features, icon: Icon, accent }) => (
            <Card
              key={title}
              className="group relative overflow-hidden border-0 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              {/* soft glow */}
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 bg-gradient-to-br from-gray-50 to-transparent"
              />

              <CardHeader className="relative z-10">
                <div className="mb-3 flex items-center gap-3">
                  <div className={`rounded-xl p-3 ${accentClasses[accent]}`}>
                    <Icon className="h-7 w-7" />
                  </div>
                  <CardTitle className="text-2xl">{title}</CardTitle>
                </div>
                <CardDescription className="text-base leading-relaxed">
                  {description}
                </CardDescription>
              </CardHeader>

              <CardContent className="relative z-10">
                <ul className="space-y-3">
                  {features.map((f) => (
                    <FeatureRow key={f}>{f}</FeatureRow>
                  ))}
                </ul>

                <div className="mt-6 flex items-center justify-between">
                  <span className="text-sm text-gray-500">Flat fees. Clear timelines.</span>
                  <Link href={href} className="inline-block">
                    <Button className="group/button">
                      Learn more
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/button:translate-x-0.5" />
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* optional secondary CTA */}
        <div className="mt-12 text-center">
          <Link href="/contact" className="inline-block">
            <Button variant="secondary">Book a consultation</Button>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default ServiceGridComponent
