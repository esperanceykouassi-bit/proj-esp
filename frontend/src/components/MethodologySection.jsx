import FadeIn from './FadeIn'

const steps = [
  {
    num: '01',
    title: 'Analyse des besoins',
    desc: "Évaluation approfondie de votre situation, de vos objectifs et des contraintes spécifiques à votre contexte professionnel.",
  },
  {
    num: '02',
    title: 'Diagnostic personnalisé',
    desc: "Identification précise des gaps de compétences et des leviers de performance propres à votre organisation.",
  },
  {
    num: '03',
    title: 'Proposition adaptée',
    desc: "Élaboration d'une solution sur mesure — programme de formation, plan d'assistance ou montage de projet — correspondant à vos enjeux réels.",
  },
  {
    num: '04',
    title: 'Mise en œuvre',
    desc: "Déploiement opérationnel avec un accompagnement terrain de qualité, des formateurs expérimentés et des outils pratiques immédiatement applicables.",
  },
  {
    num: '05',
    title: 'Suivi & Évaluation',
    desc: "Mesure des résultats, recueil des retours et ajustements continus pour garantir un impact durable et mesurable.",
  },
]

export default function MethodologySection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <FadeIn className="text-center mb-14">
          <span className="text-brand-green text-sm font-semibold uppercase tracking-wider">
            Comment nous travaillons
          </span>
          <h2 className="section-title mt-2">Notre Méthodologie</h2>
          <p className="section-subtitle">
            Une approche <strong>pratique, orientée résultats</strong> — construite sur une
            compréhension fine de votre réalité terrain.
          </p>
        </FadeIn>

        {/* Timeline */}
        <div className="relative">
          {/* Ligne verticale (desktop) */}
          <div className="hidden lg:block absolute left-[calc(50%-1px)] top-0 bottom-0 w-0.5 bg-gray-200" aria-hidden />

          <div className="space-y-8 lg:space-y-0">
            {steps.map((step, index) => {
              const isLeft = index % 2 === 0
              return (
                <FadeIn key={step.num} delay={index * 0.1}>
                  <div className={`lg:grid lg:grid-cols-2 lg:gap-12 items-center ${index > 0 ? 'lg:-mt-4' : ''}`}>

                    {/* Contenu gauche ou droite */}
                    <div className={`${isLeft ? 'lg:text-right lg:pr-10' : 'lg:col-start-2 lg:pl-10'}`}>
                      <div className={`bg-white rounded-2xl p-6 shadow-sm border border-gray-100 inline-block w-full`}>
                        <div className={`flex items-center gap-3 mb-3 ${isLeft ? 'lg:flex-row-reverse' : ''}`}>
                          <div className="bg-brand-green text-white text-sm font-bold w-10 h-10 rounded-full flex items-center justify-center shrink-0">
                            {step.num}
                          </div>
                          <h3 className="font-bold text-gray-900 text-lg">{step.title}</h3>
                        </div>
                        <p className={`text-sm text-gray-500 leading-relaxed ${isLeft ? 'lg:text-right' : ''}`}>
                          {step.desc}
                        </p>
                      </div>
                    </div>

                    {/* Placeholder côté opposé (desktop) */}
                    {!isLeft && <div className="hidden lg:block lg:col-start-1 lg:row-start-1" />}
                  </div>
                </FadeIn>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
