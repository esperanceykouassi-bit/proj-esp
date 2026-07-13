import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Clock, BadgeCheck, GraduationCap, ServerCrash, Loader2,
  Monitor, FileSpreadsheet, Users, Calculator, Briefcase, BookOpen,
} from 'lucide-react'
import { useFormations } from '../hooks/useFormations'
import InscriptionModal from '../components/InscriptionModal'
import Toast from '../components/Toast'
import FadeIn from '../components/FadeIn'

// ─── Config catégories ────────────────────────────────────────────────────────

const FILTRES = [
  { label: 'Tout',        value: '' },
  { label: 'SAARI',       value: 'SAARI' },
  { label: 'Bureautique', value: 'BUREAUTIQUE' },
  { label: 'Leadership',  value: 'LEADERSHIP' },
  { label: 'Assistance',  value: 'COMPTABLE' },
  { label: 'Projets',     value: 'PROJET' },
]

const BADGE = {
  SAARI:       { label: 'SAARI',        bg: 'bg-brand-green',      text: 'text-white' },
  BUREAUTIQUE: { label: 'Bureautique',  bg: 'bg-brand-teal',       text: 'text-white' },
  LEADERSHIP:  { label: 'Leadership',   bg: 'bg-brand-blue',       text: 'text-white' },
  COMPTABLE:   { label: 'Comptabilité', bg: 'bg-amber-600',        text: 'text-white' },
  PROJET:      { label: 'Projets',      bg: 'bg-brand-blue-mid',   text: 'text-white' },
}

const ICON = {
  SAARI:       Monitor,
  BUREAUTIQUE: FileSpreadsheet,
  LEADERSHIP:  Users,
  COMPTABLE:   Calculator,
  PROJET:      Briefcase,
}

function formatPrix(prix) {
  return new Intl.NumberFormat('fr-FR').format(prix) + ' FCFA'
}

// ─── Page principale ──────────────────────────────────────────────────────────

export default function Formations() {
  const [activeCategorie, setActiveCategorie] = useState('')
  const [selectedFormation, setSelectedFormation] = useState(null)
  const [toast, setToast] = useState(null)

  const { formations, loading, error } = useFormations(activeCategorie)

  const showToast = (message, type = 'success') => {
    setToast({ message, type, key: Date.now() })
  }

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
            Catalogue de formations
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="text-4xl md:text-5xl font-bold font-heading mb-4"
          >
            Nos Formations
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.16 }}
            className="text-lg text-white/80 max-w-2xl mx-auto"
          >
            Des programmes pratiques, animés par des experts du terrain, pour booster
            vos compétences et accélérer votre carrière.
          </motion.p>
        </div>
      </section>

      {/* ── Filtres ── */}
      <section className="sticky top-20 z-30 bg-white border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center gap-2 overflow-x-auto scrollbar-none">
          {FILTRES.map((filtre) => (
            <button
              key={filtre.value}
              onClick={() => setActiveCategorie(filtre.value)}
              className={`shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200
                ${activeCategorie === filtre.value
                  ? 'bg-brand-green text-white shadow-md'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
            >
              {filtre.label}
            </button>
          ))}
        </div>
      </section>

      {/* ── Contenu ── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        {/* Spinner */}
        {loading && (
          <div className="flex flex-col items-center justify-center py-24 gap-4 text-gray-400">
            <Loader2 size={40} className="animate-spin text-brand-green" />
            <p className="text-sm">Chargement des formations…</p>
          </div>
        )}

        {/* Erreur */}
        {!loading && error && (
          <FadeIn>
            <div className="flex flex-col items-center justify-center py-24 gap-4 text-center">
              <ServerCrash size={48} className="text-red-400" />
              <h3 className="text-lg font-semibold text-gray-700">Impossible de charger les formations</h3>
              <p className="text-sm text-gray-500 max-w-md">{error}</p>
              <p className="text-xs text-gray-400">Vérifiez que le serveur backend est démarré sur le port 3001.</p>
              <button
                onClick={() => setActiveCategorie(activeCategorie)}
                className="btn-outline text-sm py-2"
              >
                Réessayer
              </button>
            </div>
          </FadeIn>
        )}

        {/* Grille */}
        {!loading && !error && (
          <>
            {formations.length === 0 ? (
              <FadeIn>
                <div className="flex flex-col items-center justify-center py-24 gap-3 text-center">
                  <GraduationCap size={48} className="text-gray-300" />
                  <h3 className="text-lg font-semibold text-gray-600">Aucune formation dans cette catégorie</h3>
                  <button
                    onClick={() => setActiveCategorie('')}
                    className="text-sm text-brand-green hover:underline"
                  >
                    Voir toutes les formations
                  </button>
                </div>
              </FadeIn>
            ) : (
              <>
                <p className="text-sm text-gray-500 mb-6">
                  {formations.length} formation{formations.length > 1 ? 's' : ''} disponible{formations.length > 1 ? 's' : ''}
                </p>
                <AnimatePresence mode="popLayout">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {formations.map((formation, index) => (
                      <FormationCard
                        key={formation.id}
                        formation={formation}
                        index={index}
                        onInscrire={() => setSelectedFormation(formation)}
                      />
                    ))}
                  </div>
                </AnimatePresence>
              </>
            )}
          </>
        )}
      </section>

      {/* ── Modale inscription ── */}
      {selectedFormation && (
        <InscriptionModal
          formation={selectedFormation}
          onClose={() => setSelectedFormation(null)}
          onSuccess={(msg) => showToast(msg, 'success')}
        />
      )}

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

// ─── Carte formation ──────────────────────────────────────────────────────────

function FormationCard({ formation, index, onInscrire }) {
  const badge = BADGE[formation.categorie] ?? { label: formation.categorie, bg: 'bg-gray-500', text: 'text-white' }
  const Icon = ICON[formation.categorie] ?? BookOpen

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.35, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
      className="card flex flex-col group"
    >
      {/* Top coloré */}
      <div className={`h-2 ${badge.bg} rounded-t-2xl`} />

      <div className="p-6 flex flex-col flex-1">
        {/* Badge + icône */}
        <div className="flex items-start justify-between mb-4">
          <span className={`inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full ${badge.bg} ${badge.text}`}>
            {badge.label}
          </span>
          <div className={`w-10 h-10 rounded-xl ${badge.bg} flex items-center justify-center`}>
            <Icon size={18} className="text-white" strokeWidth={2} />
          </div>
        </div>

        {/* Titre */}
        <h3 className="text-base font-bold text-gray-900 mb-2 leading-snug group-hover:text-brand-green transition-colors">
          {formation.titre}
        </h3>

        {/* Description tronquée */}
        <p className="text-sm text-gray-500 leading-relaxed mb-5 flex-1 line-clamp-3">
          {formation.description}
        </p>

        {/* Meta : durée + prix */}
        <div className="flex items-center justify-between gap-2 mb-5">
          <div className="flex items-center gap-1.5 text-gray-500 text-sm">
            <Clock size={14} className="text-brand-green shrink-0" />
            <span>{formation.duree}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <BadgeCheck size={14} className="text-brand-green shrink-0" />
            <span className="text-brand-green font-bold text-sm">
              {formatPrix(formation.prix)}
            </span>
          </div>
        </div>

        {/* Bouton */}
        <button
          onClick={onInscrire}
          className="btn-primary w-full justify-center py-2.5 text-sm"
        >
          <GraduationCap size={16} />
          S'inscrire
        </button>
      </div>
    </motion.div>
  )
}
