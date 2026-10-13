import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin, Globe } from 'lucide-react'

const quickLinks = [
  { label: 'Accueil',        path: '/'          },
  { label: 'À propos',       path: '/about'     },
  { label: 'Nos formations', path: '/formations' },
  { label: 'Services',       path: '/services'   },
  { label: 'Contact',        path: '/contact'    },
]

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">

          {/* Branding */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <img
                src="/images/logo-icon.jpeg"
                alt="SkillUp Consulting CI"
                className="h-12 w-12 object-contain rounded-lg"
              />
              <div>
                <p className="text-white font-bold text-base leading-tight">SkillUp Consulting CI</p>
                <p className="text-gray-400 text-xs uppercase tracking-widest">Formation · Conseil</p>
              </div>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed max-w-sm">
              Cabinet spécialisé en formation professionnelle pratique, assistance comptable
              et fiscale, conseil en management et gestion de projets en Côte d'Ivoire.
            </p>
            <p className="mt-4 text-xs text-gray-500 uppercase tracking-wider font-semibold">
              Votre partenaire de confiance pour la montée en compétences
            </p>
          </div>

          {/* Liens rapides */}
          <div>
            <h4 className="text-white font-semibold mb-4">Liens rapides</h4>
            <ul className="space-y-2.5 text-sm">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-brand-green-light transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contactez-nous</h4>
            <ul className="space-y-3.5 text-sm">
              <li className="flex items-start gap-2.5">
                <MapPin size={16} className="text-brand-green shrink-0 mt-0.5" />
                <span className="text-gray-300">
                  Angré 7ème Tranche, Immeuble Tchêpê vers Bluetooth — Abidjan
                </span>
              </li>

              <li className="flex items-start gap-2.5">
                <Phone size={16} className="text-brand-green shrink-0 mt-0.5" />
                <div className="space-y-0.5">
                  <a
                    href="tel:+2250102211421"
                    className="block hover:text-white transition-colors"
                  >
                    +225 01 02 21 14 21
                  </a>
                  <a
                    href="tel:+2252724427186"
                    className="block hover:text-white transition-colors text-xs text-gray-400"
                  >
                    +225 27 24 42 71 86
                  </a>
                </div>
              </li>

              <li className="flex items-start gap-2.5">
                <Mail size={16} className="text-brand-green shrink-0 mt-0.5" />
                <a
                  href="mailto:infos@skillupcci.net"
                  className="block hover:text-white transition-colors"
                >
                  infos@skillupcci.net
                </a>
              </li>

              <li className="flex items-start gap-2.5">
                <Globe size={16} className="text-brand-green shrink-0 mt-0.5" />
                <a
                  href="https://www.skillupcci.net"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block hover:text-white transition-colors"
                >
                  www.skillupcci.net
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-gray-500">
          <p>© {new Date().getFullYear()} SkillUp Consulting CI. Tous droits réservés.</p>
          <p>Formation · Comptabilité · Conseil · Gestion de projets</p>
        </div>
      </div>
    </footer>
  )
}