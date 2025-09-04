'use client'

import { useState, use } from 'react'
import { Hero } from '@/src/components/blog/hero'
import { BlogCategories } from '@/src/components/blog/blog-categories'
import { BlogGrid } from '@/src/components/blog/blog-grid'

interface BlogPageProps {
  params: Promise<{ lang: string }>
  searchParams?: Promise<{ [key: string]: string | string[] | undefined }>
}

export default function BlogPage({ params }: BlogPageProps) {
  const { lang } = use(params) // Use React's use() hook for client components
  const [activeCategory, setActiveCategory] = useState('all')

  return (
    <>
      <Hero lang={lang} />
      <div className="container mx-auto px-4 py-12">
        <BlogCategories 
          lang={lang} 
          activeCategory={activeCategory} 
          onCategoryChange={setActiveCategory} 
        />
        <BlogGrid lang={lang} category={activeCategory} />
      </div>
    </>
  )
}