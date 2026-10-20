import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { 
  Calculator, 
  TrendingUp, 
  FolderKanban, 
  GraduationCap, 
  ArrowRight, 
  Calendar, 
  CheckCircle2, 
  Users, 
  Building2, 
  Briefcase, 
  UserCheck, 
  BookOpen, 
  School,
  Handshake
} from 'lucide-react'

export default function Home() {
  return (
    <div className="space-y-20 pb-16">

      {/* 1. HÉROS */}
      <section className="relative bg-gradient-to-br from-[#1A237E] to-[#0D1250] text-white py-20 md:py-28 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">

            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 mb-6"
            >
              <span className="text-xs font-semibold uppercase tracking-wider text-white">
                CABINET DE CONSEIL, D’ASSISTANCE COMPTABLE ET DE FORMATION
              </span>
            </motion.div>

            {/* Titre principal */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-heading leading-tight mb-6"
            >
              Votre partenaire de confiance pour{' '}
              <span className="text-[#8FD9AE]">gérer, structurer et développer</span> votre activité
            </motion.h1>

            {/* Accroche */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-base sm:text-lg text-white/90 leading-relaxed mb-8 max-w-2xl"
            >
              Comptabilité et fiscalité, conseil en management, montage et suivi de projets : nous accompagnons les PME, les organisations et les porteurs de projets, et nous formons leurs équipes.
            </motion.p>

            {/* CTA Strategy */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col gap-4 items-start"
            >
              <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                {/* Principal */}
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-[#1B7A4B] hover:bg-[#155e39] text-white font-bold px-8 py-4 rounded-xl transition-all shadow-lg hover:scale-105"
                >
                  <Calendar size={20} />
                  Prendre rendez-vous
                </Link>

                {/* Secondaire */}
                <Link
                  to="/services"
                  className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-xl border border-white/30 backdrop-blur-md transition-all"
                >
                  Découvrir nos services
                  <ArrowRight size={20} />
                </Link>
              </div>

              {/* Lien Texte */}
              <div className="pt-1">
                <Link
                  to="/formations"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-[#8FD9AE] hover:underline"
                >
                  <GraduationCap size={18} />
                  Voir nos formations
                </Link>
              </div>
            </motion.div>

          </div>
        </div>
      </section>


      {/* 2. BANDEAU PREUVES */}
      <section className="bg-[#1B7A4B] py-8 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="p-2">
              <div className="text-xl sm:text-2xl font-bold font-heading">4 Métiers</div>
              <div className="text-xs sm:text-sm text-white/80">Expertise intégrée</div>
            </div>
            <div className="p-2">
              <div className="text-xl sm:text-2xl font-bold font-heading">SYSCOHADA & SYCEBNL</div>
              <div className="text-xs sm:text-sm text-white/80">Référentiels maîtrisés</div>
            </div>
            <div className="p-2">
              <div className="text-xl sm:text-2xl font-bold font-heading">Présentiel & À distance</div>
              <div className="text-xs sm:text-sm text-white/80">Flexibilité d'intervention</div>
            </div>
            <div className="p-2">
              <div className="text-xl sm:text-2xl font-bold font-heading">Abidjan, Angré</div>
              <div className="text-xs sm:text-sm text-white/80">Proximité & Réactivité</div>
            </div>
          </div>
        </div>
      </section>


      {/* 3. NOS DOMAINES D'INTERVENTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-[#1B7A4B] text-sm font-semibold uppercase tracking-wider">Nos Métiers</span>
          <h2 className="text-3xl font-bold text-[#1A237E] mt-2">Nos domaines d'intervention</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mt-3">
            Quatre métiers complémentaires pour tenir vos comptes, structurer votre organisation, réussir vos projets et faire monter vos équipes en compétences.
          </p>
        </div>

        {/* Groupe 1: Accompagnement des entreprises */}
        <div className="mb-12">
          <h3 className="text-xl font-bold text-[#1A237E] mb-6 pb-2 border-b-2 border-[#1B7A4B]/20 inline-block">
            Accompagnement des entreprises & organisations
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            {/* Carte 1 : Comptabilité & Fiscalité */}
            <div className="bg-[#EEF0F8] p-6 rounded-2xl border border-gray-100 flex flex-col justify-between hover:shadow-md transition-shadow">
              <div>
                <div className="w-12 h-12 bg-[#1A237E] text-white rounded-xl flex items-center justify-center mb-4">
                  <Calculator size={24} />
                </div>
                <h4 className="text-lg font-bold text-[#1A237E] mb-2">Assistance comptable, financière & fiscale</h4>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  Tenue et révision comptable SYSCOHADA et SYCEBNL, déclarations fiscales et sociales, états financiers et accompagnement à la DGI.
                </p>
              </div>
              <Link to="/services#comptabilite" className="text-xs font-bold text-[#1A237E] hover:text-[#1B7A4B] inline-flex items-center gap-1">
                En savoir plus <ArrowRight size={14} />
              </Link>
            </div>

            {/* Carte 2 : Conseil en management */}
            <div className="bg-[#E8F3ED] p-6 rounded-2xl border border-gray-100 flex flex-col justify-between hover:shadow-md transition-shadow">
              <div>
                <div className="w-12 h-12 bg-[#1B7A4B] text-white rounded-xl flex items-center justify-center mb-4">
                  <TrendingUp size={24} />
                </div>
                <h4 className="text-lg font-bold text-[#1A237E] mb-2">Conseil en management & organisation</h4>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  Tableaux de bord de gestion, suivi budgétaire, diagnostic organisationnel, optimisation des coûts et contrôle interne.
                </p>
              </div>
              <Link to="/services#management" className="text-xs font-bold text-[#1B7A4B] hover:text-[#1A237E] inline-flex items-center gap-1">
                En savoir plus <ArrowRight size={14} />
              </Link>
            </div>

            {/* Carte 3 : Projets */}
            <div className="bg-[#EEF0F8] p-6 rounded-2xl border border-gray-100 flex flex-col justify-between hover:shadow-md transition-shadow">
              <div>
                <div className="w-12 h-12 bg-[#1A237E] text-white rounded-xl flex items-center justify-center mb-4">
                  <FolderKanban size={24} />
                </div>
                <h4 className="text-lg font-bold text-[#1A237E] mb-2">Étude, montage & gestion de projets</h4>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  Études de faisabilité, business plans bancaires, structuration de dossiers de financement et suivi-évaluation de projets.
                </p>
              </div>
              <Link to="/services#projets" className="text-xs font-bold text-[#1A237E] hover:text-[#1B7A4B] inline-flex items-center gap-1">
                En savoir plus <ArrowRight size={14} />
              </Link>
            </div>

          </div>
        </div>

        {/* Groupe 2: Formations professionnelles */}
        <div>
          <h3 className="text-xl font-bold text-[#1A237E] mb-6 pb-2 border-b-2 border-[#1B7A4B]/20 inline-block">
            Formations professionnelles
          </h3>
          <div className="bg-[#E8F3ED] p-8 rounded-2xl border border-[#1B7A4B]/30 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 bg-[#1B7A4B] text-white rounded-2xl flex items-center justify-center shrink-0">
                <GraduationCap size={28} />
              </div>
              <div>
                <h4 className="text-xl font-bold text-[#1A237E] mb-1">Formation professionnelle pratique</h4>
                <p className="text-gray-700 text-sm leading-relaxed max-w-2xl">
                  Renforcement des compétences de vos équipes sur des cas réels : Comptabilité SYSCOHADA, logiciels Sage 100 (ex-SAARI), Microsoft Excel, Gestion de projet et Leadership managérial.
                </p>
              </div>
            </div>
            <Link
              to="/formations"
              className="bg-[#1B7A4B] hover:bg-[#155e39] text-white font-bold px-6 py-3 rounded-xl transition-colors whitespace-nowrap"
            >
              Voir le catalogue des formations
            </Link>
          </div>
        </div>

        {/* Encart Diagnostic */}
        <div className="mt-10 bg-[#EEF0F8] rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4 border border-gray-200">
          <div className="flex items-center gap-3">
            <Handshake className="text-[#1A237E]" size={28} />
            <div>
              <div className="font-bold text-[#1A237E]">Besoin d'une solution sur mesure ?</div>
              <div className="text-xs text-gray-600">Nos consultants analysent la situation spécifique de votre entreprise.</div>
            </div>
          </div>
          <Link
            to="/contact"
            className="bg-[#1A237E] hover:bg-[#0D1250] text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors"
          >
            Demander un diagnostic
          </Link>
        </div>
      </section>


      {/* 4. NOS CIBLES STRATÉGIQUES */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-[#1B7A4B] text-sm font-semibold uppercase tracking-wider">Accompagnement cibilité</span>
            <h2 className="text-3xl font-bold text-[#1A237E] mt-2">À qui s'adressent nos services ?</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

            {/* Cible 1 */}
            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
              <Building2 className="text-[#1A237E] mb-3" size={28} />
              <h3 className="font-bold text-gray-900 mb-1">PME & PMI</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Une comptabilité à jour, des déclarations dans les délais et des tableaux de bord pour piloter votre activité en toute sérénité.
              </p>
            </div>

            {/* Cible 2 */}
            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
              <Users className="text-[#1B7A4B] mb-3" size={28} />
              <h3 className="font-bold text-gray-900 mb-1">Organisations, ONG & Institutions</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Gestion financière conforme au SYCEBNL, rapports d'exécution budgétaire et suivi-évaluation rigoureux pour vos bailleurs.
              </p>
            </div>

            {/* Cible 3 */}
            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
              <Briefcase className="text-[#1A237E] mb-3" size={28} />
              <h3 className="font-bold text-gray-900 mb-1">Porteurs de projets & Entrepreneurs</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Montage de business plans bancables, études de faisabilité et accompagnement à la recherche de financements.
              </p>
            </div>

            {/* Cible 4 */}
            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
              <UserCheck className="text-[#1B7A4B] mb-3" size={28} />
              <h3 className="font-bold text-gray-900 mb-1">Professionnels & Cadres</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Montée en compétences ciblée sur les logiciels de gestion (Sage 100, Excel) et renforcement de la posture managériale.
              </p>
            </div>

            {/* Cible 5 */}
            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
              <BookOpen className="text-[#1A237E] mb-3" size={28} />
              <h3 className="font-bold text-gray-900 mb-1">Élèves & Étudiants</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Immersion pratique pour combler le fossé académique et réussir votre insertion professionnelle rapide dans les métiers de la gestion.
              </p>
            </div>

            {/* Cible 6 */}
            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
              <School className="text-[#1B7A4B] mb-3" size={28} />
              <h3 className="font-bold text-gray-900 mb-1">Établissements d'enseignement</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Modules complémentaires pratiques en logiciels de gestion et comptabilité pour enrichir le parcours de vos étudiants.
              </p>
            </div>

          </div>
        </div>
      </section>


      {/* 5. POURQUOI CHOISIR SKILLUP ? */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#1A237E] rounded-3xl text-white p-8 md:p-12">
          <div className="max-w-3xl mb-10">
            <span className="text-[#8FD9AE] text-sm font-semibold uppercase tracking-wider">Atouts clés</span>
            <h2 className="text-3xl font-bold mt-2">Pourquoi choisir SkillUp Consulting CI ?</h2>
            <p className="text-white/80 text-sm mt-3">
              Entreprises, ONG et professionnels nous confient leur comptabilité, leurs projets et la formation de leurs équipes. Voici pourquoi.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex gap-4">
              <CheckCircle2 className="text-[#8FD9AE] shrink-0" size={24} />
              <div>
                <h3 className="font-bold text-lg mb-1">Expertise comptable, financière & fiscale</h3>
                <p className="text-xs text-white/80 leading-relaxed">
                  Nos consultants et formateurs cumulent une solide pratique du SYSCOHADA révisé, du SYCEBNL et de la fiscalité ivoirienne.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <CheckCircle2 className="text-[#8FD9AE] shrink-0" size={24} />
              <div>
                <h3 className="font-bold text-lg mb-1">Interlocuteur unique</h3>
                <p className="text-xs text-white/80 leading-relaxed">
                  Un suivi intégré couvrant la tenue de vos comptes, le conseil de gestion, le suivi de projet et le renforcement des compétences de vos équipes.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <CheckCircle2 className="text-[#8FD9AE] shrink-0" size={24} />
              <div>
                <h3 className="font-bold text-lg mb-1">Solutions adaptées aux réalités locales</h3>
                <p className="text-xs text-white/80 leading-relaxed">
                  Des méthodologies d'accompagnement pragmatiques conçues pour l'environnement économique et fiscal ivoirien.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <CheckCircle2 className="text-[#8FD9AE] shrink-0" size={24} />
              <div>
                <h3 className="font-bold text-lg mb-1">Formations 100 % pratiques</h3>
                <p className="text-xs text-white/80 leading-relaxed">
                  Des sessions interactives en présentiel ou à distance, basées sur des cas réels d'entreprises et adaptées à vos horaires.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* 6. APPEL À L'ACTION FINAL */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-[#E8F3ED] rounded-3xl p-10 md:p-14 border border-[#1B7A4B]/20">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#1A237E] mb-4">
            Parlons de votre projet
          </h2>
          <p className="text-gray-700 max-w-xl mx-auto mb-8 text-sm sm:text-base leading-relaxed">
            Comptabilité, conseil, projet ou formation : dites-nous où vous en êtes, nous vous proposons une solution adaptée.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-[#1B7A4B] hover:bg-[#155e39] text-white font-bold px-8 py-4 rounded-xl transition-colors inline-flex items-center justify-center gap-2"
            >
              <Calendar size={20} />
              Prendre rendez-vous
            </Link>
            <Link
              to="/formations"
              className="bg-white hover:bg-gray-50 text-[#1A237E] font-semibold px-8 py-4 rounded-xl border border-gray-300 transition-colors inline-flex items-center justify-center gap-2"
            >
              S'inscrire à une formation
            </Link>
          </div>
        </div>
      </section>

    </div>
  )
}