const stats = [
  { value: '5', label: "Domaines d'intervention" },
  { value: '4', label: 'Cibles stratégiques' },
  { value: '100%', label: 'Approche pratique' },
  { value: 'CI', label: 'Basé en Côte d\'Ivoire' },
]

export default function StatsSection() {
  return (
    <section className="bg-brand-green text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat) => (
            <div key={stat.label}>
              <div className="text-4xl font-bold font-heading mb-1">{stat.value}</div>
              <div className="text-sm text-white/80">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
