import { useState } from 'react'
import { Outlet, NavLink, useNavigate } from 'react-router-dom'
import { LayoutDashboard, GraduationCap, MessageSquare, LogOut, Menu, X, ChevronRight } from 'lucide-react'
import { useAuth } from '../../contexts/AuthContext'

const NAV = [
  { icon: LayoutDashboard, label: 'Tableau de bord', path: '/admin' },
  { icon: GraduationCap,   label: 'Inscriptions',    path: '/admin/inscriptions' },
  { icon: MessageSquare,   label: 'Messages',        path: '/admin/messages' },
]

export default function AdminLayout() {
  const { logout } = useAuth()
  const navigate   = useNavigate()
  const [open, setOpen] = useState(false)

  const handleLogout = () => {
    logout()
    navigate('/admin/login', { replace: true })
  }

  return (
    <div className="flex h-screen bg-gray-100 overflow-hidden">

      {/* ── Overlay mobile ── */}
      {open && (
        <div
          className="fixed inset-0 z-20 bg-black/40 md:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      {/* ── Sidebar ── */}
      <aside
        className={`fixed inset-y-0 left-0 z-30 w-64 bg-gray-900 text-white flex flex-col
          transform transition-transform duration-300 ease-in-out
          ${open ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 md:relative md:flex`}
      >
        {/* Logo */}
        <div className="px-6 py-5 border-b border-gray-700/60">
          <img
            src="/images/logo-full.jpeg"
            alt="SkillUp Consulting CI"
            className="h-9 w-auto object-contain brightness-0 invert"
          />
          <p className="text-[11px] text-gray-400 mt-1.5 uppercase tracking-widest font-semibold">
            Administration
          </p>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-3 py-4 space-y-1 overflow-y-auto">
          {NAV.map(({ icon: Icon, label, path }) => (
            <NavLink
              key={path}
              to={path}
              end={path === '/admin'}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all
                ${isActive
                  ? 'bg-brand-green text-white shadow-md'
                  : 'text-gray-400 hover:bg-gray-800 hover:text-white'
                }`
              }
            >
              <Icon size={18} />
              {label}
              <ChevronRight size={14} className="ml-auto opacity-40" />
            </NavLink>
          ))}
        </nav>

        {/* Déconnexion */}
        <div className="px-3 py-4 border-t border-gray-700/60">
          <button
            onClick={handleLogout}
            className="flex items-center gap-3 w-full px-4 py-3 rounded-xl text-sm font-medium
              text-gray-400 hover:bg-red-900/40 hover:text-red-400 transition-all"
          >
            <LogOut size={18} />
            Déconnexion
          </button>
        </div>
      </aside>

      {/* ── Contenu principal ── */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">

        {/* Header */}
        <header className="h-14 bg-white border-b border-gray-200 flex items-center justify-between px-4 md:px-6 shrink-0 shadow-sm">
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 rounded-lg text-gray-500 hover:bg-gray-100"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
          <div className="hidden md:block" />
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-brand-green flex items-center justify-center">
              <span className="text-white text-xs font-bold">A</span>
            </div>
            <div className="hidden sm:block">
              <p className="text-sm font-semibold text-gray-800">Administrateur</p>
              <p className="text-xs text-gray-400">{import.meta.env.VITE_ADMIN_EMAIL || 'admin@skillup.ci'}</p>
            </div>
          </div>
        </header>

        {/* Page */}
        <main className="flex-1 overflow-y-auto p-4 md:p-6 lg:p-8">
          <Outlet />
        </main>
      </div>
    </div>
  )
}
