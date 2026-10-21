import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { 
  Calculator, 
  Database, 
  FolderKanban, 
  Users, 
  FileSpreadsheet, 
  CheckCircle2, 
  Clock, 
  MapPin, 
  GraduationCap, 
  Send, 
  Calendar, 
  Award,
  ArrowRight,
  HelpCircle
} from 'lucide-react'

export default function Formations() {
  return (
    <div className="space-y-20 pb-16">

      {/* 1. HÉROS DE LA PAGE */}
      <section className="bg-gradient-to-br from-[#1A237E] to-[#0D1250] text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider text-[#8FD9AE] mb-4 border border-white/20"
          >
            CATALOGUE DE FORMATIONS
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold font-heading mb-6"
          >
            Nos formations professionnelles pratiques
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-lg text-white/90 max-w-3xl mx-auto leading-relaxed mb-8"
          >
            Des formations 100 % pratiques, animées par des professionnels du terrain, pour des compétences que vous appliquez dès le lendemain.
          </motion.p>

          <p className="text-xs sm:text-sm text-[#8FD9AE] font-medium mb-8">
            En présentiel à Abidjan ou à distance · Pour les entreprises, les professionnels et les étudiants · Attestation de fin de formation
          </p>

          {/* Pastilles interactives dans l'ordre exact */}
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            <a href="#comptabilite" className="bg-white/10 hover:bg-white/20 border border-white/20 text-xs sm:text-sm font-medium px-4 py-2 rounded-full transition-colors">
              Comptabilité & Fiscalité
            </a>
            <a href="#sage" className="bg-white/10 hover:bg-white/20 border border-white/20 text-xs sm:text-sm font-medium px-4 py-2 rounded-full transition-colors">
              Sage 100 (ex-SAARI)
            </a>
            <a href="#projets" className="bg-white/10 hover:bg-white/20 border border-white/20 text-xs sm:text-sm font-medium px-4 py-2 rounded-full transition-colors">
              Gestion de projet
            </a>
            <a href="#leadership" className="bg-white/10 hover:bg-white/20 border border-white/20 text-xs sm:text-sm font-medium px-4 py-2 rounded-full transition-colors">
              Leadership & Management
            </a>
            <a href="#bureautique" className="bg-white/10 hover:bg-white/20 border border-white/20 text-xs sm:text-sm font-medium px-4 py-2 rounded-full transition-colors">
              Bureautique (Excel)
            </a>
          </div>
        </div>
      </section>


      {/* 2. CALENDRIER : PROCHAINES SESSIONS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-200 shadow-sm">
          <div className="flex items-center gap-3 mb-6">
            <Calendar className="text-[#1B7A4B]" size={26} />
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-[#1A237E]">Prochaines sessions au calendrier</h2>
              <p className="text-xs text-gray-600">Inscrivez-vous directement ou demandez une session intra-entreprise sur mesure.</p>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm text-gray-700">
              <thead className="bg-[#EEF0F8] text-[#1A237E] font-bold uppercase text-[11px]">
                <tr>
                  <th className="p-3.5 rounded-l-xl">Domaine / Formation</th>
                  <th className="p-3.5">Format</th>
                  <th className="p-3.5">Horaires</th>
                  <th className="p-3.5 text-right rounded-r-xl">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr>
                  <td className="p-3.5 font-semibold text-gray-900">Comptabilité SYSCOHADA & Pratique Fiscale</td>
                  <td className="p-3.5"><span className="bg-green-100 text-green-800 text-[11px] px-2 py-0.5 rounded-full font-medium">Présentiel (Angré)</span></td>
                  <td className="p-3.5 text-gray-600">Soir & Week-end</td>
                  <td className="p-3.5 text-right">
                    <Link to="/contact" className="text-xs font-bold text-[#1B7A4B] hover:underline">S'inscrire →</Link>
                  </td>
                </tr>
                <tr>
                  <td className="p-3.5 font-semibold text-gray-900">Sage 100 Comptabilité & Gestion Commerciale</td>
                  <td className="p-3.5"><span className="bg-blue-100 text-blue-800 text-[11px] px-2 py-0.5 rounded-full font-medium">Présentiel / À distance</span></td>
                  <td className="p-3.5 text-gray-600">Sessions du soir</td>
                  <td className="p-3.5 text-right">
                    <Link to="/contact" className="text-xs font-bold text-[#1B7A4B] hover:underline">S'inscrire →</Link>
                  </td>
                </tr>
                <tr>
                  <td className="p-3.5 font-semibold text-gray-900">Microsoft Excel : Perfectionnement & Tableaux de bord</td>
                  <td className="p-3.5"><span className="bg-green-100 text-green-800 text-[11px] px-2 py-0.5 rounded-full font-medium">Présentiel & En ligne</span></td>
                  <td className="p-3.5 text-gray-600">Samedi intensif</td>
                  <td className="p-3.5 text-right">
                    <Link to="/contact" className="text-xs font-bold text-[#1B7A4B] hover:underline">S'inscrire →</Link>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>


      {/* 3. FAMILLE 1 : COMPTABILITÉ & FISCALITÉ */}
      <section id="comptabilite" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-28">
        <div className="bg-[#EEF0F8] p-8 rounded-3xl border border-gray-100">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-[#1A237E] text-white rounded-xl flex items-center justify-center shrink-0">
              <Calculator size={24} />
            </div>
            <div>
              <span className="text-[#1B7A4B] text-xs font-semibold uppercase tracking-wider">Famille 1</span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#1A237E]">Formations en comptabilité & fiscalité</h2>
            </div>
          </div>

          <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-6">
            Maîtrisez la comptabilité SYSCOHADA et la fiscalité ivoirienne à partir de cas réels, pour tenir des comptes justes et déclarer dans les délais.
          </p>

          <div className="flex flex-wrap gap-4 text-xs font-medium text-gray-700 bg-white p-3.5 rounded-xl mb-8 border border-gray-200/60">
            <span className="flex items-center gap-1.5"><Clock size={15} className="text-[#1B7A4B]" /> <strong>Durée :</strong> 3 à 5 jours</span>
            <span className="flex items-center gap-1.5"><MapPin size={15} className="text-[#1B7A4B]" /> <strong>Format :</strong> Présentiel ou à distance</span>
            <span className="flex items-center gap-1.5"><Users size={15} className="text-[#1B7A4B]" /> <strong>Public :</strong> Comptables, assistants, gestionnaires, étudiants</span>
            <span className="flex items-center gap-1.5"><Award size={15} className="text-[#1B7A4B]" /> Attestation de fin de formation</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm">
              <h3 className="font-bold text-[#1A237E] text-sm mb-2">Pratique comptable SYSCOHADA</h3>
              <p className="text-xs text-gray-600 leading-relaxed">Organisation comptable, saisie des opérations, travaux de fin d'exercice et bilan.</p>
            </div>
            <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm">
              <h3 className="font-bold text-[#1A237E] text-sm mb-2">Pratique fiscale ivoirienne</h3>
              <p className="text-xs text-gray-600 leading-relaxed">Calcul et déclaration de la TVA, ITS, patente, CNPS et préparation aux contrôles fiscaux.</p>
            </div>
            <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm">
              <h3 className="font-bold text-[#1A237E] text-sm mb-2">Gestion de trésorerie</h3>
              <p className="text-xs text-gray-600 leading-relaxed">Établissement du plan de trésorerie, suivi des encaissements et décaissements au quotidien.</p>
            </div>
            <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm">
              <h3 className="font-bold text-[#1A237E] text-sm mb-2">Comptabilité des ONG (SYCEBNL)</h3>
              <p className="text-xs text-gray-600 leading-relaxed">Spécificités SYCEBNL, gestion des subventions, suivi budgétaire bailleurs et rapports financiers.</p>
            </div>
          </div>

          <div className="text-right">
            <Link to="/contact" className="inline-flex items-center gap-2 bg-[#1A237E] hover:bg-[#0D1250] text-white text-xs sm:text-sm font-semibold px-6 py-3 rounded-xl transition-colors">
              <Send size={16} />
              Demander le programme détaillé
            </Link>
          </div>
        </div>
      </section>


      {/* 4. FAMILLE 2 : LOGICIELS SAGE 100 (EX-SAARI) */}
      <section id="sage" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-28">
        <div className="bg-[#E8F3ED] p-8 rounded-3xl border border-gray-100">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-[#1B7A4B] text-white rounded-xl flex items-center justify-center shrink-0">
              <Database size={24} />
            </div>
            <div>
              <span className="text-[#1B7A4B] text-xs font-semibold uppercase tracking-wider">Famille 2</span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#1A237E]">Formations aux logiciels Sage 100 (ex-SAARI)</h2>
            </div>
          </div>

          <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-6">
            Prenez en main les logiciels Sage 100 (anciennement SAARI), très répandus dans les entreprises ivoiriennes, de l'installation jusqu'à l'utilisation avancée, sur des dossiers concrets.
          </p>

          <div className="flex flex-wrap gap-4 text-xs font-medium text-gray-700 bg-white p-3.5 rounded-xl mb-8 border border-gray-200/60">
            <span className="flex items-center gap-1.5"><Clock size={15} className="text-[#1B7A4B]" /> <strong>Durée :</strong> 3 à 4 jours par module</span>
            <span className="flex items-center gap-1.5"><MapPin size={15} className="text-[#1B7A4B]" /> <strong>Format :</strong> En laboratoire informatique ou à distance</span>
            <span className="flex items-center gap-1.5"><Users size={15} className="text-[#1B7A4B]" /> <strong>Public :</strong> Comptables, gestionnaires de stock, RH</span>
            <span className="flex items-center gap-1.5"><Award size={15} className="text-[#1B7A4B]" /> Attestation de fin de formation</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm">
              <h3 className="font-bold text-[#1A237E] text-sm mb-2">Sage 100 Comptabilité</h3>
              <p className="text-xs text-gray-600 leading-relaxed">Création du plan comptable, saisie des journaux, rapprochement bancaire, lettrage et états financiers.</p>
            </div>
            <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm">
              <h3 className="font-bold text-[#1A237E] text-sm mb-2">Sage 100 Gestion commerciale</h3>
              <p className="text-xs text-gray-600 leading-relaxed">Facturation, devis, commandes, gestion des stocks, inventaires et suivi du fichier clients/fournisseurs.</p>
            </div>
            <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm">
              <h3 className="font-bold text-[#1A237E] text-sm mb-2">Sage 100 Paie & RH</h3>
              <p className="text-xs text-gray-600 leading-relaxed">Paramétrage des rubriques, calcul des bulletins de paie, calcul de l'ITS, cotisations CNPS et fiches individuelles.</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-[11px] text-gray-500 italic">
              * Sage et SAARI sont des marques de leurs propriétaires respectifs. SkillUp Consulting CI est un organisme de formation indépendant.
            </p>
            <Link to="/contact" className="inline-flex items-center gap-2 bg-[#1B7A4B] hover:bg-[#155e39] text-white text-xs sm:text-sm font-semibold px-6 py-3 rounded-xl transition-colors whitespace-nowrap">
              <Send size={16} />
              Demander le programme détaillé
            </Link>
          </div>
        </div>
      </section>


      {/* 5. FAMILLE 3 : GESTION DE PROJET */}
      <section id="projets" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-28">
        <div className="bg-[#EEF0F8] p-8 rounded-3xl border border-gray-100">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-[#1A237E] text-white rounded-xl flex items-center justify-center shrink-0">
              <FolderKanban size={24} />
            </div>
            <div>
              <span className="text-[#1B7A4B] text-xs font-semibold uppercase tracking-wider">Famille 3</span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#1A237E]">Formations en gestion de projet</h2>
            </div>
          </div>

          <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-6">
            Acquérez les outils et méthodologies pour structurer, planifier, exécuter et évaluer vos projets avec rigueur.
          </p>

          <div className="flex flex-wrap gap-4 text-xs font-medium text-gray-700 bg-white p-3.5 rounded-xl mb-8 border border-gray-200/60">
            <span className="flex items-center gap-1.5"><Clock size={15} className="text-[#1B7A4B]" /> <strong>Durée :</strong> 3 à 5 jours</span>
            <span className="flex items-center gap-1.5"><MapPin size={15} className="text-[#1B7A4B]" /> <strong>Format :</strong> Présentiel ou à distance</span>
            <span className="flex items-center gap-1.5"><Users size={15} className="text-[#1B7A4B]" /> <strong>Public :</strong> Chefs de projets, responsables d'ONG, entrepreneurs</span>
            <span className="flex items-center gap-1.5"><Award size={15} className="text-[#1B7A4B]" /> Attestation de fin de formation</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm">
              <h3 className="font-bold text-[#1A237E] text-sm mb-2">Cadrage & Conception de projet</h3>
              <p className="text-xs text-gray-600 leading-relaxed">Définition des objectifs, analyse des parties prenantes, étude de faisabilité et gouvernance.</p>
            </div>
            <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm">
              <h3 className="font-bold text-[#1A237E] text-sm mb-2">Planification & Pilotage</h3>
              <p className="text-xs text-gray-600 leading-relaxed">Découpage WBS, diagramme de Gantt, gestion du budget, des risques et livrables clés.</p>
            </div>
            <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm">
              <h3 className="font-bold text-[#1A237E] text-sm mb-2">Méthodes Agile & traditionnel</h3>
              <p className="text-xs text-gray-600 leading-relaxed">Compréhension des cycles en cascade et principes agiles adaptés aux PME locales.</p>
            </div>
            <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm">
              <h3 className="font-bold text-[#1A237E] text-sm mb-2">Suivi-évaluation des projets</h3>
              <p className="text-xs text-gray-600 leading-relaxed">Cadre logique, indicateurs de performance, collecte de données et rapports bailleurs.</p>
            </div>
          </div>

          <div className="text-right">
            <Link to="/contact" className="inline-flex items-center gap-2 bg-[#1A237E] hover:bg-[#0D1250] text-white text-xs sm:text-sm font-semibold px-6 py-3 rounded-xl transition-colors">
              <Send size={16} />
              Demander le programme détaillé
            </Link>
          </div>
        </div>
      </section>


      {/* 6. FAMILLE 4 : LEADERSHIP & MANAGEMENT */}
      <section id="leadership" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-28">
        <div className="bg-[#E8F3ED] p-8 rounded-3xl border border-gray-100">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-[#1B7A4B] text-white rounded-xl flex items-center justify-center shrink-0">
              <Users size={24} />
            </div>
            <div>
              <span className="text-[#1B7A4B] text-xs font-semibold uppercase tracking-wider">Famille 4</span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#1A237E]">Formations en leadership & management</h2>
            </div>
          </div>

          <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-6">
            Développez vos compétences managériales et apprenez à mobiliser vos équipes autour d'objectifs de performance clairs.
          </p>

          <div className="flex flex-wrap gap-4 text-xs font-medium text-gray-700 bg-white p-3.5 rounded-xl mb-8 border border-gray-200/60">
            <span className="flex items-center gap-1.5"><Clock size={15} className="text-[#1B7A4B]" /> <strong>Durée :</strong> 2 à 3 jours</span>
            <span className="flex items-center gap-1.5"><MapPin size={15} className="text-[#1B7A4B]" /> <strong>Format :</strong> Présentiel ou séminaire d'entreprise</span>
            <span className="flex items-center gap-1.5"><Users size={15} className="text-[#1B7A4B]" /> <strong>Public :</strong> Chefs d'équipe, managers, responsables d'association</span>
            <span className="flex items-center gap-1.5"><Award size={15} className="text-[#1B7A4B]" /> Attestation de fin de formation</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm">
              <h3 className="font-bold text-[#1A237E] text-sm mb-2">Posture managériale</h3>
              <p className="text-xs text-gray-600 leading-relaxed">Adopter un leadership affirmé, communiquer efficacement et gérer l'autorité au quotidien.</p>
            </div>
            <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm">
              <h3 className="font-bold text-[#1A237E] text-sm mb-2">Gestion d'équipe & performance</h3>
              <p className="text-xs text-gray-600 leading-relaxed">Fixer des objectifs mesurables, déléguer avec confiance et évaluer la contribution de chacun.</p>
            </div>
            <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm">
              <h3 className="font-bold text-[#1A237E] text-sm mb-2">Gestion des conflits & motivation</h3>
              <p className="text-xs text-gray-600 leading-relaxed">Désamorcer les tensions relationnelles, motiver ses collaborateurs et maintenir un bon climat social.</p>
            </div>
          </div>

          <div className="text-right">
            <Link to="/contact" className="inline-flex items-center gap-2 bg-[#1B7A4B] hover:bg-[#155e39] text-white text-xs sm:text-sm font-semibold px-6 py-3 rounded-xl transition-colors">
              <Send size={16} />
              Demander le programme détaillé
            </Link>
          </div>
        </div>
      </section>


      {/* 7. FAMILLE 5 : BUREAUTIQUE (EXCEL) */}
      <section id="bureautique" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-28">
        <div className="bg-[#EEF0F8] p-8 rounded-3xl border border-gray-100">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-[#1A237E] text-white rounded-xl flex items-center justify-center shrink-0">
              <FileSpreadsheet size={24} />
            </div>
            <div>
              <span className="text-[#1B7A4B] text-xs font-semibold uppercase tracking-wider">Famille 5</span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#1A237E]">Formations bureautiques (Microsoft Excel)</h2>
            </div>
          </div>

          <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-6">
            Gagnez un temps précieux au quotidien en maîtrisant Microsoft Excel : initiation, niveau intermédiaire et fonctions avancées.
          </p>

          <div className="flex flex-wrap gap-4 text-xs font-medium text-gray-700 bg-white p-3.5 rounded-xl mb-8 border border-gray-200/60">
            <span className="flex items-center gap-1.5"><Clock size={15} className="text-[#1B7A4B]" /> <strong>Durée :</strong> 2 à 4 jours</span>
            <span className="flex items-center gap-1.5"><MapPin size={15} className="text-[#1B7A4B]" /> <strong>Format :</strong> Pratique sur ordinateur (Présentiel ou distanciel)</span>
            <span className="flex items-center gap-1.5"><Users size={15} className="text-[#1B7A4B]" /> <strong>Public :</strong> Tout public professionnel, étudiants</span>
            <span className="flex items-center gap-1.5"><Award size={15} className="text-[#1B7A4B]" /> Attestation de fin de formation</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm">
              <h3 className="font-bold text-[#1A237E] text-sm mb-2">Excel Initiation</h3>
              <p className="text-xs text-gray-600 leading-relaxed">Prise en main de l'interface, création de tableaux simples, formules de base (SOMME, MOYENNE) et mise en forme.</p>
            </div>
            <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm">
              <h3 className="font-bold text-[#1A237E] text-sm mb-2">Excel Intermédiaire</h3>
              <p className="text-xs text-gray-600 leading-relaxed">Fonctions logiques (SI, ET, OU), recherche de données (RECHERCHEV, RECHERCHEX) et tableaux croisés dynamiques.</p>
            </div>
            <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm">
              <h3 className="font-bold text-[#1A237E] text-sm mb-2">Excel Avancé & Tableaux de bord</h3>
              <p className="text-xs text-gray-600 leading-relaxed">Conception de tableaux de bord interactifs, automatisation simple, graphiques dynamiques et analyse de données.</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <Link to="/contact" className="inline-flex items-center gap-2 bg-white hover:bg-gray-50 text-[#1A237E] border border-gray-300 text-xs sm:text-sm font-semibold px-5 py-2.5 rounded-xl transition-colors">
              <HelpCircle size={16} />
              Tester mon niveau Excel
            </Link>
            <Link to="/contact" className="inline-flex items-center gap-2 bg-[#1A237E] hover:bg-[#0D1250] text-white text-xs sm:text-sm font-semibold px-6 py-3 rounded-xl transition-colors">
              <Send size={16} />
              Demander le programme détaillé
            </Link>
          </div>
        </div>
      </section>


      {/* 8. ENCART DÉDIÉ : ÉTUDIANTS & JEUNES DIPLÔMÉS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#E8F3ED] border border-[#1B7A4B]/30 rounded-3xl p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-[#1B7A4B] text-white rounded-2xl flex items-center justify-center shrink-0">
              <GraduationCap size={26} />
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#1A237E] mb-1">Offre Étudiants & Jeunes diplômés</h3>
              <p className="text-xs sm:text-sm text-gray-700 leading-relaxed max-w-2xl">
                Boostez votre employabilité avec un parcours pratique recommandé : <strong>SYSCOHADA → Sage 100 → Excel Avancé</strong>. Profitez de nos conditions tarifaires adaptées aux étudiants.
              </p>
            </div>
          </div>
          <Link to="/contact" className="bg-[#1B7A4B] hover:bg-[#155e39] text-white text-xs sm:text-sm font-bold px-6 py-3 rounded-xl transition-colors whitespace-nowrap">
            Se renseigner sur le tarif étudiant
          </Link>
        </div>
      </section>


      {/* 9. BLOC SUR MESURE ET APPEL À L'ACTION FINAL */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-gradient-to-br from-[#1A237E] to-[#0D1250] text-white rounded-3xl p-10 md:p-14 shadow-xl">
          <h2 className="text-2xl sm:text-4xl font-bold mb-4">
            Besoin d'un programme de formation sur mesure ?
          </h2>
          <p className="text-white/80 max-w-xl mx-auto mb-8 text-sm sm:text-base leading-relaxed">
            Formations intra-entreprise, en groupe ou en individuel, en présentiel dans vos locaux ou à distance. Nous concevons le programme adapté à vos équipes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-[#1B7A4B] hover:bg-[#155e39] text-white font-bold px-8 py-4 rounded-xl transition-all shadow-lg hover:scale-105 inline-flex items-center justify-center gap-2"
            >
              <Send size={18} />
              Demander un devis de formation
            </Link>
            <Link
              to="/services"
              className="bg-transparent hover:bg-white/10 text-white font-semibold px-8 py-4 rounded-xl border border-white/30 transition-colors inline-flex items-center justify-center gap-2"
            >
              Découvrir nos services de conseil
            </Link>
          </div>
        </div>
      </section>

    </div>
  )
}