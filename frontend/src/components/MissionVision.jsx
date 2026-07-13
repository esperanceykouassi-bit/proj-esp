import { Target, Eye } from 'lucide-react'

export default function MissionVision() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="text-brand-green text-sm font-semibold uppercase tracking-wider">Qui sommes-nous</span>
          <h2 className="section-title mt-2">Mission & Vision</h2>
          <p className="section-subtitle">
            SkillUp Consulting CI est un cabinet spécialisé dans la formation professionnelle
            pratique et l'optimisation des performances en Côte d'Ivoire.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="relative bg-gradient-to-br from-brand-green to-brand-teal text-white rounded-2xl p-8 overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="relative">
              <div className="bg-white/20 w-12 h-12 rounded-xl flex items-center justify-center mb-5">
                <Target size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">Notre Mission</h3>
              <p className="text-white/85 leading-relaxed">
                Réduire l'écart entre la théorie académique et les exigences réelles du monde
                professionnel à travers la formation pratique professionnelle.
              </p>
            </div>
          </div>

          <div className="relative bg-gradient-to-br from-brand-blue to-brand-blue-mid text-white rounded-2xl p-8 overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="relative">
              <div className="bg-white/20 w-12 h-12 rounded-xl flex items-center justify-center mb-5">
                <Eye size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">Notre Vision</h3>
              <p className="text-white/85 leading-relaxed">
                Être le partenaire de référence pour la montée en compétences et la performance
                durable des PME, des professionnels et des institutions en Côte d'Ivoire.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {[
            'Formation professionnelle pratique',
            'Assistance comptable et fiscale',
            "Étude et montage de projets",
            'Optimisation des performances des PME',
            'Renforcement des compétences en gestion',
          ].map((item, i) => (
            <div
              key={i}
              className="flex items-center gap-3 bg-gray-50 rounded-xl p-4 border border-gray-100"
            >
              <div className="w-2 h-2 bg-brand-green rounded-full shrink-0" />
              <span className="text-sm text-gray-700 font-medium">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
