import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Phone, MessageCircle } from 'lucide-react'

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

  const whatsappNumber = '2250102211421'
  const whatsappMessage = encodeURIComponent("Bonjour, je souhaite obtenir des informations sur vos services et vos formations.")
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`
  const phoneUrl = 'tel:+2250102211421'

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
          <Link to="/" className="flex items-center shrink-0 py-2">
            <div className="w-52 sm:w-60 h-14 overflow-hidden flex items-center justify-start">
              <img
                src="/images/logo-full.jpeg"
                alt="SkillUp Consulting CI"
                className="w-[205px] sm:w-[230px] max-w-none h-auto object-cover object-left"
              />
            </div>
          </Link>

          {/* Navigation Desktop */}
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

            {/* Icone WhatsApp Desktop */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="p-2 rounded-full text-emerald-600 bg-emerald-50 hover:bg-emerald-100 transition-colors"
            >
              <MessageCircle size={20} />
            </a>

            {/* Bouton Nous contacter */}
            <Link
              to="/contact"
              className="btn-primary text-sm py-2 px-5 whitespace-nowrap"
            >
              Nous contacter
            </Link>
          </div>

          {/* Actions Rapides Mobile (WhatsApp + Appeler + Burger) */}
          <div className="flex items-center gap-2 md:hidden">
            {/* WhatsApp Mobile */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Contact WhatsApp"
              className="p-2 rounded-lg text-white bg-emerald-600 hover:bg-emerald-700 transition-colors shadow-sm"
            >
              <MessageCircle size={20} />
            </a>

            {/* Appeler Mobile */}
            <a
              href={phoneUrl}
              aria-label="Appeler"
              className="p-2 rounded-lg text-white bg-brand-green hover:bg-emerald-800 transition-colors shadow-sm"
            >
              <Phone size={20} />
            </a>

            {/* Bouton Burger */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Menu"
              className="p-2 rounded-lg text-gray-600 hover:text-brand-green hover:bg-gray-50 transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

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