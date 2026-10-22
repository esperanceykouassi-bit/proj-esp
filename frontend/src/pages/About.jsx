import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { 
  Target, 
  Eye, 
  CheckCircle2, 
  Users, 
  Award, 
  Calendar, 
  ShieldCheck,
  Compass,
  Building2
} from 'lucide-react'

export default function About() {
  return (
    <div className="space-y-20 pb-16">

      {/* 1. EN-TÊTE DE PAGE (HERO) */}
      <section className="bg-gradient-to-br from-[#1A237E] to-[#0D1250] text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider text-[#8FD9AE] mb-4 border border-white/20"
          >
            QUI SOMMES-NOUS ?
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold font-heading mb-6"
          >
            À propos de SkillUp Consulting CI
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-lg text-white/90 max-w-3xl mx-auto leading-relaxed"
          >
            Un cabinet ivoirien de conseil et d’accompagnement qui aide les PME, les organisations et les porteurs de projets à tenir leurs comptes, structurer leur gestion, réussir leurs projets et former leurs équipes.
          </motion.p>
        </div>
      </section>


      {/* 2. NOTRE HISTOIRE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-[#1B7A4B] text-sm font-semibold uppercase tracking-wider">Origine</span>
            <h2 className="text-3xl font-bold text-[#1A237E] mt-2 mb-6">Un cabinet né d’un constat de terrain</h2>
            <div className="space-y-4 text-gray-700 text-sm sm:text-base leading-relaxed">
              <p>
                <strong>SkillUp Consulting CI</strong> est né d’un constat simple : beaucoup de PME et d’organisations ivoiriennes manquent d’un accompagnement de proximité pour tenir leur comptabilité, respecter leurs obligations fiscales, piloter leur activité et monter des projets finançables. Leurs équipes manquent aussi de formations pratiques sur les outils du quotidien (SAARI, Excel, SYSCOHADA).
              </p>
              <p>
                Nous avons donc réuni dans un même cabinet l’assistance comptable et fiscale, le conseil en management, l’étude et la gestion de projets, et la formation professionnelle. Nos clients ont ainsi un seul interlocuteur, de la tenue de leurs comptes à la montée en compétences de leurs équipes.
              </p>
              <p>
                Basés à Angré (Abidjan), nous intervenons sur place chez nos clients et proposons nos formations en présentiel ou à distance.
              </p>
            </div>
          </div>

          <div className="bg-[#EEF0F8] p-8 rounded-3xl border border-gray-100">
            <h3 className="text-xl font-bold text-[#1A237E] mb-4 flex items-center gap-2">
              <Compass className="text-[#1B7A4B]" size={24} />
              Notre engagement
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              Offrir aux dirigeants et professionnels une expertise locale ancrée dans la réalité du tissu économique ivoirien et conforme à la réglementation en vigueur.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3 bg-white p-3.5 rounded-xl border border-gray-100">
                <CheckCircle2 className="text-[#1B7A4B] shrink-0" size={18} />
                <span className="text-xs font-medium text-gray-800">Intervention sur place chez nos clients et à distance</span>
              </div>
              <div className="flex items-center gap-3 bg-white p-3.5 rounded-xl border border-gray-100">
                <CheckCircle2 className="text-[#1B7A4B] shrink-0" size={18} />
                <span className="text-xs font-medium text-gray-800">Conformité au SYSCOHADA révisé & SYCEBNL</span>
              </div>
              <div className="flex items-center gap-3 bg-white p-3.5 rounded-xl border border-gray-100">
                <CheckCircle2 className="text-[#1B7A4B] shrink-0" size={18} />
                <span className="text-xs font-medium text-gray-800">Un interlocuteur unique pour vos 4 besoins clés</span>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* 3. BANDEAU PREUVES & CHIFFRES */}
      <section className="bg-[#1B7A4B] py-10 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="p-2">
              <div className="text-3xl font-extrabold font-heading text-white">4</div>
              <div className="text-xs sm:text-sm text-white/80 mt-1">Métiers complémentaires</div>
            </div>
            <div className="p-2">
              <div className="text-3xl font-extrabold font-heading text-white">100 %</div>
              <div className="text-xs sm:text-sm text-white/80 mt-1">Pratique & Opérationnel</div>
            </div>
            <div className="p-2">
              <div className="text-3xl font-extrabold font-heading text-white">2</div>
              <div className="text-xs sm:text-sm text-white/80 mt-1">Référentiels (SYSCOHADA & SYCEBNL)</div>
            </div>
            <div className="p-2">
              <div className="text-3xl font-extrabold font-heading text-white">Abidjan</div>
              <div className="text-xs sm:text-sm text-white/80 mt-1">Siège social à Angré 7è Tranche</div>
            </div>
          </div>
        </div>
      </section>


      {/* 4. NOTRE BOUSSOLE (MISSION & VISION) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-[#1B7A4B] text-sm font-semibold uppercase tracking-wider">Orientation</span>
          <h2 className="text-3xl font-bold text-[#1A237E] mt-2">Notre Boussole</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Mission */}
          <div className="bg-[#EEF0F8] p-8 rounded-3xl border border-gray-100 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 bg-[#1A237E] text-white rounded-2xl flex items-center justify-center mb-6">
                <Target size={24} />
              </div>
              <h3 className="text-2xl font-bold text-[#1A237E] mb-4">Notre Mission</h3>
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-6">
                Accompagner les entreprises, les organisations et les porteurs de projets dans la maîtrise de leur gestion comptable et fiscale, l’amélioration de leur organisation et la réussite de leurs projets, tout en renforçant les compétences de leurs équipes par une formation pratique.
              </p>
            </div>
            <ul className="space-y-2 pt-4 border-t border-gray-200 text-xs text-gray-600">
              <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-[#1B7A4B]" /> Tenir des comptes fiables et conformes</li>
              <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-[#1B7A4B]" /> Aider les dirigeants à piloter leur activité</li>
              <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-[#1B7A4B]" /> Rendre les projets finançables</li>
              <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-[#1B7A4B]" /> Former des équipes opérationnelles</li>
            </ul>
          </div>

          {/* Vision */}
          <div className="bg-[#E8F3ED] p-8 rounded-3xl border border-gray-100 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 bg-[#1B7A4B] text-white rounded-2xl flex items-center justify-center mb-6">
                <Eye size={24} />
              </div>
              <h3 className="text-2xl font-bold text-[#1A237E] mb-4">Notre Vision</h3>
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-6">
                Être, en Côte d’Ivoire, le cabinet de référence en assistance comptable et fiscale, en conseil en management et en gestion de projet, au service de la performance durable des PME, des institutions et des professionnels.
              </p>
            </div>
            <ul className="space-y-2 pt-4 border-t border-gray-200 text-xs text-gray-600">
              <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-[#1B7A4B]" /> Premier choix des PME ivoiriennes pour leur gestion</li>
              <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-[#1B7A4B]" /> Contribuer à la structuration du tissu économique</li>
              <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-[#1B7A4B]" /> Étendre notre présence dans l’espace UEMOA</li>
              <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-[#1B7A4B]" /> Bâtir un vivier de compétences durables</li>
            </ul>
          </div>
        </div>
      </section>


      {/* 5. NOS VALEURS */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-[#1B7A4B] text-sm font-semibold uppercase tracking-wider">Principes</span>
            <h2 className="text-3xl font-bold text-[#1A237E] mt-2">Nos Valeurs</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
              <div className="w-10 h-10 bg-[#1A237E]/10 text-[#1A237E] rounded-xl flex items-center justify-center mb-4">
                <ShieldCheck size={20} />
              </div>
              <h3 className="font-bold text-[#1A237E] text-base mb-2">Pragmatisme</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Des solutions concrètes et applicables tout de suite, qu’il s’agisse d’une mission comptable, d’un conseil ou d’une formation.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
              <div className="w-10 h-10 bg-[#1B7A4B]/10 text-[#1B7A4B] rounded-xl flex items-center justify-center mb-4">
                <Users size={20} />
              </div>
              <h3 className="font-bold text-[#1A237E] text-base mb-2">Esprit d’équipe</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Une équipe pluridisciplinaire de consultants, de spécialistes de la comptabilité et de la fiscalité et de formateurs, unis par la réussite de nos clients.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
              <div className="w-10 h-10 bg-[#1A237E]/10 text-[#1A237E] rounded-xl flex items-center justify-center mb-4">
                <Award size={20} />
              </div>
              <h3 className="font-bold text-[#1A237E] text-base mb-2">Excellence</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Des prestations conformes au SYSCOHADA révisé, au SYCEBNL et à la réglementation fiscale ivoirienne.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
              <div className="w-10 h-10 bg-[#1B7A4B]/10 text-[#1B7A4B] rounded-xl flex items-center justify-center mb-4">
                <Target size={20} />
              </div>
              <h3 className="font-bold text-[#1A237E] text-base mb-2">Impact mesurable</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Un engagement axé sur les résultats réels obtenus par nos clients et la progression de leurs équipes.
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* 6. POURQUOI CHOISIR SKILLUP CONSULTING CI ? */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#1A237E] text-white rounded-3xl p-8 md:p-12">
          <div className="max-w-3xl mb-10">
            <span className="text-[#8FD9AE] text-sm font-semibold uppercase tracking-wider">Atouts majeurs</span>
            <h2 className="text-3xl font-bold mt-2">Pourquoi choisir SkillUp Consulting CI ?</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex gap-4">
              <CheckCircle2 className="text-[#8FD9AE] shrink-0" size={24} />
              <div>
                <h3 className="font-bold text-base mb-1">Maîtrise du SYSCOHADA, du SYCEBNL et de la fiscalité ivoirienne</h3>
                <p className="text-xs text-white/80 leading-relaxed">Une expertise technique éprouvée et parfaitement ancrée dans les textes en vigueur.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <CheckCircle2 className="text-[#8FD9AE] shrink-0" size={24} />
              <div>
                <h3 className="font-bold text-base mb-1">Un interlocuteur unique</h3>
                <p className="text-xs text-white/80 leading-relaxed">Un suivi intégré pour la comptabilité, le conseil, les projets et la formation.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <CheckCircle2 className="text-[#8FD9AE] shrink-0" size={24} />
              <div>
                <h3 className="font-bold text-base mb-1">Accompagnement de projets jusqu'au dossier de financement</h3>
                <p className="text-xs text-white/80 leading-relaxed">Montage de dossiers bancables et assistance lors de l'instruction.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <CheckCircle2 className="text-[#8FD9AE] shrink-0" size={24} />
              <div>
                <h3 className="font-bold text-base mb-1">Solutions adaptées aux réalités des PME ivoiriennes</h3>
                <p className="text-xs text-white/80 leading-relaxed">Procédures simples, pragmatiques et adaptées aux contraintes opérationnelles locales.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <CheckCircle2 className="text-[#8FD9AE] shrink-0" size={24} />
              <div>
                <h3 className="font-bold text-base mb-1">Formations 100 % pratiques</h3>
                <p className="text-xs text-white/80 leading-relaxed">En présentiel ou à distance, aux horaires adaptés (soir, week-end, intra-entreprise).</p>
              </div>
            </div>

            <div className="flex gap-4">
              <CheckCircle2 className="text-[#8FD9AE] shrink-0" size={24} />
              <div>
                <h3 className="font-bold text-base mb-1">Suivi après la mission ou la formation</h3>
                <p className="text-xs text-white/80 leading-relaxed">Accompagnement continu pour s'assurer de l'assimilation et de l'application des acquis.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

{/* 7. NOTRE ÉQUIPE */}
<section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
  <div className="text-center mb-12">
    <span className="text-[#1B7A4B] text-sm font-semibold uppercase tracking-wider">L'Équipe</span>
    <h2 className="text-3xl font-bold text-[#1A237E] mt-2">Nos Consultants & Formateurs</h2>
  </div>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

    {/* Membre 1 : M. DEGBEL (Avec Photo) */}
    <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm text-center">
      <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-4 border-2 border-[#1A237E] shadow-sm">
        <img 
          src="/images/team/degbel.jpg" 
          alt="M. Yannick Wilfried A. DEGBEL" 
          className="w-full h-full object-cover object-top"
        />
      </div>
      <h3 className="font-bold text-[#1A237E] text-base">M. Yannick Wilfried A. DEGBEL</h3>
      <p className="text-xs text-[#1B7A4B] font-semibold mb-2">Gérant & Directeur Général</p>
      <p className="text-xs text-gray-600 leading-relaxed">
        Finance, audit et contrôle de gestion ; comptabilité SYSCOHADA et SYCEBNL.
      </p>
    </div>

    {/* Membre 2 : M. TETE (Initiale FT) */}
    <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm text-center">
      <div className="w-24 h-24 rounded-full bg-[#1B7A4B]/10 text-[#1B7A4B] border-2 border-[#1B7A4B]/20 flex items-center justify-center mx-auto mb-4 font-bold text-xl">
        FT
      </div>
      <h3 className="font-bold text-[#1A237E] text-base">M. Franck TETE</h3>
      <p className="text-xs text-[#1B7A4B] font-semibold mb-2">Consultant Spécialiste</p>
      <p className="text-xs text-gray-600 leading-relaxed">
        Fiscalité et obligations sociales des entreprises.
      </p>
    </div>

    {/* Membre 3 : M. AHI (Initiale GA) */}
    <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm text-center">
      <div className="w-24 h-24 rounded-full bg-[#1A237E]/10 text-[#1A237E] border-2 border-[#1A237E]/20 flex items-center justify-center mx-auto mb-4 font-bold text-xl">
        GA
      </div>
      <h3 className="font-bold text-[#1A237E] text-base">M. Gilles AHI</h3>
      <p className="text-xs text-[#1B7A4B] font-semibold mb-2">Formateur Référent</p>
      <p className="text-xs text-gray-600 leading-relaxed">
        Excel et outils bureautiques avancés.
      </p>
    </div>

    {/* Membre 4 : Mlle DRA (Initiale CD) */}
    <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm text-center">
      <div className="w-24 h-24 rounded-full bg-[#1B7A4B]/10 text-[#1B7A4B] border-2 border-[#1B7A4B]/20 flex items-center justify-center mx-auto mb-4 font-bold text-xl">
        CD
      </div>
      <h3 className="font-bold text-[#1A237E] text-base">Mlle Charlotte DRA</h3>
      <p className="text-xs text-[#1B7A4B] font-semibold mb-2">Formatrice</p>
      <p className="text-xs text-gray-600 leading-relaxed">
        Leadership, posture managériale et gestion d'équipe.
      </p>
    </div>

  </div>
</section>


      {/* 8. FICHE D'IDENTITÉ LÉGALE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#EEF0F8] p-8 rounded-3xl border border-gray-200">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <span className="text-[#1B7A4B] text-xs font-semibold uppercase tracking-wider">Identité Institutionnelle</span>
              <h3 className="text-xl font-bold text-[#1A237E] mt-1 mb-2">SkillUp Consulting CI</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-gray-700 mt-4">
                <div><strong>Forme juridique :</strong> SARLU</div>
                <div><strong>N° CC (NCC) :</strong> 2603534P</div>
                <div><strong>IDU :</strong> CI-2026-0063319T</div>
              </div>
            </div>
            <div className="text-xs text-gray-600 md:text-right border-t md:border-t-0 md:border-l border-gray-300 pt-4 md:pt-0 md:pl-6 shrink-0">
              <div className="font-bold text-[#1A237E] mb-1">Siège social Abidjan</div>
              <div>Angré 7ème Tranche, non loin du carrefour Bluetooth</div>
              <div>Immeuble Tchêpê, porte B2, Abidjan</div>
            </div>
          </div>
        </div>
      </section>


      {/* 9. APPEL À L'ACTION FINAL */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-[#E8F3ED] rounded-3xl p-10 md:p-14 border border-[#1B7A4B]/20">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#1A237E] mb-4">
            Travaillons ensemble
          </h2>
          <p className="text-gray-700 max-w-xl mx-auto mb-8 text-sm sm:text-base leading-relaxed">
            Une comptabilité à reprendre, une organisation à structurer, un projet à financer ou une équipe à former ? Parlons-en.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-[#1B7A4B] hover:bg-[#155e39] text-white font-bold px-8 py-4 rounded-xl transition-colors inline-flex items-center justify-center gap-2 shadow-sm"
            >
              <Calendar size={20} />
              Prendre rendez-vous
            </Link>
            <Link
              to="/services"
              className="bg-white hover:bg-gray-50 text-[#1A237E] font-semibold px-8 py-4 rounded-xl border border-gray-300 transition-colors inline-flex items-center justify-center gap-2"
            >
              Découvrir nos services
            </Link>
          </div>
        </div>
      </section>

    </div>
  )
}