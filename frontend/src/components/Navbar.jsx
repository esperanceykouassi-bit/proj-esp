import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'Accueil',    path: '/' },
  { label: 'À propos',   path: '/about' },
  { label: 'Formations', path: '/formations' },
  { label: 'Services',   path: '/services' },
  { label: 'Contact',    path: '/contact' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const isActive = (path) => {
    if (path === '/') return location.pathname === '/'
    return location.pathname.startsWith(path.split('#')[0]) && path !== '/'
  }

  const handleNavClick = (path) => {
    setIsOpen(false)
    if (path.includes('#')) {
      const id = path.split('#')[1]
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
      }, 80)
    }
  }

  return (
    <header
      className={`sticky top-0 z-50 bg-white border-b border-gray-100 transition-shadow duration-300 ${
        scrolled ? 'shadow-md' : 'shadow-sm'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <Link to="/" className="flex items-center shrink-0">
            <img
              src="/images/logo-full.jpeg"
              alt="SkillUp Consulting CI"
              className="h-14 md:h-16 w-auto object-contain"
            />
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.path.split('#')[0] || '/'}
                onClick={() => handleNavClick(link.path)}
                className={`text-sm font-medium transition-colors duration-200 whitespace-nowrap ${
                  isActive(link.path)
                    ? 'text-brand-green border-b-2 border-brand-green pb-0.5'
                    : 'text-gray-600 hover:text-brand-green'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/contact"
              className="ml-2 btn-primary text-sm py-2 px-5 whitespace-nowrap"
            >
              Nous contacter
            </Link>
          </div>

          {/* Burger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Menu"
            className="md:hidden p-2 rounded-lg text-gray-600 hover:text-brand-green hover:bg-gray-50 transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden py-3 border-t border-gray-100 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.path.split('#')[0] || '/'}
                onClick={() => handleNavClick(link.path)}
                className={`block px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                  isActive(link.path)
                    ? 'bg-brand-green/10 text-brand-green'
                    : 'text-gray-600 hover:bg-gray-50 hover:text-brand-green'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="px-4 pt-2 pb-1">
              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="btn-primary w-full justify-center text-sm py-2.5"
              >
                Nous contacter
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
