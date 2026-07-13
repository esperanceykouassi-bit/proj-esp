import { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { useAuth } from '../../contexts/AuthContext'
import { Eye, EyeOff, LogIn, AlertCircle } from 'lucide-react'

export default function Login() {
  const { login } = useAuth()
  const navigate  = useNavigate()
  const location  = useLocation()
  const from      = location.state?.from?.pathname || '/admin'

  const [form,    setForm]    = useState({ email: '', password: '' })
  const [showPwd, setShowPwd] = useState(false)
  const [error,   setError]   = useState('')
  const [loading, setLoading] = useState(false)

  const handleChange = (e) =>
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')

    if (!form.email || !form.password) {
      setError('Veuillez remplir tous les champs.')
      return
    }

    setLoading(true)
    try {
      const res  = await fetch('/api/admin/login', {
        method:  'POST',
        headers: { 'Content-Type': 'application/json' },
        body:    JSON.stringify(form),
      })
      const data = await res.json()

      if (!res.ok) {
        setError(data.error || 'Identifiants incorrects.')
        return
      }

      login(data.token)
      navigate(from, { replace: true })
    } catch {
      setError('Impossible de contacter le serveur. Vérifiez votre connexion.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-hero-gradient flex items-center justify-center p-4">
      <div className="w-full max-w-md">

        {/* Card */}
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">

          {/* Header */}
          <div className="bg-gray-900 px-8 py-7 text-center">
            <img
              src="/images/logo-full.jpeg"
              alt="SkillUp Consulting CI"
              className="h-10 w-auto object-contain brightness-0 invert mx-auto mb-3"
            />
            <p className="text-gray-400 text-xs uppercase tracking-widest font-semibold">
              Espace Administration
            </p>
          </div>

          {/* Form */}
          <div className="px-8 py-8">
            <h1 className="text-xl font-bold text-gray-800 mb-1">Connexion</h1>
            <p className="text-sm text-gray-500 mb-6">
              Entrez vos identifiants pour accéder au tableau de bord.
            </p>

            {error && (
              <div className="flex items-start gap-2.5 bg-red-50 border border-red-200 text-red-700 rounded-xl px-4 py-3 mb-5 text-sm">
                <AlertCircle size={16} className="shrink-0 mt-0.5" />
                <span>{error}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} noValidate className="space-y-5">
              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  Adresse e-mail
                </label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  autoComplete="username"
                  placeholder="admin@skillup.ci"
                  disabled={loading}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-xl text-sm
                    focus:outline-none focus:ring-2 focus:ring-brand-green focus:border-transparent
                    disabled:bg-gray-50 disabled:text-gray-400 transition"
                />
              </div>

              {/* Password */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  Mot de passe
                </label>
                <div className="relative">
                  <input
                    type={showPwd ? 'text' : 'password'}
                    name="password"
                    value={form.password}
                    onChange={handleChange}
                    autoComplete="current-password"
                    placeholder="••••••••"
                    disabled={loading}
                    className="w-full px-4 py-2.5 pr-11 border border-gray-300 rounded-xl text-sm
                      focus:outline-none focus:ring-2 focus:ring-brand-green focus:border-transparent
                      disabled:bg-gray-50 disabled:text-gray-400 transition"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPwd(v => !v)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    tabIndex={-1}
                  >
                    {showPwd ? <EyeOff size={17} /> : <Eye size={17} />}
                  </button>
                </div>
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={loading}
                className="w-full flex items-center justify-center gap-2 py-3 bg-brand-green
                  text-white font-semibold rounded-xl hover:bg-brand-green-dark transition-colors
                  disabled:opacity-60 disabled:cursor-not-allowed mt-2"
              >
                {loading ? (
                  <svg className="animate-spin h-4 w-4" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                  </svg>
                ) : (
                  <LogIn size={16} />
                )}
                {loading ? 'Connexion…' : 'Se connecter'}
              </button>
            </form>
          </div>
        </div>

        <p className="text-center text-white/60 text-xs mt-6">
          © {new Date().getFullYear()} SkillUp Consulting CI — Accès réservé
        </p>
      </div>
    </div>
  )
}
