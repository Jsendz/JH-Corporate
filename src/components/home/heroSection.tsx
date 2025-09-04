import Image from "next/image"
import Link from "next/link"



export default function HeroSection() {
  return (
    <section className="w-full max-w-7xl mx-auto py-12 md:py-24 lg:py-12">
      <div className="w-[90%] mx-auto bg-[#062540] p-5 rounded-xl">
        
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="flex flex-col justify-center space-y-4 pl-6">
            <div className="space-y-2">
              <h1 className="text-3xl tracking-tighter text-white sm:text-4xl md:text-5xl lg:text-6xl/none pb-6">
                Move to Andorra, <br/> Stress-Free
              </h1>
              <p className="max-w-[600px] text-gray-400 md:text-xl dark:text-gray-400 pb-6">
                We help global citizens gain residency or start companies in Andorra—quickly, legally, and with full guidance.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link
                href="/contact"
                className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
              >
                Get Started
              </Link>
              <Link
                href="/services"
                className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
              >
                Learn More
              </Link>
            </div>
          </div>
          <div className="flex justify-center lg:justify-end">
            <Image
              src="/fondo.jpg"
              alt="Hero Image"
              width={400}
              height={400}
              className="aspect-[3/4] overflow-hidden rounded-xl  object-center object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}
