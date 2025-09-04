interface BlogCategoriesProps {
  lang: string
  activeCategory: string
  onCategoryChange: (category: string) => void
}

export function BlogCategories({ lang, activeCategory, onCategoryChange }: BlogCategoriesProps) {
  const categories = [
    { id: 'all', label: 'All Articles' },
    { id: 'residency', label: 'Residency' },
    { id: 'business', label: 'Business' },
    { id: 'tax', label: 'Tax' },
    { id: 'expat', label: 'Expat Life' }
  ]

  return (
    <div className="flex flex-wrap gap-2 mb-8">
      {categories.map((category) => (
        <button
          key={category.id}
          onClick={() => onCategoryChange(category.id)}
          className={`px-4 py-2 rounded-full transition-colors ${
            activeCategory === category.id
              ? 'bg-slate-600 text-white'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
        >
          {category.label}
        </button>
      ))}
    </div>
  )
}