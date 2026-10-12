import { CheckCircle2, Quote } from 'lucide-react'
import FadeIn from './FadeIn'

const reasons = [
  {
    title: 'Expertise technique et financière',
    desc: "Nos formateurs cumulent expériences terrain en entreprise et en cabinet, alliant maîtrise des logiciels de gestion à la rigueur comptable et fiscale.",
  },
  {
    title: 'Approche terrain, pas théorique',
    desc: "Chaque programme est construit à partir de cas réels issus du tissu économique ivoirien. Vous repartez avec des compétences directement applicables.",
  },
  {
    title: 'Solutions adaptées aux réalités locales',
    desc: "Nous travaillons avec les référentiels SYSCOHADA, les logiciels SAARI et la fiscalité ivoirienne — pas des adaptations de programmes étrangers.",
  },
  {
    title: 'Accompagnement personnalisé',
    desc: "Un suivi individuel avant, pendant et après la formation ou la mission pour garantir l'ancrage des compétences et la durabilité des résultats.",
  },
]

export default function WhySkillUp() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">

          {/* Titre + Carte Vision */}
          <FadeIn>
            <div>
              <span className="text-brand-green text-sm font-semibold uppercase tracking-wider">
                Notre valeur ajoutée
              </span>
              <h2 className="section-title mt-2 mb-6">Pourquoi choisir SkillUp ?</h2>
              <p className="text-gray-500 leading-relaxed mb-8">
                Des dizaines de professionnels et d'entreprises nous font confiance pour
                développer leurs compétences et améliorer leurs performances. Voici pourquoi.
              </p>
              
              <div className="bg-hero-gradient rounded-2xl p-8 text-white text-center flex flex-col items-center">
                {/* Icône de citation à la place de l'image */}
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mb-4 text-white/80">
                  <Quote size={24} />
                </div>

                <p className="text-white/90 text-sm leading-relaxed max-w-md">
                  « Être le partenaire de référence pour la montée en compétences
                  et la performance durable des PME et des professionnels en Côte d'Ivoire. »
                </p>
                
                <p className="mt-4 text-xs text-white/60 uppercase tracking-wider font-semibold">
                  Notre Vision
                </p>
              </div>
            </div>
          </FadeIn>

          {/* Liste des raisons */}
          <div className="space-y-5">
            {reasons.map((reason, index) => (
              <FadeIn key={index} delay={index * 0.09}>
                <div className="flex gap-4 p-5 bg-gray-50 rounded-2xl border border-gray-100 hover:border-brand-green/30 hover:bg-brand-green/5 transition-colors duration-300">
                  <CheckCircle2
                    size={24}
                    className="text-brand-green shrink-0 mt-0.5"
                    strokeWidth={2}
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">{reason.title}</h4>
                    <p className="text-sm text-gray-500 leading-relaxed">{reason.desc}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}