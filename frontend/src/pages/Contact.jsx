import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send, Loader2, MessageSquare } from 'lucide-react'
import FadeIn from '../components/FadeIn'
import Toast from '../components/Toast'

// ─── Données statiques ────────────────────────────────────────────────────────

const SUJETS = ['Formation', 'Assistance comptable', 'Montage de projet', 'Autre']

const COORDONNEES = [
  {
    icon:  Phone,
    label: 'Téléphone',
    color: 'bg-brand-green/10',
    iconColor: 'text-brand-green',
    lines: [
      { text: '+225 01 02 21 14 21', href: 'tel:+2250102211421' },
      { text: '+225 05 76 38 76 76', href: 'tel:+2250576387676' },
    ],
  },
  {
    icon:  Mail,
    label: 'Email',
    color: 'bg-brand-blue/10',
    iconColor: 'text-brand-blue',
    lines: [
      { text: 'infos.skillup24@gmail.com',        href: 'mailto:infos.skillup24@gmail.com' },
      { text: 'ci_consultskillup24@yahoo.com',    href: 'mailto:ci_consultskillup24@yahoo.com' },
    ],
  },
  {
    icon:  MapPin,
    label: 'Localisation',
    color: 'bg-brand-teal/10',
    iconColor: 'text-brand-teal',
    lines: [{ text: 'Abidjan, Côte d\'Ivoire' }],
  },
]

const INITIAL_FORM = { nom: '', email: '', telephone: '', sujet: '', message: '' }

// ─── Validation client ────────────────────────────────────────────────────────

function validate(form) {
  const errs = {}
  if (!form.nom.trim() || form.nom.trim().length < 2)
    errs.nom = 'Nom requis (min 2 caractères)'
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
    errs.email = 'Email invalide'
  if (!form.telephone.trim() || form.telephone.trim().length < 8)
    errs.telephone = 'Téléphone requis (min 8 chiffres)'
  if (!form.sujet)
    errs.sujet = 'Veuillez choisir un sujet'
  if (!form.message.trim() || form.message.trim().length < 10)
    errs.message = 'Message trop court (min 10 caractères)'
  return errs
}

// ─── Page Contact ─────────────────────────────────────────────────────────────

export default function Contact() {
  const [form, setForm]         = useState(INITIAL_FORM)
  const [errors, setErrors]     = useState({})
  const [loading, setLoading]   = useState(false)
  const [toast, setToast]       = useState(null)

  const showToast = (message, type = 'success') =>
    setToast({ message, type, key: Date.now() })

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: null }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const errs = validate(form)
    if (Object.keys(errs).length) { setErrors(errs); return }

    setLoading(true)
    try {
      const res  = await fetch('/api/contact', {
        method:  'POST',
        headers: { 'Content-Type': 'application/json' },
        body:    JSON.stringify(form),
      })
      const data = await res.json()

      if (!res.ok) {
        if (data.details) setErrors(flattenServerErrors(data.details))
        else showToast(data.error || 'Une erreur est survenue.', 'error')
        return
      }

      showToast(data.message || 'Message envoyé avec succès !', 'success')
      setForm(INITIAL_FORM)
      setErrors({})
    } catch {
      showToast('Connexion impossible. Vérifiez votre connexion internet.', 'error')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div>
      {/* ── Hero ── */}
      <section className="bg-hero-gradient text-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.span
            initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="inline-block bg-white/20 text-xs font-semibold px-4 py-1.5 rounded-full mb-5 uppercase tracking-widest"
          >
            Prenons contact
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="text-4xl md:text-5xl font-bold font-heading mb-4"
          >
            Contactez-nous
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.16 }}
            className="text-lg text-white/80 max-w-xl mx-auto"
          >
            Partagez-nous votre besoin et nous vous répondrons dans les plus brefs délais
            avec une proposition adaptée à votre contexte.
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
                        <a key={text} href={href}
                           className="block text-sm text-gray-700 hover:text-brand-green transition-colors">
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

            {/* Encart diagnostic */}
            <div className="bg-brand-green/5 border border-brand-green/20 rounded-2xl p-6">
              <div className="flex items-center gap-2 mb-2">
                <MessageSquare size={18} className="text-brand-green" />
                <h3 className="font-semibold text-gray-900">Diagnostic gratuit</h3>
              </div>
              <p className="text-sm text-gray-500 leading-relaxed">
                Chaque engagement commence par une analyse gratuite de vos besoins.
                Nous vous proposons ensuite la solution la plus adaptée à votre réalité.
              </p>
            </div>

            {/* Horaires */}
            <div className="bg-gray-50 border border-gray-100 rounded-2xl p-6">
              <h3 className="font-semibold text-gray-900 mb-3">Disponibilité</h3>
              <ul className="space-y-1.5 text-sm text-gray-500">
                <li className="flex justify-between">
                  <span>Lundi – Vendredi</span>
                  <span className="font-medium text-gray-700">08h00 – 18h00</span>
                </li>
                <li className="flex justify-between">
                  <span>Samedi</span>
                  <span className="font-medium text-gray-700">09h00 – 13h00</span>
                </li>
                <li className="flex justify-between">
                  <span>Dimanche</span>
                  <span className="text-gray-400">Fermé</span>
                </li>
              </ul>
            </div>

          </FadeIn>

          {/* ── Colonne droite : formulaire ── */}
          <FadeIn delay={0.1} className="lg:col-span-2">
            <form
              onSubmit={handleSubmit}
              noValidate
              className="card p-8 md:p-10 space-y-5"
            >
              <div>
                <h2 className="text-xl font-bold text-gray-900">Formulaire de contact</h2>
                <p className="text-sm text-gray-500 mt-1">
                  Les champs marqués <span className="text-red-500">*</span> sont obligatoires.
                </p>
              </div>

              {/* Nom + Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <Field
                  label="Nom complet" name="nom" value={form.nom}
                  error={errors.nom} onChange={handleChange}
                  placeholder="Kouassi Adjoua" required
                />
                <Field
                  label="Email" name="email" type="email" value={form.email}
                  error={errors.email} onChange={handleChange}
                  placeholder="votre@email.com" required
                />
              </div>

              {/* Téléphone + Sujet */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <Field
                  label="Téléphone" name="telephone" type="tel" value={form.telephone}
                  error={errors.telephone} onChange={handleChange}
                  placeholder="+225 07 00 00 00 00" required
                />
                <SelectField
                  label="Sujet" name="sujet" value={form.sujet}
                  error={errors.sujet} onChange={handleChange}
                  options={SUJETS} required
                />
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message"
                       className="block text-sm font-medium text-gray-700 mb-1.5">
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message" name="message" rows={5} value={form.message}
                  onChange={handleChange}
                  placeholder="Décrivez votre besoin, votre contexte ou votre projet…"
                  className={`w-full px-4 py-2.5 border rounded-xl text-sm resize-none
                    focus:outline-none focus:ring-2 transition-colors
                    ${errors.message
                      ? 'border-red-400 focus:ring-red-200 bg-red-50'
                      : 'border-gray-200 focus:ring-brand-green/40 focus:border-brand-green'
                    }`}
                />
                {errors.message && (
                  <p className="mt-1 text-xs text-red-600">{errors.message}</p>
                )}
              </div>

              {/* Bouton */}
              <button
                type="submit"
                disabled={loading}
                className="btn-primary w-full justify-center py-3.5 text-base
                           disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {loading
                  ? <><Loader2 size={18} className="animate-spin" /> Envoi en cours…</>
                  : <><Send size={18} /> Envoyer le message</>
                }
              </button>

              <p className="text-xs text-center text-gray-400">
                Un accusé de réception vous sera envoyé par email. Réponse sous 24h.
              </p>
            </form>
          </FadeIn>

        </div>
      </section>

      {/* ── Toast ── */}
      {toast && (
        <Toast
          key={toast.key}
          message={toast.message}
          type={toast.type}
          onClose={() => setToast(null)}
        />
      )}
    </div>
  )
}

// ─── Sous-composants ──────────────────────────────────────────────────────────

function Field({ label, name, type = 'text', value, error, onChange, placeholder, required }) {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium text-gray-700 mb-1.5">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <input
        id={name} name={name} type={type} value={value}
        onChange={onChange} placeholder={placeholder}
        className={`w-full px-4 py-2.5 border rounded-xl text-sm
          focus:outline-none focus:ring-2 transition-colors
          ${error
            ? 'border-red-400 focus:ring-red-200 focus:border-red-400 bg-red-50'
            : 'border-gray-200 focus:ring-brand-green/40 focus:border-brand-green'
          }`}
      />
      {error && <p className="mt-1 text-xs text-red-600">{error}</p>}
    </div>
  )
}

function SelectField({ label, name, value, error, onChange, options, required }) {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium text-gray-700 mb-1.5">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <select
        id={name} name={name} value={value} onChange={onChange}
        className={`w-full px-4 py-2.5 border rounded-xl text-sm bg-white
          focus:outline-none focus:ring-2 transition-colors
          ${error
            ? 'border-red-400 focus:ring-red-200 focus:border-red-400 bg-red-50'
            : 'border-gray-200 focus:ring-brand-green/40 focus:border-brand-green'
          }`}
      >
        <option value="">Choisir un sujet…</option>
        {options.map((o) => <option key={o} value={o}>{o}</option>)}
      </select>
      {error && <p className="mt-1 text-xs text-red-600">{error}</p>}
    </div>
  )
}

function flattenServerErrors(details) {
  const flat = {}
  for (const [key, messages] of Object.entries(details)) {
    flat[key] = Array.isArray(messages) ? messages[0] : messages
  }
  return flat
}
