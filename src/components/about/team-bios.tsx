interface TeamBiosProps {
  lang: string
}

export function TeamBios({ lang }: TeamBiosProps) {
  const team = [
    {
      name: 'Maria Gonzalez',
      role: 'Founder & CEO',
      bio: 'With 15 years of experience in international law and relocation services, Maria founded AndorraFlow to help people discover the opportunities in Andorra.',
      image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      name: 'David Chen',
      role: 'Head of Business Formation',
      bio: 'David specializes in corporate law and tax optimization, helping clients establish the most efficient business structures in Andorra.',
      image: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      name: 'Sophie Martin',
      role: 'Residency Specialist',
      bio: 'Sophie guides clients through the residency application process, ensuring a smooth transition to life in Andorra.',
      image: 'https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Meet Our Team
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experienced professionals dedicated to your success in Andorra
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-sm text-center">
              <img
                src={member.image}
                alt={member.name}
                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
              <p className="text-emerald-600 font-medium mb-4">{member.role}</p>
              <p className="text-gray-600">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}