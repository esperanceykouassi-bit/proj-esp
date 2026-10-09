import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, MessageCircle } from 'lucide-react'
import FadeIn from '../components/FadeIn'

// ─── Données statiques ────────────────────────────────────────────────────────

const COORDONNEES = [
  {
    icon: Phone,
    label: 'Téléphone',
    color: 'bg-brand-green/10',
    iconColor: 'text-brand-green',
    lines: [
      { text: '+225 01 02 21 14 21', href: 'tel:+2250102211421' },
      { text: '+225 05 76 38 76 76', href: 'tel:+2250576387676' },
    ],
  },
  {
    icon: Mail,
    label: 'Email',
    color: 'bg-brand-blue/10',
    iconColor: 'text-brand-blue',
    lines: [
      { text: 'infos.skillup24@gmail.com', href: 'mailto:infos.skillup24@gmail.com' },
      { text: 'ci_consultskillup24@yahoo.com', href: 'mailto:ci_consultskillup24@yahoo.com' },
    ],
  },
  {
    icon: MapPin,
    label: 'Localisation',
    color: 'bg-brand-teal/10',
    iconColor: 'text-brand-teal',
    lines: [{ text: "Abidjan, Côte d'Ivoire" }],
  },
]

// ─── Page Contact ─────────────────────────────────────────────────────────────

export default function Contact() {
  const whatsappNumber = '2250768891544'
  const whatsappMessage = encodeURIComponent(
    "Bonjour, je souhaite avoir des informations sur vos services et formations."
  )
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`

  return (
    <div>
      {/* ── Hero ── */}
      <section className="bg-hero-gradient text-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="inline-block bg-white/20 text-xs font-semibold px-4 py-1.5 rounded-full mb-5 uppercase tracking-widest"
          >
            Prenons contact
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="text-4xl md:text-5xl font-bold font-heading mb-4"
          >
            Contactez-nous
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.16 }}
            className="text-lg text-white/80 max-w-xl mx-auto"
          >
            Échangez directement avec notre équipe via WhatsApp pour obtenir une réponse rapide à toutes vos questions.
          </motion.p>
        </div>
      </section>

      {/* ── Contenu ── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">

          {/* ── Colonne gauche : coordonnées ── */}
          <FadeIn className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900">Nos coordonnées</h2>

            <div className="space-y-4">
              {COORDONNEES.map(({ icon: Icon, label, color, iconColor, lines }) => (
                <div key={label} className="flex items-start gap-4">
                  <div className={`${color} w-11 h-11 rounded-xl flex items-center justify-center shrink-0`}>
                    <Icon size={18} className={iconColor} />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 uppercase font-semibold tracking-wider mb-1">
                      {label}
                    </p>
                    {lines.map(({ text, href }) =>
                      href ? (
                        <a
                          key={text}
                          href={href}
                          className="block text-sm text-gray-700 hover:text-brand-green transition-colors"
                        >
                          {text}
                        </a>
                      ) : (
                        <p key={text} className="text-sm text-gray-700">{text}</p>
                      )
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Horaires */}
            <div className="bg-gray-50 border border-gray-100 rounded-2xl p-6">
              <h3 className="font-semibold text-gray-900 mb-3">Disponibilité</h3>
              <ul className="space-y-1.5 text-sm text-gray-500">
                <li className="flex justify-between">
                  <span>Lundi – Vendredi</span>
                  <span className="font-medium text-gray-700">08h00 – 17h00</span>
                </li>
                <li className="flex justify-between">
                  <span>Samedi</span>
                  <span className="font-medium text-gray-700">09h00 – 15h30</span>
                </li>
                <li className="flex justify-between">
                  <span>Dimanche et jours fériés</span>
                  <span className="text-gray-400">Fermé</span>
                </li>
              </ul>
            </div>
          </FadeIn>

          {/* ── Colonne droite : Carte WhatsApp ── */}
          <FadeIn delay={0.1} className="lg:col-span-2">
            <div className="card p-8 md:p-12 text-center space-y-6 bg-white rounded-2xl border border-gray-100 shadow-sm">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                <MessageCircle size={32} />
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  Discutons directement sur WhatsApp
                </h2>
                <p className="text-gray-600 max-w-md mx-auto text-sm leading-relaxed">
                  Besoin d'informations sur nos formations, une assistance comptable ou le montage de votre projet ? Notre équipe vous répond immédiatement.
                </p>
              </div>

              <div className="pt-2">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-base px-8 py-4 rounded-xl shadow-lg shadow-emerald-600/20 transition-all hover:scale-105 active:scale-95"
                >
                  <MessageCircle size={22} />
                  Démarrer la discussion WhatsApp
                </a>
              </div>

              <p className="text-xs text-gray-400">
                Temps de réponse habituel : moins de 15 minutes.
              </p>
            </div>
          </FadeIn>

        </div>
      </section>
    </div>
  )
}