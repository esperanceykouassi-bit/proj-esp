import { Link } from 'react-router-dom'
import { MapPin, Phone, Mail, Globe, Facebook, Linkedin, Instagram, MessageSquare } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-[#0D1250] text-white font-sans pt-16 pb-8 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* COLONNE 1 : LOGO, SOUS-TITRE & MENTIONS (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <Link to="/" className="inline-block">
              {/* Chemin vers l'image du logo corrigé : /images/logo-full.jpeg */}
              <img 
                src="/images/logo-full.jpeg" 
                alt="SkillUp Consulting CI" 
                className="h-12 w-auto object-contain bg-white/95 p-1.5 rounded-lg"
              />
            </Link>
            
            <div className="text-xs font-bold uppercase tracking-wider text-[#8FD9AE]">
              CONSEIL · COMPTABILITÉ · FORMATION
            </div>

            <p className="text-xs sm:text-sm text-white/80 leading-relaxed max-w-md">
              Cabinet spécialisé en assistance comptable et fiscale, conseil en management, gestion de projets et formation professionnelle pratique, à Abidjan.
            </p>

            <p className="text-xs font-semibold italic text-[#8FD9AE]">
              « Votre partenaire de confiance. »
            </p>

            {/* Mentions légales et fiscales */}
            <div className="pt-2 text-[11px] text-white/60 leading-relaxed border-t border-white/10 max-w-md">
              SkillUp Consulting CI · SARLU · NCC 2603534P · IDU CI-2026-0063319T
            </div>
          </div>

          {/* COLONNE 2 : LIENS RAPIDES (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-[#8FD9AE] mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs font-medium text-white/80">
              <li>
                <Link to="/" className="hover:text-[#8FD9AE] transition-colors">Accueil</Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-[#8FD9AE] transition-colors">Nos services</Link>
              </li>
              <li>
                <Link to="/formations" className="hover:text-[#8FD9AE] transition-colors">Formations</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-[#8FD9AE] transition-colors">À propos</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-[#8FD9AE] transition-colors">Contact</Link>
              </li>
            </ul>
          </div>

          {/* COLONNE 3 : COORDONNÉES EXACTES DU SIÈGE (4 cols) */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-[#8FD9AE] mb-4">
              Contact & Siège
            </h4>
            
            <ul className="space-y-3 text-xs text-white/80">
              <li className="flex items-start gap-2.5">
                <MapPin size={16} className="text-[#8FD9AE] shrink-0 mt-0.5" />
                <span>
                  <strong>Angré 7ème Tranche</strong>, non loin du carrefour Bluetooth, Immeuble Tchêpê, porte B2, Abidjan<br />
                  <a 
                    href="https://maps.google.com" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-[#8FD9AE] hover:underline font-medium inline-block mt-0.5"
                  >
                    Voir la localisation sur Google Maps →
                  </a>
                </span>
              </li>

              <li className="flex items-center gap-2.5">
                <Phone size={16} className="text-[#8FD9AE] shrink-0" />
                <span>
                  Bureau : <a href="tel:+2250102211421" className="hover:text-[#8FD9AE] font-semibold">+225 01 02 21 14 21</a> · Fixe : <a href="tel:+2252724427186" className="hover:text-[#8FD9AE]">+225 27 24 42 71 86</a>
                </span>
              </li>

              <li className="flex items-center gap-2.5">
                <Mail size={16} className="text-[#8FD9AE] shrink-0" />
                <a href="mailto:infos@skillupcci.net" className="hover:text-[#8FD9AE] font-semibold">
                  infos@skillupcci.net
                </a>
              </li>

              <li className="flex items-center gap-2.5">
                <Globe size={16} className="text-[#8FD9AE] shrink-0" />
                <a href="https://www.skillupcci.net" target="_blank" rel="noopener noreferrer" className="hover:text-[#8FD9AE]">
                  www.skillupcci.net
                </a>
              </li>
            </ul>

            {/* Réseaux sociaux */}
            <div className="pt-2 flex items-center gap-3">
              <a 
                href="https://wa.me/2250102211421" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="WhatsApp"
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#1B7A4B] flex items-center justify-center transition-colors text-white"
              >
                <MessageSquare size={16} />
              </a>
              <a 
                href="#" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="Facebook"
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#1B7A4B] flex items-center justify-center transition-colors text-white"
              >
                <Facebook size={16} />
              </a>
              <a 
                href="#" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="LinkedIn"
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#1B7A4B] flex items-center justify-center transition-colors text-white"
              >
                <Linkedin size={16} />
              </a>
              <a 
                href="#" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="Instagram"
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#1B7A4B] flex items-center justify-center transition-colors text-white"
              >
                <Instagram size={16} />
              </a>
            </div>
          </div>

        </div>

        {/* BAS DE FOOTER : COPYRIGHT */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-white/60">
          <p>© {new Date().getFullYear()} SkillUp Consulting CI. Tous droits réservés.</p>
          <p className="text-right">Cabinet de conseil, d'assistance comptable et de formation professionnelle.</p>
        </div>
      </div>
    </footer>
  )
}