import { Link } from 'react-router-dom'
import { ArrowRight, Monitor, FileSpreadsheet, Users, Calculator, Briefcase, Handshake } from 'lucide-react'
import FadeIn from './FadeIn'

const services = [
  {
    icon: Monitor,
    title: 'Logiciels de Gestion SAARI',
    color: 'bg-brand-green',
    tags: ['Comptabilité', 'Gestion commerciale', 'Paie'],
    description:
      'Maîtrisez Sage (SAARI) de A à Z : comptabilité SYSCOHADA, gestion des achats et ventes, paie et déclarations sociales. Formations animées par des experts certifiés.',
  },
  {
    icon: FileSpreadsheet,
    title: 'Outils Bureautiques Professionnels',
    color: 'bg-brand-teal',
    tags: ['Excel', 'Word', 'PowerPoint', 'Outlook'],
    description:
      'Boostez votre productivité avec les outils Microsoft Office : tableaux de bord Excel, documents Word professionnels, présentations PowerPoint percutantes et gestion Outlook.',
  },
  {
    icon: Users,
    title: 'Leadership & Management',
    color: 'bg-brand-blue',
    tags: ["Gestion d'équipe", 'Communication', 'Prise de décision'],
    description:
      'Développez votre posture de leader : management situationnel, communication assertive, gestion des conflits et conduite de réunions. Des ateliers interactifs orientés résultats.',
  },
  {
    icon: Calculator,
    title: 'Assistance Comptable & Fiscale',
    color: 'bg-brand-green-dark',
    tags: ['Tenue comptable', 'Déclarations fiscales', 'Clôture'],
    description:
      'Accompagnement expert en tenue de comptabilité SYSCOHADA, déclarations TVA, BIC et IS, clôture annuelle et optimisation fiscale pour les PME ivoiriennes.',
  },
  {
    icon: Briefcase,
    title: 'Étude & Montage de Projets',
    color: 'bg-brand-blue-mid',
    tags: ['Business plan', 'Étude de rentabilité', 'Financement'],
    description:
      "De l'idée à la réalisation : étude de faisabilité, business plan complet, analyse de rentabilité et montage des dossiers de financement auprès des banques et investisseurs.",
  },
]

export default function ServicesPreview() {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <FadeIn className="text-center mb-14">
          <span className="text-brand-green text-sm font-semibold uppercase tracking-wider">
            Ce que nous faisons
          </span>
          <h2 className="section-title mt-2">Nos Domaines d'Intervention</h2>
          <p className="section-subtitle">
            Une offre complète pour accompagner les professionnels, les PME et les organisations
            vers l'excellence opérationnelle.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <FadeIn key={index} delay={index * 0.08}>
              <div className="card h-full p-6 flex flex-col hover:-translate-y-1 transition-transform duration-300">
                <div className={`${service.color} w-14 h-14 rounded-2xl flex items-center justify-center mb-5 shrink-0`}>
                  <service.icon size={26} className="text-white" strokeWidth={2} />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{service.title}</h3>
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs bg-gray-100 text-gray-600 px-2.5 py-0.5 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <p className="text-gray-500 text-sm leading-relaxed flex-1">{service.description}</p>
              </div>
            </FadeIn>
          ))}

          {/* Carte CTA */}
          <FadeIn delay={services.length * 0.08}>
            <div className="card h-full p-6 flex flex-col items-center justify-center text-center bg-hero-gradient text-white">
              <div className="bg-white/20 w-14 h-14 rounded-2xl flex items-center justify-center mb-4">
                <Handshake size={26} className="text-white" strokeWidth={2} />
              </div>
              <h3 className="text-lg font-semibold mb-3">Solution sur mesure ?</h3>
              <p className="text-sm text-white/80 mb-5">
                Après diagnostic gratuit, nous construisons une offre adaptée à vos besoins réels.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-white text-brand-green font-semibold text-sm px-5 py-2.5 rounded-lg hover:bg-gray-100 transition-colors"
              >
                Discutons-en <ArrowRight size={16} />
              </Link>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
