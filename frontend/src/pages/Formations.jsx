import { Link } from 'react-router-dom'
import {
  Monitor, FileSpreadsheet, Users, Calculator, Briefcase,
  CheckCircle, ArrowRight,
} from 'lucide-react'
import FadeIn from '../components/FadeIn'

/* ── Données des formations ────────────────────────── */
const formations = [
  {
    id: 'saari',
    icon: Monitor,
    color: 'bg-brand-green',
    badge: 'SAARI',
    titre: 'Formations en Logiciels de Gestion SAARI',
    intro: `Maîtrisez les logiciels Sage (SAARI), standards incontournables de la gestion d'entreprise en Côte d'Ivoire. Nos programmes pratiques couvrent de la prise en main jusqu'à l'utilisation avancée.`,
    modules: [
      {
        label: 'Sage Comptabilité 100',
        items: [
          'Paramétrage du plan comptable SYSCOHADA',
          'Saisie des pièces comptables (achat, vente, banque)',
          'Lettrage et rapprochement bancaire',
          'États financiers : bilan et compte de résultat',
          'Clôtures mensuelles et annuelles',
        ],
      },
      {
        label: 'Sage Gestion Commerciale',
        items: [
          'Gestion des articles, familles et tarifs',
          'Émission de devis, bons de commande et factures',
          'Suivi des achats, fournisseurs et stocks',
          'Réalisation des inventaires physiques',
          'Tableaux de bord des ventes',
        ],
      },
      {
        label: 'Sage Paie & RH',
        items: [
          'Paramétrage des rubriques de paie',
          'Calcul et impression des bulletins de salaire',
          'Gestion des congés et absences',
          'Déclarations sociales (CNPS, CMU)',
          'États des charges patronales et virements',
        ],
      },
    ],
  },
  {
    id: 'bureautique',
    icon: FileSpreadsheet,
    color: 'bg-brand-teal',
    badge: 'Bureautique',
    titre: 'Formations en Outils Bureautiques Professionnels',
    intro: `Optimisez votre temps et gagnez en productivité. Des modules sur-mesure pour maîtriser les outils bureautiques essentiels en milieu professionnel.`,
    modules: [
      {
        label: 'Microsoft Excel (Tous Niveaux)',
        items: [
          'Formules avancées : RECHERCHEV, XLOOKUP, SI imbriqués',
          'Tableaux croisés dynamiques et graphiques',
          'Mises en forme conditionnelles et validation',
          'Automatisation des tâches répétitives',
          'Conception de tableaux de bord interactifs',
        ],
      },
      {
        label: 'Microsoft Word & PowerPoint',
        items: [
          'Création de modèles et styles de documents',
          'Publipostage et documents complexes',
          'Conception de présentations impactantes',
          'Mise en page de rapports d’activité',
          'Supports visuels et animations professionnelles',
        ],
      },
      {
        label: 'Collaboration & Cloud',
        items: [
          'Gestion optimisée des mails avec Outlook',
          'Partage d’agendas et gestion du temps',
          'Travail collaboratif sur Google Workspace',
          'Gestion documentaire sécurisée sur le Cloud',
          'Bonnes pratiques du travail à distance',
        ],
      },
    ],
  },
  {
    id: 'leadership',
    icon: Users,
    color: 'bg-brand-blue',
    badge: 'Leadership',
    titre: 'Formations en Leadership & Management',
    intro: `Développez votre posture de leader et renforcez la cohésion de vos équipes grâce à des ateliers axés sur les réalités managériales en Côte d'Ivoire.`,
    modules: [
      {
        label: 'Posture Managériale',
        items: [
          'Identification de son style de leadership',
          'Fixation d’objectifs SMART et suivi',
          'Délégation efficace et responsabilisation',
          'Gestion du temps et des priorités',
          'Prise de décision en situation de pression',
        ],
      },
      {
        label: 'Communication & Équipe',
        items: [
          'Techniques de communication assertive',
          'Prise de parole en public et expression oral',
          'Conduite de réunions efficaces',
          'Gestion des conflits et médiation',
          'Motivation et animation d’équipe',
        ],
      },
      {
        label: 'Gestion de Projet',
        items: [
          'Bases de la gestion de projet',
          'Planification et suivi avec le diagramme de Gantt',
          'Identification et maîtrise des risques',
          'Gestion des délais, coûts et qualité',
          'Rédaction de bilans et rapports de projet',
        ],
      },
    ],
  },
  {
    id: 'comptabilite',
    icon: Calculator,
    color: 'bg-brand-green-dark',
    badge: 'Comptabilité',
    titre: 'Formations en Pratique Comptable & Fiscale',
    intro: `Renforcez vos connaissances théoriques et pratiques en comptabilité SYSCOHADA et fiscalité ivoirienne pour assurer la conformité de vos opérations.`,
    modules: [
      {
        label: 'Pratique Comptable',
        items: [
          'Tenue de comptabilité générale SYSCOHADA',
          'Analyse et contrôle des comptes',
          'Élaboration de la balance et du grand livre',
          'Travaux d’inventaire de fin d’exercice',
          'Montage des états financiers annuels',
        ],
      },
      {
        label: 'Fiscalité Pratique',
        items: [
          'Mécanisme et déclarations de TVA',
          'Impôts sur les salaires (ITS) et charges sociales',
          'Impôt sur les Sociétés (IS) et BIC',
          'Patentes, taxes foncières et obligations DGI',
          'Gestion des contrôles et redressements fiscaux',
        ],
      },
      {
        label: 'Gestion de Trésorerie',
        items: [
          'Établissement du plan de trésorerie',
          'Suivi des encaissements et décaissements',
          'Gestion des relations bancaires',
          'Prévisions de trésorerie à court et moyen terme',
          'Réduction des risques de décalage de trésorerie',
        ],
      },
    ],
  },
  {
    id: 'projets',
    icon: Briefcase,
    color: 'bg-brand-blue-mid',
    badge: 'Gestion de Projets',
    titre: 'Formations en Étude & Gestion de Projets',
    intro: `Acquérez la méthodologie complète pour structurer, rédiger et présenter des projets d'investissement crédibles aux banques et partenaires financiers.`,
    modules: [
      {
        label: 'Études Préalables',
        items: [
          'Analyse de faisabilité technique et commerciale',
          'Étude de marché et positionnement',
          'Diagnostic SWOT et analyse de la concurrence',
          'Évaluation des besoins d’investissement',
          'Analyse des risques du projet',
        ],
      },
      {
        label: 'Business Plan & Modèle Financier',
        items: [
          'Rédaction narrative du Business Plan',
          'Construction du compte de résultat prévisionnel',
          'Plan de financement et tableau de trésorerie',
          'Calcul des indicateurs de rentabilité (VAN, TRI)',
          'Analyse du point d’équilibre (seuil de rentabilité)',
        ],
      },
      {
        label: 'Dossier de Financement',
        items: [
          'Constitution du dossier bancaire',
          'Techniques de présentation devant un comité de crédit',
          'Négociation des conditions de prêt',
          'Suivi du déblocage et garanties',
          'Suivi post-financement',
        ],
      },
    ],
  },
]

/* ── Composant principal ───────────────────────────── */
export default function Formations() {
  return (
    <div>

      {/* ── Hero ──────────────────────────────────────── */}
      <section className="bg-hero-gradient text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <span className="inline-block bg-white/20 text-xs font-semibold px-4 py-1.5 rounded-full mb-5 uppercase tracking-wider">
              Catalogue complet
            </span>
            <h1 className="text-4xl md:text-5xl font-bold font-heading mb-5 leading-tight">
              Nos Programmes de Formation
            </h1>
            <p className="text-lg text-white/80 max-w-2xl mx-auto leading-relaxed">
              Des formations 100% pratiques, dispensées par des professionnels du terrain pour développer des compétences directement applicables.
            </p>
            {/* Ancre de navigation */}
            <div className="flex flex-wrap justify-center gap-3 mt-8">
              {formations.map(f => (
                <a
                  key={f.id}
                  href={`#${f.id}`}
                  className="text-xs font-semibold px-4 py-2 bg-white/15 hover:bg-white/25 border border-white/30 rounded-full transition-colors"
                >
                  {f.badge}
                </a>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── Sections Formations ────────────────────────── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        {formations.map((formation, fi) => {
          const Icon = formation.icon
          const isEven = fi % 2 === 0

          return (
            <FadeIn key={formation.id} delay={0.05}>
              <section id={formation.id} className="scroll-mt-20">
                {/* En-tête de la formation */}
                <div className={`flex flex-col md:flex-row items-start gap-5 mb-8 ${!isEven ? 'md:flex-row-reverse' : ''}`}>
                  <div className={`${formation.color} w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 shadow-md`}>
                    <Icon size={26} className="text-white" />
                  </div>
                  <div>
                    <span className={`inline-block text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-2 ${
                      isEven
                        ? 'bg-brand-green/10 text-brand-green'
                        : 'bg-brand-blue/10 text-brand-blue'
                    }`}>
                      {formation.badge}
                    </span>
                    <h2 className="text-2xl md:text-3xl font-bold font-heading text-gray-900">
                      {formation.titre}
                    </h2>
                    <p className="text-gray-500 mt-2 leading-relaxed max-w-2xl whitespace-pre-line">
                      {formation.intro}
                    </p>
                  </div>
                </div>

                {/* Grille des modules */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                  {formation.modules.map((mod) => (
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

                {/* Séparateur */}
                {fi < formations.length - 1 && (
                  <div className="mt-16 border-t border-gray-100" />
                )}
              </section>
            </FadeIn>
          )
        })}
      </div>

      {/* ── Section Appel à l'action (CTA) ───────────────── */}
      <section className="bg-gray-900 text-white py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <FadeIn>
            <h2 className="text-2xl md:text-3xl font-bold font-heading mb-4">
              Besoin d'un programme de formation sur-mesure ?
            </h2>
            <p className="text-gray-400 mb-8 leading-relaxed">
              Nous adaptons le contenu, le calendrier et le format (individuel ou intra-entreprise) aux besoins spécifiques de vos collaborateurs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-brand-green rounded-xl font-semibold text-white hover:bg-brand-green-dark transition-colors"
              >
                Demander un devis
                <ArrowRight size={16} />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 border border-white/20 rounded-xl font-semibold text-white hover:bg-white/10 transition-colors"
              >
                Découvrir nos services
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

    </div>
  )
}