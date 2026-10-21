import { motion } from 'framer-motion'
import { useState } from 'react'
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  MessageSquare, 
  CheckCircle2, 
  Building2, 
  Calendar 
} from 'lucide-react'

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    nom: '',
    structure: '',
    telephone: '',
    email: '',
    besoin: 'Assistance comptable, financière & fiscale',
    message: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    // Simulation d'envoi du formulaire
    setSubmitted(true)
  }

  return (
    <div className="space-y-20 pb-16">

      {/* 1. HÉROS DE LA PAGE */}
      <section className="bg-gradient-to-br from-[#1A237E] to-[#0D1250] text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider text-[#8FD9AE] mb-4 border border-white/20"
          >
            CONTACTEZ-NOUS
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold font-heading mb-6"
          >
            Échangeons sur votre projet
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-lg text-white/90 max-w-3xl mx-auto leading-relaxed"
          >
            Comptabilité à jour, déclarations fiscales, organisation de votre structure, projet à financer ou formation de vos équipes : dites-nous où vous en êtes. Un conseiller vous répond et vous propose un premier rendez-vous.
          </motion.p>
        </div>
      </section>


      {/* 2. BLOC D'ACTION RAPIDE (WhatsApp, Appel, E-mail) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#EEF0F8] rounded-3xl p-8 border border-gray-200">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-[#1A237E]">Contact direct & Prise de rendez-vous</h2>
            <p className="text-xs sm:text-sm text-gray-600 mt-1">Choisissez le canal qui vous convient le mieux pour échanger avec notre équipe.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            {/* Canal WhatsApp */}
            <a
              href="https://wa.me/2250102211421?text=Bonjour%20SkillUp,%20je%20souhaite%20un%20rendez-vous."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] hover:bg-[#20bd5a] text-white p-6 rounded-2xl flex flex-col items-center text-center transition-transform hover:scale-105 shadow-md"
            >
              <MessageSquare size={32} className="mb-3" />
              <div className="font-bold text-lg mb-1">WhatsApp</div>
              <p className="text-xs text-white/90 mb-3">Message direct pour une réponse rapide</p>
              <span className="text-xs bg-white/20 font-semibold px-3 py-1 rounded-full">+225 01 02 21 14 21</span>
            </a>

            {/* Canal Appel */}
            <a
              href="tel:+2250102211421"
              className="bg-white hover:bg-gray-50 text-[#1B7A4B] border-2 border-[#1B7A4B] p-6 rounded-2xl flex flex-col items-center text-center transition-transform hover:scale-105 shadow-sm"
            >
              <Phone size={32} className="mb-3" />
              <div className="font-bold text-lg mb-1">Nous appeler</div>
              <p className="text-xs text-gray-600 mb-3">Bureau & Secrétariat exécutif</p>
              <span className="text-xs bg-[#1B7A4B]/10 font-bold px-3 py-1 rounded-full text-[#1B7A4B]">
                01 02 21 14 21 / 27 24 42 71 86
              </span>
            </a>

            {/* Canal E-mail */}
            <a
              href="mailto:infos@skillupcci.net?subject=Demande%20de%20rendez-vous"
              className="bg-[#1A237E] hover:bg-[#0D1250] text-white p-6 rounded-2xl flex flex-col items-center text-center transition-transform hover:scale-105 shadow-md"
            >
              <Mail size={32} className="mb-3 text-[#8FD9AE]" />
              <div className="font-bold text-lg mb-1">Envoyer un e-mail</div>
              <p className="text-xs text-white/80 mb-3">Demandes officielles & Devis sur mesure</p>
              <span className="text-xs bg-white/10 font-semibold px-3 py-1 rounded-full text-[#8FD9AE]">infos@skillupcci.net</span>
            </a>

          </div>
        </div>
      </section>


      {/* 3. FORMULAIRE DE CONTACT & COORDONNÉES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

          {/* Formulaire de demande (7 cols) */}
          <div className="lg:col-span-7 bg-white p-8 rounded-3xl border border-gray-200 shadow-sm">
            <h3 className="text-2xl font-bold text-[#1A237E] mb-2">Envoyez-nous un message</h3>
            <p className="text-xs text-gray-600 mb-6">Remplissez ce formulaire et nous vous recontacterons sous 24 heures ouvrées.</p>

            {submitted ? (
              <div className="bg-[#E8F3ED] border border-[#1B7A4B]/30 rounded-2xl p-8 text-center text-[#1B7A4B]">
                <CheckCircle2 size={48} className="mx-auto mb-3" />
                <h4 className="font-bold text-lg mb-2">Message bien reçu !</h4>
                <p className="text-xs leading-relaxed">
                  Merci de nous avoir contactés. Un conseiller de SkillUp Consulting CI examinera votre demande et vous répondra sous 24h ouvrées.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">Nom & Prénoms *</label>
                    <input
                      type="text"
                      required
                      value={formData.nom}
                      onChange={(e) => setFormData({...formData, nom: e.target.value})}
                      placeholder="Ex: Kouassi Jean"
                      className="w-full text-xs p-3 rounded-xl border border-gray-300 focus:outline-none focus:border-[#1A237E]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">Entreprise / Structure</label>
                    <input
                      type="text"
                      value={formData.structure}
                      onChange={(e) => setFormData({...formData, structure: e.target.value})}
                      placeholder="Ex: PME Sarl ou Indépendant"
                      className="w-full text-xs p-3 rounded-xl border border-gray-300 focus:outline-none focus:border-[#1A237E]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">Téléphone *</label>
                    <input
                      type="tel"
                      required
                      value={formData.telephone}
                      onChange={(e) => setFormData({...formData, telephone: e.target.value})}
                      placeholder="Ex: +225 07 00 00 00 00"
                      className="w-full text-xs p-3 rounded-xl border border-gray-300 focus:outline-none focus:border-[#1A237E]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">Adresse e-mail *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      placeholder="Ex: contact@votre-entreprise.ci"
                      className="w-full text-xs p-3 rounded-xl border border-gray-300 focus:outline-none focus:border-[#1A237E]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">Votre besoin principal *</label>
                  <select
                    value={formData.besoin}
                    onChange={(e) => setFormData({...formData, besoin: e.target.value})}
                    className="w-full text-xs p-3 rounded-xl border border-gray-300 focus:outline-none focus:border-[#1A237E] bg-white"
                  >
                    <option value="Assistance comptable, financière & fiscale">Assistance comptable, financière & fiscale</option>
                    <option value="Conseil en management & organisation">Conseil en management & organisation</option>
                    <option value="Étude, montage & gestion de projets">Étude, montage & gestion de projets</option>
                    <option value="Formation professionnelle pratique">Formation professionnelle pratique</option>
                    <option value="Autre demande / Diagnostic">Autre demande / Demande de diagnostic</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">Message / Précisions *</label>
                  <textarea
                    required
                    rows="4"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    placeholder="Décrivez brièvement votre situation ou la formation souhaitée..."
                    className="w-full text-xs p-3 rounded-xl border border-gray-300 focus:outline-none focus:border-[#1A237E]"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#1B7A4B] hover:bg-[#155e39] text-white font-bold py-3.5 rounded-xl transition-colors inline-flex items-center justify-center gap-2 text-sm"
                >
                  <Send size={18} />
                  Envoyer ma demande
                </button>
              </form>
            )}
          </div>

          {/* Coordonnées & Horaires (5 cols) */}
          <div className="lg:col-span-5 space-y-6">

            {/* Carte Adresse */}
            <div className="bg-[#EEF0F8] p-6 rounded-3xl border border-gray-200">
              <h4 className="font-bold text-[#1A237E] text-lg mb-4 flex items-center gap-2">
                <MapPin className="text-[#1B7A4B]" size={22} />
                Siège Social
              </h4>
              <p className="text-xs text-gray-700 leading-relaxed mb-4">
                <strong>SkillUp Consulting CI</strong><br />
                Angré 7ème Tranche, non loin du carrefour Bluetooth<br />
                Immeuble Tchêpê, porte B2, Abidjan<br />
                Côte d'Ivoire
              </p>
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#1A237E] hover:underline"
              >
                Voir la localisation sur Google Maps →
              </a>
            </div>

            {/* Carte Horaires d'ouverture */}
            <div className="bg-[#E8F3ED] p-6 rounded-3xl border border-gray-200">
              <h4 className="font-bold text-[#1A237E] text-lg mb-4 flex items-center gap-2">
                <Clock className="text-[#1B7A4B]" size={22} />
                Horaires d'ouverture
              </h4>
              <div className="space-y-2 text-xs text-gray-700">
                <div className="flex justify-between pb-1 border-b border-gray-200">
                  <span className="font-medium">Bureau (Lundi — Vendredi) :</span>
                  <span className="font-bold">08h00 — 18h00</span>
                </div>
                <div className="flex justify-between pb-1 border-b border-gray-200">
                  <span className="font-medium">Formations (Soir & Samedi) :</span>
                  <span className="font-bold">Selon planning</span>
                </div>
                <div className="flex justify-between text-gray-500">
                  <span>Dimanche & Jours fériés :</span>
                  <span>Fermé</span>
                </div>
              </div>
              <p className="text-[11px] text-[#1B7A4B] font-semibold mt-4">
                * Réponse garantie sous 24 heures ouvrées.
              </p>
            </div>

            {/* Carte Mentions légales */}
            <div className="bg-white p-6 rounded-3xl border border-gray-200 text-xs text-gray-600">
              <h4 className="font-bold text-[#1A237E] text-sm mb-2 flex items-center gap-2">
                <Building2 size={18} className="text-[#1B7A4B]" />
                Identité légale
              </h4>
              <p className="leading-relaxed">
                SkillUp Consulting CI · SARLU<br />
                N° CC (NCC) : 2603534P<br />
                IDU : CI-2026-0063319T
              </p>
            </div>

          </div>

        </div>
      </section>


      {/* 4. CARTE GOOGLE MAPS D'ACCÈS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gray-100 rounded-3xl overflow-hidden border border-gray-200 h-80 shadow-inner relative">
          <iframe
            title="Localisation SkillUp Consulting CI"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15888.636652425515!2d-3.985!3d5.385!2m3!1f0!2f0!3f0!2m3!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNcKwMjMnMDYuMCJOIDPCsDU5JzA2LjAiVw!5e0!3m2!1sfr!2sci!4v1620000000000!5m2!1sfr!2sci"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </section>

    </div>
  )
}