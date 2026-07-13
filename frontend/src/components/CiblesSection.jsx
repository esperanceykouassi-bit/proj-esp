import { UserCheck, Building2, Globe2, GraduationCap } from 'lucide-react'
import FadeIn from './FadeIn'

const cibles = [
  {
    icon: UserCheck,
    title: 'Professionnels',
    desc: "Salariés, indépendants et demandeurs d'emploi souhaitant acquérir de nouvelles compétences techniques ou managériales.",
    color: 'border-brand-green',
    bg: 'bg-brand-green/5',
    iconColor: 'text-brand-green',
  },
  {
    icon: Building2,
    title: 'PME',
    desc: "Petites et moyennes entreprises ivoiriennes cherchant à optimiser leurs performances comptables, commerciales et managériales.",
    color: 'border-brand-blue',
    bg: 'bg-brand-blue/5',
    iconColor: 'text-brand-blue',
  },
  {
    icon: Globe2,
    title: 'Organisations',
    desc: "ONG, associations, structures publiques et parapubliques voulant renforcer les capacités de leurs équipes.",
    color: 'border-brand-teal',
    bg: 'bg-brand-teal/5',
    iconColor: 'text-brand-teal',
  },
  {
    icon: GraduationCap,
    title: "Établissements d'Enseignement",
    desc: "Universités, grandes écoles et centres de formation souhaitant combler le fossé entre théorie académique et pratique professionnelle.",
    color: 'border-brand-green-dark',
    bg: 'bg-brand-green-dark/5',
    iconColor: 'text-brand-green-dark',
  },
]

export default function CiblesSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <FadeIn className="text-center mb-14">
          <span className="text-brand-green text-sm font-semibold uppercase tracking-wider">
            À qui s'adresse SkillUp ?
          </span>
          <h2 className="section-title mt-2">Nos Cibles</h2>
          <p className="section-subtitle">
            Nous accompagnons aussi bien les individus que les structures, avec une approche
            adaptée à chaque profil et chaque contexte.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cibles.map((cible, index) => (
            <FadeIn key={index} delay={index * 0.1}>
              <div className={`h-full rounded-2xl border-2 ${cible.color} ${cible.bg} p-7 flex flex-col items-center text-center hover:-translate-y-1 transition-transform duration-300`}>
                <div className="w-16 h-16 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-5">
                  <cible.icon size={30} className={cible.iconColor} strokeWidth={1.75} />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{cible.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{cible.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
