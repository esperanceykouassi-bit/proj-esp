import { motion } from 'framer-motion'
import { Link, Link as RouterLink } from 'react-router-dom'
import { 
  Calculator, 
  TrendingUp, 
  FolderKanban, 
  GraduationCap, 
  CheckCircle2, 
  Calendar, 
  Phone, 
  ArrowRight,
  ShieldCheck,
  FileSpreadsheet,
  PieChart,
  HelpCircle
} from 'lucide-react'

export default function Services() {
  return (
    <div className="space-y-20 pb-16">

      {/* 1. HÉROS */}
      <section className="bg-gradient-to-br from-[#1A237E] to-[#0D1250] text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider text-[#8FD9AE] mb-4 border border-white/20"
          >
            NOS SERVICES
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold font-heading mb-6"
          >
            Nos services d'accompagnement
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-lg text-white/90 max-w-3xl mx-auto leading-relaxed mb-10"
          >
            Quatre métiers complémentaires pour sécuriser votre gestion, structurer votre organisation, réussir vos projets et faire monter vos équipes en compétences.
          </motion.p>

          {/* Pastilles interactives vers les sections */}
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            <a href="#comptabilite" className="bg-white/10 hover:bg-white/20 border border-white/20 text-xs sm:text-sm font-medium px-4 py-2 rounded-full transition-colors">
              Assistance comptable, financière & fiscale
            </a>
            <a href="#management" className="bg-white/10 hover:bg-white/20 border border-white/20 text-xs sm:text-sm font-medium px-4 py-2 rounded-full transition-colors">
              Conseil en management
            </a>
            <a href="#projets" className="bg-white/10 hover:bg-white/20 border border-white/20 text-xs sm:text-sm font-medium px-4 py-2 rounded-full transition-colors">
              Étude, montage & gestion de projets
            </a>
            <RouterLink to="/formations" className="bg-[#1B7A4B] hover:bg-[#155e39] text-white text-xs sm:text-sm font-semibold px-4 py-2 rounded-full transition-colors inline-flex items-center gap-1.5">
              <GraduationCap size={16} />
              Formation pratique
            </RouterLink>
          </div>
        </div>
      </section>


      {/* 2. ASSISTANCE COMPTABLE, FINANCIÈRE & FISCALE */}
      <section id="comptabilite" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-28">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 bg-[#1A237E] text-white rounded-xl flex items-center justify-center shrink-0">
            <Calculator size={24} />
          </div>
          <div>
            <span className="text-[#1B7A4B] text-xs font-semibold uppercase tracking-wider">Métier 1</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1A237E]">Assistance comptable, financière & fiscale</h2>
          </div>
        </div>
        
        <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-8 max-w-3xl">
          Une comptabilité à jour, des déclarations dans les délais et des chiffres fiables pour décider. Pour les PME, les professions libérales, les ONG et les associations.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          <div className="bg-[#EEF0F8] p-6 rounded-2xl border border-gray-100">
            <FileSpreadsheet className="text-[#1A237E] mb-4" size={28} />
            <h3 className="font-bold text-[#1A237E] text-lg mb-3">Tenue & Révision comptable</h3>
            <ul className="space-y-2 text-xs text-gray-700">
              <li className="flex items-start gap-2"><CheckCircle2 size={14} className="text-[#1B7A4B] shrink-0 mt-0.5" /> Tenue quotidienne ou périodique de la comptabilité</li>
              <li className="flex items-start gap-2"><CheckCircle2 size={14} className="text-[#1B7A4B] shrink-0 mt-0.5" /> Mise à jour et reconstitution de comptabilité</li>
              <li className="flex items-start gap-2"><CheckCircle2 size={14} className="text-[#1B7A4B] shrink-0 mt-0.5" /> États financiers SYSCOHADA et SYCEBNL</li>
              <li className="flex items-start gap-2"><CheckCircle2 size={14} className="text-[#1B7A4B] shrink-0 mt-0.5" /> Clôture annuelle et bilans comptables</li>
            </ul>
          </div>

          <div className="bg-[#EEF0F8] p-6 rounded-2xl border border-gray-100">
            <ShieldCheck className="text-[#1A237E] mb-4" size={28} />
            <h3 className="font-bold text-[#1A237E] text-lg mb-3">Déclarations fiscales & sociales</h3>
            <ul className="space-y-2 text-xs text-gray-700">
              <li className="flex items-start gap-2"><CheckCircle2 size={14} className="text-[#1B7A4B] shrink-0 mt-0.5" /> Déclarations mensuelles (TVA, ITS, FDFP)</li>
              <li className="flex items-start gap-2"><CheckCircle2 size={14} className="text-[#1B7A4B] shrink-0 mt-0.5" /> Patente et impôts locaux (contribution des patentes, taxe foncière)</li>
              <li className="flex items-start gap-2"><CheckCircle2 size={14} className="text-[#1B7A4B] shrink-0 mt-0.5" /> Déclarations CNPS et CMU</li>
              <li className="flex items-start gap-2"><CheckCircle2 size={14} className="text-[#1B7A4B] shrink-0 mt-0.5" /> Préparation des réponses aux demandes et notifications de la DGI</li>
            </ul>
          </div>

          <div className="bg-[#EEF0F8] p-6 rounded-2xl border border-gray-100">
            <PieChart className="text-[#1A237E] mb-4" size={28} />
            <h3 className="font-bold text-[#1A237E] text-lg mb-3">Conseil & Optimisation</h3>
            <ul className="space-y-2 text-xs text-gray-700">
              <li className="flex items-start gap-2"><CheckCircle2 size={14} className="text-[#1B7A4B] shrink-0 mt-0.5" /> Diagnostic comptable et financier</li>
              <li className="flex items-start gap-2"><CheckCircle2 size={14} className="text-[#1B7A4B] shrink-0 mt-0.5" /> Analyse financière structurée</li>
              <li className="flex items-start gap-2"><CheckCircle2 size={14} className="text-[#1B7A4B] shrink-0 mt-0.5" /> Optimisation fiscale légale</li>
              <li className="flex items-start gap-2"><CheckCircle2 size={14} className="text-[#1B7A4B] shrink-0 mt-0.5" /> Assistance lors des vérifications de la DGI</li>
            </ul>
          </div>

        </div>
      </section>


      {/* 3. CONSEIL EN MANAGEMENT */}
      <section id="management" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-28">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 bg-[#1B7A4B] text-white rounded-xl flex items-center justify-center shrink-0">
            <TrendingUp size={24} />
          </div>
          <div>
            <span className="text-[#1B7A4B] text-xs font-semibold uppercase tracking-wider">Métier 2</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1A237E]">Conseil en management & pilotage</h2>
          </div>
        </div>

        <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-8 max-w-3xl">
          Nos consultants vous aident à mieux organiser votre structure, à suivre vos chiffres et à décider plus vite.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

          <div className="bg-[#E8F3ED] p-6 rounded-2xl border border border-gray-100">
            <h3 className="font-bold text-[#1A237E] text-base mb-2">Conseil de gestion & organisation</h3>
            <p className="text-xs text-gray-600 leading-relaxed">
              Mise en place de rôles clairs, réorganisation des services et définition de procédures simples et efficaces.
            </p>
          </div>

          <div className="bg-[#E8F3ED] p-6 rounded-2xl border border-gray-100">
            <h3 className="font-bold text-[#1A237E] text-base mb-2">Tableaux de bord de gestion</h3>
            <p className="text-xs text-gray-600 leading-relaxed">
              Conception d'outils visuels personnalisés pour suivre vos indicateurs clés de performance chaque mois.
            </p>
          </div>

          <div className="bg-[#E8F3ED] p-6 rounded-2xl border border-gray-100">
            <h3 className="font-bold text-[#1A237E] text-base mb-2">Suivi budgétaire & contrôle de gestion</h3>
            <p className="text-xs text-gray-600 leading-relaxed">
              Élaboration de budgets prévisionnels, analyse des écarts et suivi rigoureux de votre trésorerie.
            </p>
          </div>

          <div className="bg-[#E8F3ED] p-6 rounded-2xl border border-gray-100">
            <h3 className="font-bold text-[#1A237E] text-base mb-2">Diagnostic organisationnel</h3>
            <p className="text-xs text-gray-600 leading-relaxed">
              Revue des procédures internes pour repérer les points de blocage et sécuriser les opérations.
            </p>
          </div>

          <div className="bg-[#E8F3ED] p-6 rounded-2xl border border-gray-100">
            <h3 className="font-bold text-[#1A237E] text-base mb-2">Optimisation des coûts</h3>
            <p className="text-xs text-gray-600 leading-relaxed">
              Analyse détaillée des postes de dépenses pour réduire les charges sans fragiliser l'activité.
            </p>
          </div>

        </div>
      </section>


      {/* 4. ÉTUDE, MONTAGE & GESTION DE PROJETS */}
      <section id="projets" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-28">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 bg-[#1A237E] text-white rounded-xl flex items-center justify-center shrink-0">
            <FolderKanban size={24} />
          </div>
          <div>
            <span className="text-[#1B7A4B] text-xs font-semibold uppercase tracking-wider">Métier 3</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1A237E]">Étude, montage & gestion de projets</h2>
          </div>
        </div>

        <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-8 max-w-3xl">
          De l'idée au financement, puis à la réalisation : nous construisons avec vous un dossier solide et nous vous aidons à piloter le projet.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-4">

          <div className="bg-[#EEF0F8] p-6 rounded-2xl border border-gray-100">
            <h3 className="font-bold text-[#1A237E] text-lg mb-3">Études & Analyses</h3>
            <ul className="space-y-2 text-xs text-gray-700">
              <li className="flex items-start gap-2"><CheckCircle2 size={14} className="text-[#1B7A4B] shrink-0 mt-0.5" /> Études de marché et de faisabilité</li>
              <li className="flex items-start gap-2"><CheckCircle2 size={14} className="text-[#1B7A4B] shrink-0 mt-0.5" /> Étude de rentabilité (VAN, TRI, délai de récupération)</li>
              <li className="flex items-start gap-2"><CheckCircle2 size={14} className="text-[#1B7A4B] shrink-0 mt-0.5" /> Analyse des risques opérationnels et financiers</li>
            </ul>
          </div>

          <div className="bg-[#EEF0F8] p-6 rounded-2xl border border-gray-100">
            <h3 className="font-bold text-[#1A237E] text-lg mb-3">Montage du dossier</h3>
            <ul className="space-y-2 text-xs text-gray-700">
              <li className="flex items-start gap-2"><CheckCircle2 size={14} className="text-[#1B7A4B] shrink-0 mt-0.5" /> Business Plan bancable et prévisionnel financier</li>
              <li className="flex items-start gap-2"><CheckCircle2 size={14} className="text-[#1B7A4B] shrink-0 mt-0.5" /> Résumé exécutif et Business Model Canvas</li>
              <li className="flex items-start gap-2"><CheckCircle2 size={14} className="text-[#1B7A4B] shrink-0 mt-0.5" /> Préparation des dossiers pour les banques, microfinances et bailleurs</li>
            </ul>
          </div>

          <div className="bg-[#EEF0F8] p-6 rounded-2xl border border-gray-100">
            <h3 className="font-bold text-[#1A237E] text-lg mb-3">Gestion & Suivi de projets</h3>
            <ul className="space-y-2 text-xs text-gray-700">
              <li className="flex items-start gap-2"><CheckCircle2 size={14} className="text-[#1B7A4B] shrink-0 mt-0.5" /> Accompagnement pendant l'instruction du dossier</li>
              <li className="flex items-start gap-2"><CheckCircle2 size={14} className="text-[#1B7A4B] shrink-0 mt-0.5" /> Planification, budget et suivi d'exécution du projet</li>
              <li className="flex items-start gap-2"><CheckCircle2 size={14} className="text-[#1B7A4B] shrink-0 mt-0.5" /> Rapports d'activité et financiers pour les bailleurs</li>
            </ul>
          </div>

        </div>
        <p className="text-[11px] text-gray-500 italic text-right">
          * La décision d'octroi de financement appartient au seul organisme financeur.
        </p>
      </section>


      {/* 5. BLOC FORMATION PRATIQUE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#E8F3ED] rounded-3xl p-8 md:p-10 border border-[#1B7A4B]/30 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="w-14 h-14 bg-[#1B7A4B] text-white rounded-2xl flex items-center justify-center shrink-0">
              <GraduationCap size={28} />
            </div>
            <div>
              <span className="text-[#1B7A4B] text-xs font-semibold uppercase tracking-wider">Métier 4</span>
              <h2 className="text-2xl font-bold text-[#1A237E] mb-2">Formation professionnelle pratique</h2>
              <p className="text-gray-700 text-sm leading-relaxed max-w-2xl">
                Pour aller plus loin, nous formons vos équipes, en présentiel ou à distance : comptabilité SYSCOHADA, logiciels Sage 100 (Comptabilité, Gestion commerciale, Paie), Excel et outils bureautiques, leadership, management et gestion de projet.
              </p>
            </div>
          </div>
          <RouterLink
            to="/formations"
            className="bg-[#1B7A4B] hover:bg-[#155e39] text-white font-bold px-6 py-3 rounded-xl transition-colors whitespace-nowrap shrink-0"
          >
            Voir nos formations
          </RouterLink>
        </div>
      </section>


      {/* 6. METHODOLOGIE EN 5 ÉTAPES */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-[#1B7A4B] text-sm font-semibold uppercase tracking-wider">Processus</span>
            <h2 className="text-3xl font-bold text-[#1A237E] mt-2">Comment nous travaillons</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {[
              { num: '01', title: 'Analyse des besoins', desc: 'Écoute attentive de vos enjeux et cadrage de votre demande.' },
              { num: '02', title: 'Diagnostic personnalisé', desc: 'Identification précise de vos points de blocage et de vos risques.' },
              { num: '03', title: 'Proposition adaptée', desc: 'Plan d’action clair, calendrier d’exécution et devis transparent.' },
              { num: '04', title: 'Mise en œuvre', desc: 'Intervention par des consultants et formateurs expérimentés.' },
              { num: '05', title: 'Suivi et évaluation', desc: 'Mesure des résultats obtenus et accompagnement dans la durée.' },
            ].map((step, idx) => (
              <div key={idx} className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm relative">
                <span className="text-2xl font-black text-[#1B7A4B]/20 absolute top-3 right-3">{step.num}</span>
                <h3 className="font-bold text-[#1A237E] text-sm mb-2 pt-2">{step.title}</h3>
                <p className="text-xs text-gray-600 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* 7. APPEL À L'ACTION FINAL */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-gradient-to-br from-[#1A237E] to-[#0D1250] text-white rounded-3xl p-10 md:p-14 shadow-xl">
          <h2 className="text-2xl sm:text-4xl font-bold mb-4">
            Parlons de votre besoin
          </h2>
          <p className="text-white/80 max-w-xl mx-auto mb-8 text-sm sm:text-base leading-relaxed">
            Comptabilité, fiscalité, organisation ou projet : un premier échange permet de cerner votre situation et de vous proposer une solution adaptée.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <RouterLink
              to="/contact"
              className="bg-[#1B7A4B] hover:bg-[#155e39] text-white font-bold px-8 py-4 rounded-xl transition-all shadow-lg hover:scale-105 inline-flex items-center justify-center gap-2"
            >
              <Calendar size={20} />
              Prendre rendez-vous
            </RouterLink>
            <a
              href="tel:+2250102211421"
              className="bg-transparent hover:bg-white/10 text-white font-semibold px-8 py-4 rounded-xl border border-white/30 transition-colors inline-flex items-center justify-center gap-2"
            >
              <Phone size={20} />
              Nous appeler : +225 01 02 21 14 21
            </a>
          </div>
          <p className="text-xs text-[#8FD9AE] font-medium">
            Premier échange sans engagement · Réponse sous 24 h ouvrées
          </p>
        </div>
      </section>

    </div>
  )
}