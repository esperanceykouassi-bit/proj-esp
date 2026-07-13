import { Link } from 'react-router-dom'
import {
  Target, Eye, Award, Users, TrendingUp, Shield,
  CheckCircle, BookOpen, HeartHandshake, Lightbulb,
} from 'lucide-react'
import FadeIn from '../components/FadeIn'

/* ── data ───────────────────────────────────────────── */
const valeurs = [
  {
    icon: Award,
    titre: 'Excellence',
    desc: 'Nous nous engageons à offrir des formations et prestations de la plus haute qualité, adaptées aux standards professionnels internationaux.',
    color: 'bg-brand-green',
  },
  {
    icon: HeartHandshake,
    titre: 'Proximité',
    desc: `Chaque client est unique. Nous bâtissons des relations de confiance durables fondées sur l'écoute, la réactivité et la personnalisation.`,
    color: 'bg-brand-teal',
  },
  {
    icon: Lightbulb,
    titre: 'Innovation pédagogique',
    desc: 'Nos méthodes combinent théorie et pratique intense pour une montée en compétences rapide et durable, ancrée dans le contexte ivoirien.',
    color: 'bg-brand-blue',
  },
  {
    icon: Shield,
    titre: 'Intégrité',
    desc: `Transparence dans nos tarifs, honnêteté dans nos diagnostics et rigueur dans l'exécution de nos missions — sans compromis.`,
    color: 'bg-brand-blue-mid',
  },
  {
    icon: TrendingUp,
    titre: 'Impact mesurable',
    desc: 'Nous mesurons notre succès à travers les progrès concrets de nos apprenants et les résultats tangibles obtenus par nos clients.',
    color: 'bg-brand-green-dark',
  },
  {
    icon: Users,
    titre: `Esprit d'équipe`,
    desc: 'Une équipe pluridisciplinaire de consultants, formateurs et experts comptables unis par la passion du développement des compétences.',
    color: 'bg-purple-600',
  },
]

const atouts = [
  'Formateurs certifiés avec une expérience terrain en entreprise',
  'Programmes 100 % pratiques ancrés dans le contexte ivoirien',
  'Petits groupes pour un suivi individualisé (max 10 participants)',
  'Attestations de formation reconnues par les entreprises partenaires',
  'Accompagnement post-formation : support et ressources inclus',
  'Adaptation aux contraintes horaires (soir, week-end, intra)',
  'Maîtrise du SYSCOHADA et de la fiscalité CI',
  'Réseau de partenaires financiers et institutionnels établis',
]

/* ── component ──────────────────────────────────────── */
export default function About() {
  return (
    <div>

      {/* ── Hero ────────────────────────────────────── */}
      <section className="bg-hero-gradient text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <span className="inline-block bg-white/20 text-xs font-semibold px-4 py-1.5 rounded-full mb-5 uppercase tracking-wider">
              Qui sommes-nous ?
            </span>
            <h1 className="text-4xl md:text-5xl font-bold font-heading mb-5 leading-tight">
              À propos de<br className="hidden sm:block" /> SkillUp Consulting CI
            </h1>
            <p className="text-lg text-white/80 max-w-2xl mx-auto leading-relaxed">
              Un cabinet ivoirien engagé à transformer les compétences professionnelles
              en leviers de croissance pour les individus et les organisations.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ── Histoire / Présentation ─────────────────── */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            <FadeIn>
              <div className="space-y-5">
                <span className="text-brand-green text-sm font-semibold uppercase tracking-wider">
                  Notre histoire
                </span>
                <h2 className="text-3xl md:text-4xl font-bold font-heading text-gray-900">
                  Un cabinet né d'une vision claire
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  SkillUp Consulting CI a été fondé par des professionnels passionnés par le
                  développement du capital humain en Côte d'Ivoire. Face au constat que de
                  nombreuses entreprises peinent à trouver des collaborateurs immédiatement
                  opérationnels sur des outils clés — SAARI, Excel avancé, gestion de projets —
                  nous avons décidé de créer une réponse concrète et locale.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Depuis notre création, nous accompagnons aussi bien les jeunes diplômés en
                  quête d'employabilité que les professionnels en reconversion, les PME qui
                  veulent structurer leur gestion, et les porteurs de projets qui ont besoin
                  d'un plan solide pour accéder au financement.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Basés à Abidjan, nous rayonnons sur l'ensemble du territoire ivoirien et
                  offrons également des sessions à distance pour les participants en région
                  ou à l'étranger.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.15}>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: '500+',  label: 'Apprenants formés' },
                  { value: '5',     label: 'Domaines d\'expertise' },
                  { value: '98 %',  label: 'Taux de satisfaction' },
                  { value: '3 ans', label: 'D\'expérience' },
                ].map(({ value, label }) => (
                  <div
                    key={label}
                    className="bg-gray-50 rounded-2xl p-6 text-center border border-gray-100"
                  >
                    <p className="text-3xl font-bold text-brand-green mb-1">{value}</p>
                    <p className="text-sm text-gray-500 leading-tight">{label}</p>
                  </div>
                ))}
              </div>
            </FadeIn>

          </div>
        </div>
      </section>

      {/* ── Mission & Vision ────────────────────────── */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-12">
            <span className="text-brand-green text-sm font-semibold uppercase tracking-wider">
              Notre boussole
            </span>
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-gray-900 mt-2">
              Mission & Vision
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            <FadeIn delay={0.1}>
              <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm h-full">
                <div className="w-12 h-12 bg-brand-green rounded-xl flex items-center justify-center mb-5">
                  <Target size={22} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Notre Mission</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Offrir des formations professionnelles pratiques et accessibles qui permettent
                  à chaque apprenant de maîtriser les outils et compétences stratégiques
                  exigés par le marché du travail ivoirien et africain.
                </p>
                <ul className="space-y-2.5">
                  {[
                    'Rendre les formations professionnelles accessibles à tous',
                    'Proposer un enseignement 100 % ancré dans la pratique',
                    'Accompagner les PME dans leur structuration et leur croissance',
                    'Favoriser l\'insertion et la reconversion professionnelle',
                  ].map(item => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-gray-700">
                      <CheckCircle size={15} className="text-brand-green shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm h-full">
                <div className="w-12 h-12 bg-brand-blue rounded-xl flex items-center justify-center mb-5">
                  <Eye size={22} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Notre Vision</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Devenir le cabinet de référence en Côte d'Ivoire et dans la sous-région
                  pour la formation professionnelle pratique, l'assistance aux entreprises
                  et le montage de projets à fort impact économique.
                </p>
                <ul className="space-y-2.5">
                  {[
                    'Être le premier choix des entreprises et des particuliers en CI',
                    'Contribuer activement à la transformation économique de la Côte d\'Ivoire',
                    'Étendre notre présence dans toute la sous-région UEMOA',
                    'Créer un écosystème de compétences durable et valorisant',
                  ].map(item => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-gray-700">
                      <CheckCircle size={15} className="text-brand-blue shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>

          </div>
        </div>
      </section>

      {/* ── Nos Valeurs ─────────────────────────────── */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-12">
            <span className="text-brand-green text-sm font-semibold uppercase tracking-wider">
              Ce qui nous guide
            </span>
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-gray-900 mt-2">
              Nos valeurs fondamentales
            </h2>
            <p className="text-gray-500 mt-3 max-w-xl mx-auto">
              Six principes qui orientent chacune de nos décisions et définissent notre
              manière d'accompagner nos clients.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {valeurs.map((v, i) => {
              const Icon = v.icon
              return (
                <FadeIn key={v.titre} delay={i * 0.07}>
                  <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:shadow-md transition-shadow h-full">
                    <div className={`w-11 h-11 ${v.color} rounded-xl flex items-center justify-center mb-4`}>
                      <Icon size={20} className="text-white" />
                    </div>
                    <h3 className="text-base font-bold text-gray-900 mb-2">{v.titre}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{v.desc}</p>
                  </div>
                </FadeIn>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── Pourquoi nous choisir ───────────────────── */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-12">
            <span className="text-brand-green-light text-sm font-semibold uppercase tracking-wider">
              Nos différenciateurs
            </span>
            <h2 className="text-3xl md:text-4xl font-bold font-heading mt-2">
              Pourquoi choisir SkillUp Consulting CI ?
            </h2>
            <p className="text-gray-400 mt-3 max-w-xl mx-auto">
              Ce qui distingue notre approche et justifie la confiance que nos clients nous accordent.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {atouts.map((atout, i) => (
              <FadeIn key={atout} delay={i * 0.06}>
                <div className="flex items-start gap-3 bg-white/5 border border-white/10 rounded-xl px-5 py-4">
                  <CheckCircle size={18} className="text-brand-green-light shrink-0 mt-0.5" />
                  <p className="text-sm text-gray-300 leading-snug">{atout}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────── */}
      <section className="py-16 bg-white text-center">
        <FadeIn>
          <div className="max-w-2xl mx-auto px-4">
            <BookOpen size={36} className="text-brand-green mx-auto mb-4" />
            <h2 className="text-2xl md:text-3xl font-bold font-heading text-gray-900 mb-3">
              Prêt à développer vos compétences ?
            </h2>
            <p className="text-gray-500 mb-7">
              Découvrez notre catalogue de formations ou contactez-nous pour un accompagnement
              personnalisé.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/formations" className="btn-primary">
                Voir nos formations
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 border-2
                  border-brand-green text-brand-green rounded-xl font-semibold hover:bg-brand-green
                  hover:text-white transition-colors duration-200"
              >
                Nous contacter
              </Link>
            </div>
          </div>
        </FadeIn>
      </section>

    </div>
  )
}
