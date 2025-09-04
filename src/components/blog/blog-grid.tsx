interface BlogGridProps {
  lang: string
  category: string
}

export function BlogGrid({ lang, category }: BlogGridProps) {
  const articles = [
    {
      id: 1,
      title: 'Complete Guide to Andorran Residency Requirements',
      excerpt: 'Everything you need to know about obtaining residency in Andorra, including requirements, process, and timeline.',
      category: 'residency',
      date: '2024-01-15',
      image: 'https://images.pexels.com/photos/1115804/pexels-photo-1115804.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 2,
      title: 'Tax Benefits of Living in Andorra',
      excerpt: 'Discover the tax advantages that make Andorra an attractive destination for individuals and businesses.',
      category: 'tax',
      date: '2024-01-10',
      image: 'https://images.pexels.com/photos/590041/pexels-photo-590041.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 3,
      title: 'Setting Up Your Business in Andorra',
      excerpt: 'A comprehensive guide to company formation and business setup in Andorra.',
      category: 'business',
      date: '2024-01-05',
      image: 'https://images.pexels.com/photos/416405/pexels-photo-416405.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 4,
      title: 'Life as an Expat in Andorra',
      excerpt: 'What to expect when living in Andorra: culture, lifestyle, and practical tips for expats.',
      category: 'expat',
      date: '2024-01-01',
      image: 'https://images.pexels.com/photos/1174732/pexels-photo-1174732.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ]

  const filteredArticles = category === 'all' ? articles : articles.filter(article => article.category === category)

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {filteredArticles.map((article) => (
        <div key={article.id} className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow">
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <div className="flex items-center space-x-2 mb-3">
              <span className="text-xs bg-slate-100 text-slate-600 px-2 py-1 rounded-full">
                {article.category}
              </span>
              <span className="text-xs text-gray-500">{article.date}</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">{article.title}</h3>
            <p className="text-gray-600 mb-4">{article.excerpt}</p>
            <button className="text-slate-600 font-medium hover:text-slate-700 transition-colors">
              Read More →
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}