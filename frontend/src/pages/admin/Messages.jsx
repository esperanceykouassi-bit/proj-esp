import { useState, useEffect, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { Search, Mail, MailOpen, RefreshCw, XCircle, MessageSquare } from 'lucide-react'
import { useAuth } from '../../contexts/AuthContext'

/* ── main component ─────────────────────────────────── */
export default function Messages() {
  const { authFetch } = useAuth()
  const navigate      = useNavigate()

  const [messages,  setMessages]  = useState([])
  const [loading,   setLoading]   = useState(true)
  const [error,     setError]     = useState('')
  const [filter,    setFilter]    = useState('all')   // 'all' | 'unread' | 'read'
  const [search,    setSearch]    = useState('')
  const [updating,  setUpdating]  = useState(null)
  const [expanded,  setExpanded]  = useState(null)    // id du message ouvert
  const [toast,     setToast]     = useState(null)

  const showToast = (msg, type = 'success') => {
    setToast({ msg, type })
    setTimeout(() => setToast(null), 3000)
  }

  const fetchMessages = useCallback(async () => {
    setLoading(true)
    setError('')
    try {
      const params = filter === 'unread' ? '?lu=false' : filter === 'read' ? '?lu=true' : ''
      const res    = await authFetch(`/api/admin/messages${params}`)
      if (res.status === 401) { navigate('/admin/login', { replace: true }); return }
      const data   = await res.json()
      setMessages(Array.isArray(data) ? data : (data.data ?? []))
    } catch {
      setError('Impossible de charger les messages.')
    } finally {
      setLoading(false)
    }
  }, [authFetch, filter, navigate])

  useEffect(() => { fetchMessages() }, [fetchMessages])

  const markAsRead = async (id) => {
    setUpdating(id)
    try {
      const res = await authFetch(`/api/admin/messages/${id}/lu`, { method: 'PATCH' })
      if (!res.ok) { showToast('Mise à jour échouée.', 'error'); return }
      setMessages(prev => prev.map(m => m.id === id ? { ...m, lu: true } : m))
      showToast('Message marqué comme lu.')
    } catch {
      showToast('Erreur réseau.', 'error')
    } finally {
      setUpdating(null)
    }
  }

  const toggleExpand = (id) => {
    setExpanded(prev => prev === id ? null : id)
    // auto-mark as read when expanding
    const msg = messages.find(m => m.id === id)
    if (msg && !msg.lu) markAsRead(id)
  }

  /* client-side search + filter */
  const displayed = messages.filter(msg => {
    if (!search.trim()) return true
    const q = search.toLowerCase()
    return (
      msg.nom?.toLowerCase().includes(q) ||
      msg.email?.toLowerCase().includes(q) ||
      msg.sujet?.toLowerCase().includes(q) ||
      msg.message?.toLowerCase().includes(q)
    )
  })

  const unreadCount = messages.filter(m => !m.lu).length

  const fmtDate = (d) =>
    new Date(d).toLocaleDateString('fr-FR', { day: '2-digit', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' })

  return (
    <div className="space-y-5">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <h1 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
            Messages
            {unreadCount > 0 && (
              <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-red-500 text-white text-xs font-bold">
                {unreadCount}
              </span>
            )}
          </h1>
          <p className="text-sm text-gray-500 mt-0.5">{messages.length} message{messages.length !== 1 ? 's' : ''} au total</p>
        </div>
        <button
          onClick={fetchMessages}
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
            placeholder="Rechercher par nom, email, sujet…"
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="w-full pl-9 pr-4 py-2.5 border border-gray-200 rounded-xl text-sm
              focus:outline-none focus:ring-2 focus:ring-brand-green focus:border-transparent bg-white shadow-sm"
          />
        </div>

        {/* Read/Unread tabs */}
        <div className="flex bg-white border border-gray-200 rounded-xl p-1 shadow-sm gap-1">
          {[
            { val: 'all',    label: 'Tous'        },
            { val: 'unread', label: 'Non lus'     },
            { val: 'read',   label: 'Lus'         },
          ].map(({ val, label }) => (
            <button
              key={val}
              onClick={() => setFilter(val)}
              className={`px-4 py-1.5 rounded-lg text-sm font-medium transition
                ${filter === val ? 'bg-brand-green text-white shadow' : 'text-gray-600 hover:bg-gray-50'}`}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      {/* Error */}
      {error && (
        <div className="flex items-center gap-2 text-red-600 bg-red-50 border border-red-200 rounded-xl px-4 py-3 text-sm">
          <XCircle size={16} />
          {error}
        </div>
      )}

      {/* Messages list */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        {loading ? (
          <div className="animate-pulse divide-y divide-gray-50">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="h-20 px-5 flex items-center gap-4">
                <div className="w-2 h-2 rounded-full bg-gray-200" />
                <div className="flex-1 space-y-2">
                  <div className="h-3 bg-gray-100 rounded w-40" />
                  <div className="h-2 bg-gray-100 rounded w-64" />
                </div>
              </div>
            ))}
          </div>
        ) : displayed.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-16 text-gray-400">
            <MessageSquare size={36} className="mb-2 opacity-40" />
            <p className="text-sm">Aucun message trouvé</p>
            {(filter !== 'all' || search) && (
              <button
                onClick={() => { setFilter('all'); setSearch('') }}
                className="mt-3 text-xs text-brand-green hover:underline"
              >
                Réinitialiser les filtres
              </button>
            )}
          </div>
        ) : (
          <div className="divide-y divide-gray-50">
            {displayed.map(msg => (
              <div key={msg.id} className={`transition ${!msg.lu ? 'bg-blue-50/30' : ''}`}>
                {/* Row header */}
                <button
                  onClick={() => toggleExpand(msg.id)}
                  className="w-full text-left px-5 py-4 flex items-start gap-4 hover:bg-gray-50/60 transition"
                >
                  {/* Unread indicator */}
                  <div className="mt-1.5 shrink-0">
                    {!msg.lu ? (
                      <span className="block w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse" />
                    ) : (
                      <span className="block w-2.5 h-2.5 rounded-full bg-gray-200" />
                    )}
                  </div>

                  {/* Icon */}
                  <div className={`shrink-0 mt-0.5 ${!msg.lu ? 'text-brand-green' : 'text-gray-400'}`}>
                    {!msg.lu ? <Mail size={17} /> : <MailOpen size={17} />}
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <p className={`text-sm leading-snug ${!msg.lu ? 'font-semibold text-gray-800' : 'font-medium text-gray-700'}`}>
                          {msg.nom}
                          <span className="ml-2 text-gray-400 font-normal text-xs">{msg.email}</span>
                          {msg.telephone && (
                            <span className="ml-2 text-gray-400 font-normal text-xs">{msg.telephone}</span>
                          )}
                        </p>
                        <p className={`text-sm mt-0.5 ${!msg.lu ? 'text-gray-700' : 'text-gray-500'}`}>
                          {msg.sujet}
                        </p>
                        {expanded !== msg.id && (
                          <p className="text-xs text-gray-400 mt-1 line-clamp-1">{msg.message}</p>
                        )}
                      </div>
                      <div className="flex flex-col items-end gap-1.5 shrink-0">
                        <span className="text-xs text-gray-400 whitespace-nowrap">
                          {fmtDate(msg.createdAt)}
                        </span>
                        {expanded === msg.id ? (
                          <span className="text-xs text-gray-400">▲ Réduire</span>
                        ) : (
                          <span className="text-xs text-gray-400">▼ Voir</span>
                        )}
                      </div>
                    </div>
                  </div>
                </button>

                {/* Expanded message */}
                {expanded === msg.id && (
                  <div className="px-5 pb-5">
                    <div className="ml-[52px] bg-gray-50 rounded-xl p-4 border border-gray-100">
                      <p className="text-sm text-gray-700 whitespace-pre-wrap leading-relaxed">
                        {msg.message}
                      </p>

                      <div className="flex items-center justify-between mt-4 pt-3 border-t border-gray-200">
                        <a
                          href={`mailto:${msg.email}?subject=Re: ${encodeURIComponent(msg.sujet)}`}
                          className="inline-flex items-center gap-1.5 text-xs text-brand-green hover:text-brand-green-dark font-medium transition"
                          onClick={e => e.stopPropagation()}
                        >
                          <Mail size={13} /> Répondre par e-mail
                        </a>

                        {!msg.lu && (
                          <button
                            onClick={(e) => { e.stopPropagation(); markAsRead(msg.id) }}
                            disabled={updating === msg.id}
                            className="flex items-center gap-1.5 text-xs text-gray-500 hover:text-brand-green
                              disabled:opacity-40 disabled:cursor-not-allowed transition font-medium"
                          >
                            <MailOpen size={13} />
                            {updating === msg.id ? 'Mise à jour…' : 'Marquer comme lu'}
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Toast */}
      {toast && (
        <div className={`fixed bottom-6 right-6 z-50 flex items-center gap-3 px-5 py-3.5 rounded-xl
          shadow-lg text-white text-sm font-medium
          ${toast.type === 'error' ? 'bg-red-500' : 'bg-brand-green'}`}>
          {toast.msg}
        </div>
      )}
    </div>
  )
}
