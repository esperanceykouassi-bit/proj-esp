import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Calendar, ArrowRight, BookOpen } from 'lucide-react'

export default function HeroSection() {
  return (
    <section className="relative bg-hero-gradient text-white py-20 md:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl">

          {/* Badge du haut */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 mb-6"
          >
            <span className="text-xs font-semibold uppercase tracking-wider text-white">
              CABINET DE FORMATION ET DE CONSEIL
            </span>
          </motion.div>

          {/* Titre principal */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-6xl font-extrabold font-heading leading-tight mb-6"
          >
            Votre partenaire de confiance pour la{' '}
            <span className="text-yellow-400">montée en compétences</span>
          </motion.h1>

          {/* Sous-titre */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-white/90 leading-relaxed mb-8 max-w-2xl"
          >
            Nous réduisons l'écart entre la théorie académique et les exigences
            réelles du monde professionnel grâce à des formations pratiques et un
            accompagnement sur mesure.
          </motion.p>

          {/* Bloc d'actions (Boutons + Lien texte) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col gap-4 items-start"
          >
            {/* Rangee des deux boutons principaux */}
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              {/* Bouton principal : Prendre rendez-vous */}
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-white text-brand-green hover:bg-gray-100 font-bold px-8 py-4 rounded-xl transition-all shadow-lg hover:scale-105"
              >
                <Calendar size={20} />
                Prendre rendez-vous
              </Link>

              {/* Bouton secondaire : Découvrir nos services */}
              <Link
                to="/services"
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-xl border border-white/30 backdrop-blur-md transition-all"
              >
                Découvrir nos services
                <ArrowRight size={20} />
              </Link>
            </div>

            {/* Lien texte en dessous : Voir nos formations */}
            <div className="pt-2">
              <Link
                to="/formations"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-white/80 hover:text-yellow-400 transition-colors underline underline-offset-4"
              >
                <BookOpen size={16} />
                Voir nos formations
              </Link>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}