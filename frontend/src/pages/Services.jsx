import { Link } from 'react-router-dom'
import {
  Monitor, FileSpreadsheet, Users, Calculator, Briefcase,
  CheckCircle, ArrowRight,
} from 'lucide-react'
import FadeIn from '../components/FadeIn'

/* ── data ───────────────────────────────────────────── */
const services = [
  {
    id: 'saari',
    icon: Monitor,
    color: 'bg-brand-green',
    badge: 'Logiciels SAARI',
    titre: 'Formation en Logiciels de Gestion SAARI',
    intro: `Maîtrisez les logiciels Sage (SAARI) — standards incontournables de la gestion
d'entreprise en Côte d'Ivoire. Nos formateurs certifiés vous accompagnent de la
prise en main jusqu'à la maîtrise avancée, en formation individuelle ou en groupe.`,
    modules: [
      {
        label: 'Sage Comptabilité 100',
        items: [
          'Paramétrage du plan comptable SYSCOHADA',
          'Saisie des pièces comptables (achat, vente, banque)',
          'Lettrage, rapprochement bancaire',
          'États financiers : bilan, compte de résultat',
          'Clôture mensuelle et annuelle',
        ],
      },
      {
        label: 'Sage Gestion Commerciale',
        items: [
          'Gestion des articles, familles et tarifs',
          'Devis, bons de commande, factures clients',
          'Gestion des achats et fournisseurs',
          'Suivi des stocks et inventaires',
          'États de ventes et tableaux de bord',
        ],
      },
      {
        label: 'Sage Paie & Ressources Humaines',
        items: [
          'Paramétrage des rubriques de paie',
          'Calcul des bulletins de salaire',
          'Gestion des congés et absences',
          'Déclarations sociales (CNPS, CMU)',
          'Virements et états de charges patronales',
        ],
      },
    ],
  },
  {
    id: 'bureautique',
    icon: FileSpreadsheet,
    color: 'bg-brand-teal',
    badge: 'Bureautique',
    titre: 'Formation en Outils Bureautiques Professionnels',
    intro: `Transformez votre maîtrise des outils bureautiques en véritable atout compétitif.
Des formations adaptées à tous les niveaux pour gagner en efficacité au quotidien
et produire des documents professionnels irréprochables.`,
    modules: [
      {
        label: 'Microsoft Excel (tous niveaux)',
        items: [
          'Formules avancées : INDEX, EQUIV, RECHERCHEV, SI imbriqués',
          'Tableaux croisés dynamiques et graphiques',
          'Validation des données et mises en forme conditionnelles',
          `Macros VBA pour l'automatisation des tâches répétitives`,
          'Tableaux de bord interactifs et outils de reporting',
        ],
      },
      {
        label: 'Microsoft Word & PowerPoint',
        items: [
          'Mise en page professionnelle, styles et modèles',
          'Publipostage et documents automatisés',
          'Conception de présentations percutantes',
          'Infographies, diagrammes et animations',
          'Préparation à la prise de parole avec support visuel',
        ],
      },
      {
        label: 'Microsoft Outlook & Google Workspace',
        items: [
          'Gestion efficace des e-mails et filtres intelligents',
          'Agenda, réunions et partage de calendrier',
          'Google Drive, Docs, Sheets et Slides collaboratifs',
          'Google Forms et gestion de formulaires',
          'Bonnes pratiques de collaboration à distance',
        ],
      },
    ],
  },
  {
    id: 'leadership',
    icon: Users,
    color: 'bg-brand-blue',
    badge: 'Leadership',
    titre: 'Formation en Leadership & Management',
    intro: `Développez les compétences comportementales et managériales indispensables
pour diriger avec impact. Des ateliers interactifs ancrés dans le contexte
professionnel ivoirien, conçus pour les managers en poste et les futurs leaders.`,
    modules: [
      {
        label: 'Leadership & Posture Managériale',
        items: [
          'Comprendre son style de leadership (outil DISC)',
          'Développer son autorité naturelle et sa crédibilité',
          'Fixer des objectifs SMART et suivre la performance',
          'Déléguer efficacement et responsabiliser ses équipes',
          'Gérer la pression et prendre des décisions sous contrainte',
        ],
      },
      {
        label: 'Communication Professionnelle',
        items: [
          'Techniques de communication assertive',
          'Conduite de réunions productives',
          'Gestion des conflits et médiation',
          'Prise de parole en public et expression orale',
          'Communication non violente (CNV) en entreprise',
        ],
      },
      {
        label: 'Management de Projet',
        items: [
          'Méthodes de gestion de projet (PMBoK, Agile basique)',
          'Planification avec le diagramme de Gantt',
          'Identification et gestion des risques',
          'Suivi des coûts, délais et qualité (triangle de projet)',
          `Rédaction de rapports d'avancement et de clôture`,
        ],
      },
    ],
  },
  {
    id: 'comptabilite',
    icon: Calculator,
    color: 'bg-brand-green-dark',
    badge: 'Assistance Comptable',
    titre: 'Assistance Comptable & Fiscale',
    intro: `Un accompagnement expert en comptabilité et fiscalité adapté aux réalités
des PME ivoiriennes. Nous assurons la conformité de votre entreprise
tout en optimisant votre charge fiscale dans le strict respect de la loi.`,
    modules: [
      {
        label: 'Tenue de Comptabilité',
        items: [
          'Saisie et classement des pièces comptables',
          'Tenue des livres conformes au SYSCOHADA révisé',
          'Rapprochement bancaire et suivi de trésorerie',
          'Gestion de la paie et des charges sociales',
          'Préparation des états financiers annuels',
        ],
      },
      {
        label: 'Déclarations Fiscales',
        items: [
          'Déclarations de TVA mensuelles et trimestrielles',
          'Déclarations BIC, IS et impôt sur les traitements et salaires',
          'Patente, taxe foncière et contribution des patentes',
          'Gestion des contentieux fiscaux et réponses DGI',
          'Suivi des délais et obligations déclaratives',
        ],
      },
      {
        label: 'Conseil & Optimisation',
        items: [
          'Audit comptable et diagnostic financier',
          'Optimisation fiscale légale et planification',
          'Restructuration comptable des entreprises en difficulté',
          'Formation de vos collaborateurs comptables internes',
          'Accompagnement lors de contrôles fiscaux',
        ],
      },
    ],
  },
  {
    id: 'projets',
    icon: Briefcase,
    color: 'bg-brand-blue-mid',
    badge: 'Montage de Projets',
    titre: 'Étude & Montage de Projets',
    intro: `De l'idée à la réalisation, nous structurons et défendons vos projets
d'investissement. Notre équipe vous accompagne à chaque étape du montage
jusqu'à l'obtention du financement auprès des banques et investisseurs.`,
    modules: [
      {
        label: 'Études & Analyses',
        items: [
          'Étude de faisabilité technique et économique',
          'Analyse de marché et étude de la concurrence',
          'Enquête terrain et collecte de données primaires',
          'Diagnostic SWOT et positionnement stratégique',
          'Évaluation des risques et scénarios de sensibilité',
        ],
      },
      {
        label: 'Montage du Dossier',
        items: [
          'Rédaction du business plan complet et détaillé',
          'Élaboration du plan financier sur 3 à 5 ans',
          'Montage des ratios et indicateurs de rentabilité',
          'Dossier de demande de financement bancaire',
          'Présentation aux comités de crédit et investisseurs',
        ],
      },
      {
        label: 'Accompagnement & Suivi',
        items: [
          'Mise en relation avec les banques partenaires (SGCI, BNI, Coris…)',
          `Accompagnement dans les structures d'appui (FDFP, BNETD…)`,
          `Suivi de l'instruction du dossier de crédit`,
          'Appui à la mise en place des garanties',
          'Suivi post-financement et tableau de bord de gestion',
        ],
      },
    ],
  },
]

/* ── component ──────────────────────────────────────── */
export default function Services() {
  return (
    <div>

      {/* ── Hero ──────────────────────────────────────── */}
      <section className="bg-hero-gradient text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <span className="inline-block bg-white/20 text-xs font-semibold px-4 py-1.5 rounded-full mb-5 uppercase tracking-wider">
              Notre offre complète
            </span>
            <h1 className="text-4xl md:text-5xl font-bold font-heading mb-5 leading-tight">
              Nos Services &amp; Expertises
            </h1>
            <p className="text-lg text-white/80 max-w-2xl mx-auto leading-relaxed">
              Cinq domaines d'expertise complémentaires pour accompagner votre montée
              en compétences et la performance de votre organisation.
            </p>
            {/* Anchor nav */}
            <div className="flex flex-wrap justify-center gap-3 mt-8">
              {services.map(s => (
                <a
                  key={s.id}
                  href={`#${s.id}`}
                  className="text-xs font-semibold px-4 py-2 bg-white/15 hover:bg-white/25
                    border border-white/30 rounded-full transition-colors"
                >
                  {s.badge}
                </a>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── Service sections ──────────────────────────── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        {services.map((service, si) => {
          const Icon = service.icon
          const isEven = si % 2 === 0

          return (
            <FadeIn key={service.id} delay={0.05}>
              <section id={service.id} className="scroll-mt-20">
                {/* Section header */}
                <div className={`flex flex-col md:flex-row items-start gap-5 mb-8
                  ${!isEven ? 'md:flex-row-reverse' : ''}`}>
                  <div className={`${service.color} w-14 h-14 rounded-2xl flex items-center
                    justify-center shrink-0 shadow-md`}>
                    <Icon size={26} className="text-white" />
                  </div>
                  <div>
                    <span className={`inline-block text-xs font-bold uppercase tracking-wider
                      px-3 py-1 rounded-full mb-2
                      ${isEven
                        ? 'bg-brand-green/10 text-brand-green'
                        : 'bg-brand-blue/10 text-brand-blue'}`}>
                      {service.badge}
                    </span>
                    <h2 className="text-2xl md:text-3xl font-bold font-heading text-gray-900">
                      {service.titre}
                    </h2>
                    <p className="text-gray-500 mt-2 leading-relaxed max-w-2xl whitespace-pre-line">
                      {service.intro}
                    </p>
                  </div>
                </div>

                {/* Modules grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                  {service.modules.map((mod) => (
                    <div
                      key={mod.label}
                      className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 hover:shadow-md transition-shadow"
                    >
                      <h3 className="font-bold text-gray-800 mb-4 text-sm border-b border-gray-100 pb-3">
                        {mod.label}
                      </h3>
                      <ul className="space-y-2.5">
                        {mod.items.map(item => (
                          <li key={item} className="flex items-start gap-2.5 text-sm text-gray-600">
                            <CheckCircle size={14} className="text-brand-green shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                {/* Divider (not last) */}
                {si < services.length - 1 && (
                  <div className="mt-16 border-t border-gray-100" />
                )}
              </section>
            </FadeIn>
          )
        })}
      </div>

      {/* ── CTA ───────────────────────────────────────── */}
      <section className="bg-gray-900 text-white py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <FadeIn>
            <h2 className="text-2xl md:text-3xl font-bold font-heading mb-4">
              Un besoin spécifique ? Parlons-en.
            </h2>
            <p className="text-gray-400 mb-8 leading-relaxed">
              Nous adaptons nos programmes à votre secteur, votre niveau et vos objectifs.
              Formations intra-entreprise, sessions intensives, accompagnement individuel :
              aucune demande n'est trop spécifique.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5
                  bg-brand-green rounded-xl font-semibold text-white hover:bg-brand-green-dark
                  transition-colors"
              >
                Nous contacter
                <ArrowRight size={16} />
              </Link>
              <Link
                to="/formations"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5
                  border border-white/20 rounded-xl font-semibold text-white
                  hover:bg-white/10 transition-colors"
              >
                Voir les formations
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

    </div>
  )
}
