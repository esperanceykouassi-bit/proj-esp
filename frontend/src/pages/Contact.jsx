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

export default function Contact() {
  const whatsappNumber = '2250102211421'
  const whatsappMessage = encodeURIComponent(
    "Bonjour, je souhaite obtenir des informations sur vos services et vos formations."
  )
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`
  const callUrl = 'tel:+2250102211421'
  const mailUrl = 'mailto:infos.skillup24@gmail.com?subject=Demande%20d%27information'

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
            Choisissez le canal de communication qui vous convient le mieux pour échanger avec notre équipe.
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

          {/* ── Colonne droite : Carte d'actions multiples ── */}
          <FadeIn delay={0.1} className="lg:col-span-2">
            <div className="card p-8 md:p-12 text-center space-y-8 bg-white rounded-2xl border border-gray-100 shadow-sm">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-3">
                  Échangeons sur votre projet
                </h2>
                <p className="text-gray-600 max-w-lg mx-auto text-sm leading-relaxed">
                  Vous avez un projet ou souhaitez découvrir nos services ? Contactez-nous pour obtenir des informations sur nos formations, notre assistance comptable et notre accompagnement personnalisé.
                </p>
              </div>

              {/* Boutons d'action */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
                {/* Bouton WhatsApp */}
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm px-6 py-3.5 rounded-xl shadow-lg shadow-emerald-600/20 transition-all hover:scale-105 active:scale-95"
                >
                  <MessageCircle size={20} />
                  WhatsApp
                </a>

                {/* Bouton Appeler */}
                <a
                  href={callUrl}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-brand-green hover:bg-emerald-800 text-white font-semibold text-sm px-6 py-3.5 rounded-xl shadow-lg shadow-brand-green/20 transition-all hover:scale-105 active:scale-95"
                >
                  <Phone size={20} />
                  Appeler
                </a>

                {/* Bouton Email */}
                <a
                  href={mailUrl}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-gray-900 hover:bg-gray-800 text-white font-semibold text-sm px-6 py-3.5 rounded-xl shadow-lg shadow-gray-900/20 transition-all hover:scale-105 active:scale-95"
                >
                  <Mail size={20} />
                  Envoyer un email
                </a>
              </div>
            </div>
          </FadeIn>

        </div>
      </section>
    </div>
  )
}