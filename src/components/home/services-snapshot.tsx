'use client'

import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card'
import { Button } from '../ui/button'
import {
  Shield,
  FileCheck2,
  Building2,
  Landmark,
  Banknote,
  CheckCircle2,
  ArrowRight
} from 'lucide-react'
import Link from 'next/link'

type FeatureProps = {
  children: React.ReactNode
}

const Feature: React.FC<FeatureProps> = ({ children }) => (
  <li className="flex items-start gap-2">
    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0" />
    <span className="text-gray-700">{children}</span>
  </li>
)

const ServiceSnapshotComponent: React.FC = () => {
  return (
    <section className="relative w-full bg-gray-50 py-16">
      {/* subtle gradient accent */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-blue-100/70 to-transparent"
      />

      <div className="container mx-auto max-w-6xl px-4">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
            What We Do — At a Glance
          </h2>
          <p className="mt-3 text-lg text-gray-600">
            Our two most-requested services for moving and building in Andorra.
            Clear scope. Flat fees. End-to-end execution.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {/* Residency Card */}
          <Card className="group relative overflow-hidden border-0 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
            {/* decorative background */}
            <div
              aria-hidden
              className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-blue-100/70 blur-2xl transition-all duration-300 group-hover:scale-110"
            />
            <CardHeader className="relative z-10">
              <div className="mb-3 flex items-center gap-3">
                <div className="rounded-xl bg-blue-100 p-3 text-blue-700">
                  <Shield className="h-7 w-7" />
                </div>
                <CardTitle className="text-2xl">Residency Services</CardTitle>
              </div>
              <CardDescription className="text-base leading-relaxed">
                Active and passive residency made simple. We handle eligibility, paperwork,
                appointments and approvals—so you can settle in Andorra with confidence.
              </CardDescription>
            </CardHeader>
            <CardContent className="relative z-10">
              <ul className="space-y-3">
                <Feature>Eligibility assessment &amp; personalized plan</Feature>
                <Feature>Document preparation &amp; certified translations</Feature>
                <Feature>Appointments: banking, notary, government</Feature>
                <Feature>End-to-end case tracking &amp; status updates</Feature>
              </ul>

              <div className="mt-6 flex items-center justify-between">
                <div className="flex items-center gap-3 text-sm text-gray-500">
                  <FileCheck2 className="h-4 w-4" />
                  <span>Active &amp; Passive Residency</span>
                </div>
                <Link href="/contact" className="inline-block">
                  <Button className="group/button">
                    Book a consultation
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/button:translate-x-0.5" />
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>

          {/* Company Formation Card */}
          <Card className="group relative overflow-hidden border-0 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
            {/* decorative background */}
            <div
              aria-hidden
              className="absolute -left-14 -bottom-14 h-56 w-56 rounded-full bg-emerald-100/70 blur-2xl transition-all duration-300 group-hover:scale-110"
            />
            <CardHeader className="relative z-10">
              <div className="mb-3 flex items-center gap-3">
                <div className="rounded-xl bg-emerald-100 p-3 text-emerald-700">
                  <Building2 className="h-7 w-7" />
                </div>
                <CardTitle className="text-2xl">Company Formation &amp; Advisory</CardTitle>
              </div>
              <CardDescription className="text-base leading-relaxed">
                Incorporate an SL, branch, or holding. We manage authorizations, banking,
                notary, registry and compliance—fast and fully aligned with Andorran law.
              </CardDescription>
            </CardHeader>
            <CardContent className="relative z-10">
              <ul className="space-y-3">
                <Feature>Company type selection (SL, branch, holding)</Feature>
                <Feature>Foreign investment authorization &amp; business plan</Feature>
                <Feature>Banking setup &amp; share capital deposit (from €3,000)</Feature>
                <Feature>Tax IDs, registry, social security &amp; compliance</Feature>
              </ul>

              <div className="mt-6 flex flex-wrap items-center gap-4">
              
                <div className="ml-auto">
                  <Link href="/contact" className="inline-block">
                    <Button className="group/button" variant="default">
                      Get a quote
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/button:translate-x-0.5" />
                    </Button>
                  </Link>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Secondary CTA */}
        <div className="mt-12 text-center">
          <Link href="/services" className="inline-block">
            <Button variant="secondary">
              View all services
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default ServiceSnapshotComponent
