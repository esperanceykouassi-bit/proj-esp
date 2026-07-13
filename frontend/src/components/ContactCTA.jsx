import { Link } from 'react-router-dom'
import { GraduationCap, ArrowRight } from 'lucide-react'
import FadeIn from './FadeIn'

export default function ContactCTA() {
  return (
    <section className="py-20 bg-brand-green text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <FadeIn>
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-2xl mb-6">
            <GraduationCap size={32} className="text-white" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">
            Prêt à passer à l'action ?
          </h2>
          <p className="text-lg text-white/85 mb-10 max-w-2xl mx-auto leading-relaxed">
            Rejoignez les professionnels et entreprises qui font confiance à SkillUp Consulting CI
            pour développer leurs compétences et atteindre leurs objectifs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/services"
              className="inline-flex items-center justify-center gap-2 bg-white text-brand-green font-semibold px-8 py-4 rounded-xl hover:bg-gray-50 transition-colors shadow-lg text-base"
            >
              <GraduationCap size={20} />
              S'inscrire à une formation
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 border-2 border-white text-white font-semibold px-8 py-4 rounded-xl hover:bg-white/10 transition-colors text-base"
            >
              Nous contacter <ArrowRight size={18} />
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
