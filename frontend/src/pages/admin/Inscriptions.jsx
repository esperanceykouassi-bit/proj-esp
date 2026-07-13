import { useState, useEffect, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { Search, Filter, RefreshCw, ChevronDown, Users, XCircle, Check } from 'lucide-react'
import { useAuth } from '../../contexts/AuthContext'

/* ── constants ──────────────────────────────────────── */
const STATUT_META = {
  EN_ATTENTE: { label: 'En attente',  cls: 'bg-amber-100  text-amber-700  border-amber-200'  },
  CONFIRMEE:  { label: 'Confirmée',   cls: 'bg-green-100  text-green-700  border-green-200'  },
  ANNULEE:    { label: 'Annulée',     cls: 'bg-red-100    text-red-700    border-red-200'    },
}

const FILTER_OPTS = [
  { value: '',           label: 'Tous les statuts' },
  { value: 'EN_ATTENTE', label: 'En attente'        },
  { value: 'CONFIRMEE',  label: 'Confirmées'         },
  { value: 'ANNULEE',    label: 'Annulées'           },
]

/* ── sub-components ─────────────────────────────────── */
function Badge({ statut }) {
  const m = STATUT_META[statut] ?? { label: statut, cls: 'bg-gray-100 text-gray-600 border-gray-200' }
  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold border ${m.cls}`}>
      {m.label}
    </span>
  )
}

function StatutDropdown({ currentStatut, onUpdate, disabled }) {
  const [open, setOpen] = useState(false)

  const choose = async (value) => {
    setOpen(false)
    if (value !== currentStatut) await onUpdate(value)
  }

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(v => !v)}
        disabled={disabled}
        className="flex items-center gap-1 text-xs text-gray-500 hover:text-brand-green
          disabled:opacity-40 disabled:cursor-not-allowed transition"
      >
        Modifier <ChevronDown size={12} />
      </button>
      {open && (
        <>
          <div className="fixed inset-0 z-10" onClick={() => setOpen(false)} />
          <div className="absolute right-0 mt-1 z-20 bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden min-w-[140px]">
            {Object.entries(STATUT_META).map(([val, meta]) => (
              <button
                key={val}
                onClick={() => choose(val)}
                className={`w-full text-left px-3 py-2 text-xs font-medium transition hover:bg-gray-50
                  ${val === currentStatut ? 'text-brand-green' : 'text-gray-700'}`}
              >
                {meta.label}
                {val === currentStatut && <Check size={12} className="inline ml-1 text-brand-green" />}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  )
}

/* ── main component ─────────────────────────────────── */
export default function Inscriptions() {
  const { authFetch } = useAuth()
  const navigate      = useNavigate()

  const [inscriptions, setInscriptions] = useState([])
  const [loading,      setLoading]      = useState(true)
  const [error,        setError]        = useState('')
  const [filter,       setFilter]       = useState('')
  const [search,       setSearch]       = useState('')
  const [updating,     setUpdating]     = useState(null)   // id en cours de mise à jour
  const [toast,        setToast]        = useState(null)

  const showToast = (msg, type = 'success') => {
    setToast({ msg, type })
    setTimeout(() => setToast(null), 3500)
  }

  const fetchInscriptions = useCallback(async () => {
    setLoading(true)
    setError('')
    try {
      const params = filter ? `?statut=${filter}` : ''
      const res    = await authFetch(`/api/admin/inscriptions${params}`)
      if (res.status === 401) { navigate('/admin/login', { replace: true }); return }
      const data   = await res.json()
      setInscriptions(Array.isArray(data) ? data : (data.data ?? []))
    } catch {
      setError('Impossible de charger les inscriptions.')
    } finally {
      setLoading(false)
    }
  }, [authFetch, filter, navigate])

  useEffect(() => { fetchInscriptions() }, [fetchInscriptions])

  const handleUpdate = async (id, statut) => {
    setUpdating(id)
    try {
      const res  = await authFetch(`/api/admin/inscriptions/${id}/statut`, {
        method: 'PATCH',
        body:   JSON.stringify({ statut }),
      })
      if (!res.ok) { showToast('Mise à jour échouée.', 'error'); return }
      setInscriptions(prev => prev.map(ins => ins.id === id ? { ...ins, statut } : ins))
      showToast('Statut mis à jour avec succès.')
    } catch {
      showToast('Erreur réseau.', 'error')
    } finally {
      setUpdating(null)
    }
  }

  /* client-side search */
  const displayed = inscriptions.filter(ins => {
    if (!search.trim()) return true
    const q = search.toLowerCase()
    return (
      ins.nom?.toLowerCase().includes(q) ||
      ins.prenom?.toLowerCase().includes(q) ||
      ins.email?.toLowerCase().includes(q) ||
      ins.formation?.titre?.toLowerCase().includes(q)
    )
  })

  const fmtDate = (d) =>
    new Date(d).toLocaleDateString('fr-FR', { day: '2-digit', month: 'short', year: 'numeric' })

  const fmtPhone = (t) => t || '—'

  return (
    <div className="space-y-5">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Inscriptions</h1>
          <p className="text-sm text-gray-500 mt-0.5">{inscriptions.length} inscriptions enregistrées</p>
        </div>
        <button
          onClick={fetchInscriptions}
          className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-xl text-sm
            text-gray-600 hover:bg-gray-50 transition shadow-sm"
        >
          <RefreshCw size={15} />
          Actualiser
        </button>
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-3">
        {/* Search */}
        <div className="relative flex-1">
          <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Rechercher par nom, email, formation…"
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="w-full pl-9 pr-4 py-2.5 border border-gray-200 rounded-xl text-sm
              focus:outline-none focus:ring-2 focus:ring-brand-green focus:border-transparent bg-white shadow-sm"
          />
        </div>

        {/* Statut filter */}
        <div className="relative">
          <Filter size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
          <select
            value={filter}
            onChange={e => setFilter(e.target.value)}
            className="pl-9 pr-8 py-2.5 border border-gray-200 rounded-xl text-sm bg-white shadow-sm
              focus:outline-none focus:ring-2 focus:ring-brand-green appearance-none cursor-pointer"
          >
            {FILTER_OPTS.map(o => (
              <option key={o.value} value={o.value}>{o.label}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Error */}
      {error && (
        <div className="flex items-center gap-2 text-red-600 bg-red-50 border border-red-200 rounded-xl px-4 py-3 text-sm">
          <XCircle size={16} />
          {error}
        </div>
      )}

      {/* Table card */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        {loading ? (
          <div className="animate-pulse divide-y divide-gray-50">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="h-16 px-5 flex items-center gap-4">
                <div className="h-3 bg-gray-100 rounded w-32" />
                <div className="h-3 bg-gray-100 rounded w-48" />
                <div className="ml-auto h-5 bg-gray-100 rounded-full w-20" />
              </div>
            ))}
          </div>
        ) : displayed.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-16 text-gray-400">
            <Users size={36} className="mb-2 opacity-40" />
            <p className="text-sm">Aucune inscription trouvée</p>
            {(filter || search) && (
              <button
                onClick={() => { setFilter(''); setSearch('') }}
                className="mt-3 text-xs text-brand-green hover:underline"
              >
                Réinitialiser les filtres
              </button>
            )}
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-sm min-w-[720px]">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-100">
                  <th className="text-left px-5 py-3.5 text-xs font-semibold text-gray-500 uppercase tracking-wide">Candidat</th>
                  <th className="text-left px-5 py-3.5 text-xs font-semibold text-gray-500 uppercase tracking-wide">Formation</th>
                  <th className="text-left px-5 py-3.5 text-xs font-semibold text-gray-500 uppercase tracking-wide">Contact</th>
                  <th className="text-left px-5 py-3.5 text-xs font-semibold text-gray-500 uppercase tracking-wide">Date</th>
                  <th className="text-left px-5 py-3.5 text-xs font-semibold text-gray-500 uppercase tracking-wide">Statut</th>
                  <th className="px-5 py-3.5" />
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {displayed.map(ins => (
                  <tr key={ins.id} className="hover:bg-gray-50/60 transition">
                    <td className="px-5 py-4">
                      <p className="font-medium text-gray-800">{ins.prenom} {ins.nom}</p>
                    </td>
                    <td className="px-5 py-4">
                      <p className="text-gray-700">{ins.formation?.titre ?? '—'}</p>
                      <p className="text-xs text-gray-400">{ins.formation?.categorie ?? ''}</p>
                    </td>
                    <td className="px-5 py-4">
                      <p className="text-gray-600">{ins.email}</p>
                      <p className="text-xs text-gray-400">{fmtPhone(ins.telephone)}</p>
                    </td>
                    <td className="px-5 py-4 text-gray-500 whitespace-nowrap">
                      {fmtDate(ins.createdAt)}
                    </td>
                    <td className="px-5 py-4">
                      <Badge statut={ins.statut} />
                    </td>
                    <td className="px-5 py-4 text-right">
                      <StatutDropdown
                        currentStatut={ins.statut}
                        onUpdate={(s) => handleUpdate(ins.id, s)}
                        disabled={updating === ins.id}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Toast */}
      {toast && (
        <div className={`fixed bottom-6 right-6 z-50 flex items-center gap-3 px-5 py-3.5 rounded-xl
          shadow-lg text-white text-sm font-medium transition-all
          ${toast.type === 'error' ? 'bg-red-500' : 'bg-brand-green'}`}>
          {toast.msg}
        </div>
      )}
    </div>
  )
}
