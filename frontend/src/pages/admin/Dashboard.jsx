import { useState, useEffect, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  Users, UserPlus, BookOpen, MessageSquare,
  Clock, CheckCircle, XCircle, TrendingUp,
} from 'lucide-react'
import { useAuth } from '../../contexts/AuthContext'

/* ── helpers ────────────────────────────────────────── */
const STATUT_META = {
  EN_ATTENTE:  { label: 'En attente',  cls: 'bg-amber-100  text-amber-700'  },
  CONFIRMEE:   { label: 'Confirmée',   cls: 'bg-green-100  text-green-700'  },
  ANNULEE:     { label: 'Annulée',     cls: 'bg-red-100    text-red-700'    },
}

function StatCard({ icon: Icon, label, value, sub, color }) {
  return (
    <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 flex items-start gap-4">
      <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${color}`}>
        <Icon size={22} className="text-white" />
      </div>
      <div>
        <p className="text-2xl font-bold text-gray-800 leading-tight">{value ?? '—'}</p>
        <p className="text-sm font-medium text-gray-600">{label}</p>
        {sub && <p className="text-xs text-gray-400 mt-0.5">{sub}</p>}
      </div>
    </div>
  )
}

function Badge({ statut }) {
  const meta = STATUT_META[statut] ?? { label: statut, cls: 'bg-gray-100 text-gray-600' }
  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold ${meta.cls}`}>
      {meta.label}
    </span>
  )
}

/* ── component ──────────────────────────────────────── */
export default function Dashboard() {
  const { authFetch } = useAuth()
  const navigate      = useNavigate()

  const [stats,   setStats]   = useState(null)
  const [recents, setRecents] = useState([])
  const [msgs,    setMsgs]    = useState([])
  const [loading, setLoading] = useState(true)
  const [error,   setError]   = useState('')

  const fetchAll = useCallback(async () => {
    setLoading(true)
    setError('')
    try {
      const [sRes, iRes, mRes] = await Promise.all([
        authFetch('/api/admin/stats'),
        authFetch('/api/admin/inscriptions?limit=5'),
        authFetch('/api/admin/messages?limit=5'),
      ])

      if (sRes.status === 401 || iRes.status === 401 || mRes.status === 401) {
        navigate('/admin/login', { replace: true })
        return
      }

      const [s, i, m] = await Promise.all([sRes.json(), iRes.json(), mRes.json()])
      setStats(s)
      setRecents(Array.isArray(i) ? i : (i.data ?? []))
      setMsgs(Array.isArray(m) ? m : (m.data ?? []))
    } catch {
      setError('Impossible de charger les données. Vérifiez votre connexion.')
    } finally {
      setLoading(false)
    }
  }, [authFetch, navigate])

  useEffect(() => { fetchAll() }, [fetchAll])

  /* ── loading skeleton ─────────────────────────────── */
  if (loading) {
    return (
      <div className="animate-pulse space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="bg-white rounded-2xl h-24 border border-gray-100" />
          ))}
        </div>
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
          <div className="bg-white rounded-2xl h-64 border border-gray-100" />
          <div className="bg-white rounded-2xl h-64 border border-gray-100" />
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center h-64 gap-4">
        <XCircle size={40} className="text-red-400" />
        <p className="text-gray-600">{error}</p>
        <button onClick={fetchAll} className="px-4 py-2 bg-brand-green text-white rounded-xl text-sm hover:bg-brand-green-dark transition">
          Réessayer
        </button>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      {/* Title */}
      <div>
        <h1 className="text-2xl font-bold text-gray-800">Tableau de bord</h1>
        <p className="text-sm text-gray-500 mt-0.5">Vue d'ensemble de l'activité SkillUp Consulting CI</p>
      </div>

      {/* Stat cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
        <StatCard
          icon={Users}
          label="Total inscriptions"
          value={stats?.totalInscriptions}
          color="bg-brand-blue"
        />
        <StatCard
          icon={UserPlus}
          label="Nouvelles (7 jours)"
          value={stats?.nouvellesInscriptions}
          sub="Cette semaine"
          color="bg-brand-green"
        />
        <StatCard
          icon={BookOpen}
          label="Formations actives"
          value={stats?.formationsActives}
          color="bg-brand-teal"
        />
        <StatCard
          icon={MessageSquare}
          label="Messages non lus"
          value={stats?.messagesNonLus}
          color="bg-purple-500"
        />
      </div>

      {/* Tables row */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">

        {/* Inscriptions récentes */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100">
            <div className="flex items-center gap-2">
              <TrendingUp size={16} className="text-brand-green" />
              <h2 className="font-semibold text-gray-800 text-sm">Inscriptions récentes</h2>
            </div>
            <button
              onClick={() => navigate('/admin/inscriptions')}
              className="text-xs text-brand-green hover:text-brand-green-dark font-medium transition"
            >
              Voir tout →
            </button>
          </div>

          {recents.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-12 text-gray-400">
              <Users size={32} className="mb-2 opacity-40" />
              <p className="text-sm">Aucune inscription pour l'instant</p>
            </div>
          ) : (
            <div className="divide-y divide-gray-50">
              {recents.map(ins => (
                <div key={ins.id} className="px-5 py-3.5 flex items-center justify-between gap-3">
                  <div className="min-w-0">
                    <p className="text-sm font-medium text-gray-800 truncate">
                      {ins.prenom} {ins.nom}
                    </p>
                    <p className="text-xs text-gray-400 truncate">
                      {ins.formation?.titre ?? '—'}
                    </p>
                  </div>
                  <Badge statut={ins.statut} />
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Messages récents */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100">
            <div className="flex items-center gap-2">
              <MessageSquare size={16} className="text-purple-500" />
              <h2 className="font-semibold text-gray-800 text-sm">Messages récents</h2>
            </div>
            <button
              onClick={() => navigate('/admin/messages')}
              className="text-xs text-brand-green hover:text-brand-green-dark font-medium transition"
            >
              Voir tout →
            </button>
          </div>

          {msgs.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-12 text-gray-400">
              <MessageSquare size={32} className="mb-2 opacity-40" />
              <p className="text-sm">Aucun message pour l'instant</p>
            </div>
          ) : (
            <div className="divide-y divide-gray-50">
              {msgs.map(msg => (
                <div key={msg.id} className="px-5 py-3.5 flex items-start gap-3">
                  {/* Unread dot */}
                  <div className="mt-1.5 shrink-0">
                    {!msg.lu ? (
                      <span className="block w-2 h-2 rounded-full bg-red-500" title="Non lu" />
                    ) : (
                      <span className="block w-2 h-2 rounded-full bg-gray-200" />
                    )}
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between gap-2">
                      <p className="text-sm font-medium text-gray-800 truncate">{msg.nom}</p>
                      <span className="text-xs text-gray-400 shrink-0">
                        {new Date(msg.createdAt).toLocaleDateString('fr-FR', { day: '2-digit', month: 'short' })}
                      </span>
                    </div>
                    <p className="text-xs text-gray-500 truncate">{msg.sujet}</p>
                    <p className="text-xs text-gray-400 line-clamp-1 mt-0.5">{msg.message}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

      </div>
    </div>
  )
}
