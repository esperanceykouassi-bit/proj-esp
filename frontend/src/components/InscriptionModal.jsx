import { useState, useEffect, useCallback } from 'react'
import { X, Send, Loader2, GraduationCap, Clock, BadgeCheck } from 'lucide-react'

const INITIAL_FORM = { nom: '', prenom: '', email: '', telephone: '', message: '' }

/**
 * Modale d'inscription à une formation.
 * Props :
 *   formation – objet { id, titre, categorie, duree, prix }
 *   onClose   – ferme la modale
 *   onSuccess – (message: string) => void, appelé après succès API
 */
export default function InscriptionModal({ formation, onClose, onSuccess }) {
  const [form, setForm]           = useState(INITIAL_FORM)
  const [errors, setErrors]       = useState({})
  const [submitting, setSubmitting] = useState(false)

  // Fermeture via Echap
  const handleKeyDown = useCallback((e) => {
    if (e.key === 'Escape') onClose()
  }, [onClose])

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
    }
  }, [handleKeyDown])

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: null }))
  }

  const validate = () => {
    const errs = {}
    if (!form.nom.trim() || form.nom.trim().length < 2)      errs.nom      = 'Nom requis (min 2 caractères)'
    if (!form.prenom.trim() || form.prenom.trim().length < 2) errs.prenom   = 'Prénom requis (min 2 caractères)'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))      errs.email    = 'Email invalide'
    if (!form.telephone.trim() || form.telephone.trim().length < 8) errs.telephone = 'Téléphone requis (min 8 chiffres)'
    return errs
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length) { setErrors(errs); return }

    setSubmitting(true)
    try {
      const res = await fetch('/api/inscriptions', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, formationId: formation.id }),
      })
      const data = await res.json()

      if (!res.ok) {
        // Erreurs de validation serveur
        if (data.details) setErrors(flattenServerErrors(data.details))
        else setErrors({ _global: data.error || 'Une erreur est survenue.' })
        return
      }

      onSuccess(data.message)
      onClose()
    } catch {
      setErrors({ _global: 'Connexion impossible. Vérifiez votre connexion internet.' })
    } finally {
      setSubmitting(false)
    }
  }

  return (
    // Backdrop
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
      onClick={(e) => { if (e.target === e.currentTarget) onClose() }}
    >
      <div
        className="bg-white rounded-3xl shadow-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        {/* Header */}
        <div className="bg-hero-gradient text-white p-6 rounded-t-3xl">
          <div className="flex items-start justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <GraduationCap size={20} className="text-white/80" />
                <span className="text-xs font-semibold uppercase tracking-wider text-white/70">
                  Inscription
                </span>
              </div>
              <h2 id="modal-title" className="text-xl font-bold leading-snug">
                {formation.titre}
              </h2>
              <div className="flex items-center gap-3 mt-2 text-sm text-white/75">
                <span className="inline-flex items-center gap-1.5">
                  <Clock size={14} /> {formation.duree}
                </span>
                <span>•</span>
                <span className="inline-flex items-center gap-1.5">
                  <BadgeCheck size={14} /> {formatPrix(formation.prix)}
                </span>
              </div>
            </div>
            <button
              onClick={onClose}
              aria-label="Fermer"
              className="p-1.5 rounded-xl hover:bg-white/20 transition-colors shrink-0"
            >
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Formulaire */}
        <form onSubmit={handleSubmit} noValidate className="p-6 space-y-4">
          {errors._global && (
            <div className="bg-red-50 border border-red-200 text-red-700 text-sm rounded-xl px-4 py-3">
              {errors._global}
            </div>
          )}

          <div className="grid grid-cols-2 gap-4">
            <Field label="Nom *"    name="nom"    value={form.nom}    error={errors.nom}    onChange={handleChange} placeholder="Kouassi" />
            <Field label="Prénom *" name="prenom" value={form.prenom} error={errors.prenom} onChange={handleChange} placeholder="Marie" />
          </div>

          <Field
            label="Email *"
            name="email"
            type="email"
            value={form.email}
            error={errors.email}
            onChange={handleChange}
            placeholder="votre@email.com"
          />

          <Field
            label="Téléphone *"
            name="telephone"
            type="tel"
            value={form.telephone}
            error={errors.telephone}
            onChange={handleChange}
            placeholder="+225 07 00 00 00 00"
          />

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">
              Message <span className="text-gray-400 font-normal">(optionnel)</span>
            </label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              rows={3}
              placeholder="Précisez votre niveau actuel, vos disponibilités ou toute question…"
              className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm
                focus:outline-none focus:ring-2 focus:ring-brand-green/40 focus:border-brand-green
                transition-colors resize-none"
            />
          </div>

          <button
            type="submit"
            disabled={submitting}
            className="btn-primary w-full justify-center py-3.5 text-base disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {submitting
              ? <><Loader2 size={18} className="animate-spin" /> Envoi en cours…</>
              : <><Send size={18} /> Confirmer mon inscription</>
            }
          </button>

          <p className="text-xs text-center text-gray-400">
            Nous vous répondrons sous 24h pour confirmer votre inscription.
          </p>
        </form>
      </div>
    </div>
  )
}

// ─── Helpers ──────────────────────────────────────────────────────────────────

function Field({ label, name, type = 'text', value, error, onChange, placeholder }) {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium text-gray-700 mb-1.5">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
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

function formatPrix(prix) {
  return new Intl.NumberFormat('fr-FR').format(prix) + ' FCFA'
}

function flattenServerErrors(details) {
  const flat = {}
  for (const [key, messages] of Object.entries(details)) {
    flat[key] = Array.isArray(messages) ? messages[0] : messages
  }
  return flat
}
