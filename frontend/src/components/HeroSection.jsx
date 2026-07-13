import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, GraduationCap } from 'lucide-react'

const ease = [0.22, 1, 0.36, 1]

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-hero-gradient text-white">
      {/* Cercles décoratifs */}
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 -right-32 w-[420px] h-[420px] bg-white/10 rounded-full" />
        <div className="absolute -bottom-28 -left-28 w-80 h-80 bg-white/10 rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/5 rounded-full" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-36">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

          {/* Texte */}
          <div>
            <motion.span
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease }}
              className="inline-block bg-white/20 text-white text-xs font-semibold px-4 py-1.5 rounded-full mb-6 uppercase tracking-widest"
            >
              Cabinet de Conseil — Côte d'Ivoire
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading leading-tight mb-6"
            >
              Votre partenaire de confiance pour la{' '}
              <span className="text-yellow-300">montée en compétences</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease }}
              className="text-lg md:text-xl text-white/85 leading-relaxed mb-10"
            >
              Nous réduisons l'écart entre la théorie académique et les exigences réelles
              du monde professionnel grâce à des formations pratiques et un accompagnement
              sur mesure.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link
                to="/services"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-white text-brand-green font-semibold rounded-lg hover:bg-gray-100 transition-colors shadow-lg text-base"
              >
                <GraduationCap size={20} />
                Découvrir nos formations
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors text-base"
              >
                Nous contacter <ArrowRight size={18} />
              </Link>
            </motion.div>
          </div>

          {/* Logo flottant */}
          <motion.div
            initial={{ opacity: 0, scale: 0.88 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.25, ease }}
            className="hidden lg:flex justify-center"
          >
            <div className="bg-white/15 backdrop-blur-sm rounded-3xl p-10 border border-white/25 shadow-2xl">
              <img
                src="/images/logo-icon.jpeg"
                alt="SkillUp Consulting CI"
                className="w-56 h-56 object-contain rounded-2xl"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
