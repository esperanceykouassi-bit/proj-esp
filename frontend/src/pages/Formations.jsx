import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { 
  GraduationCap, 
  Clock, 
  CheckCircle2, 
  BookOpen, 
  FileSpreadsheet, 
  Send, 
  UserCheck, 
  Award,
  Sparkles,
  HelpCircle,
  AlertCircle
} from 'lucide-react'

export default function Formations() {
  // Gestion du modal de prétest
  const [activeTestTool, setActiveTestTool] = useState(null) // 'excel', 'word', 'powerpoint', 'outlook'
  const [testStep, setTestStep] = useState(1) // 1: Formulaire d'identification, 2: Questions, 3: Résultat
  const [userInfo, setUserInfo] = useState({ nom: '', telephone: '', email: '' })
  const [answers, setAnswers] = useState({})
  const [score, setScore] = useState(null)
  const [alreadyTested, setAlreadyTested] = useState(false)
  const [errorMsg, setErrorMsg] = useState('')

  // Base de questions par outil pour le prétest
  const testQuestions = {
    excel: [
      { id: 1, question: "Quel signe préède obligatoirement une formule sur Excel ?", options: ["#", "=", "@", "+"], correct: 1 },
      { id: 2, question: "À quoi sert la fonction RECHERCHEV ?", options: ["À trier des lignes par ordre alphabétique", "À rechercher une valeur dans la première colonne d'un tableau", "À additionner des cellules selon un critère", "À supprimer les doublons"], correct: 1 },
      { id: 3, question: "Comment figer une ligne ou une colonne dans une formule ?", options: ["En utilisant des parenthèses ()", "En utilisant des guillemets \"\"", "En utilisant le signe dollar ($)", "En verrouillant la feuille"], correct: 2 }
    ],
    word: [
      { id: 1, question: "Quel raccourci clavier permet de copier une sélection sous Word ?", options: ["Ctrl + V", "Ctrl + C", "Ctrl + X", "Ctrl + P"], correct: 1 },
      { id: 2, question: "À quoi sert l'outil 'Reproduire la mise en forme' ?", options: ["À copier le texte d'un document à un autre", "À appliquer rapidement la même police et style à un autre texte", "À insérer un filigrane", "À corriger les fautes d'orthographe"], correct: 1 },
      { id: 3, question: "Comment insérer un saut de page proprement ?", options: ["Appuyer 20 fois sur Entrée", "Utiliser le menu Insertion > Saut de page (ou Ctrl + Entrée)", "Changer la taille des marges", "Utiliser un tableau"], correct: 1 }
    ],
    powerpoint: [
      { id: 1, question: "Quelle touche permet de lancer le diaporama du début ?", options: ["F1", "F5", "Échap", "Ctrl + F"], correct: 1 },
      { id: 2, question: "Que recommande-t-on pour la lisibilité d'une diapositive ?", options: ["Mettre le maximum de texte pour être complet", "Utiliser des phrases longues en taille 10", "Rester synthétique avec des puces et des visuels forts", "Mettre un fond noir avec du texte bleu foncé"], correct: 2 },
      { id: 3, question: "Comment appliquer une animation fluide entre deux diapositives ?", options: ["Utiliser les Transitions", "Utiliser les Effets de texte", "Imprimer en PDF", "Changer le format d'enregistrement"], correct: 0 }
    ],
    outlook: [
      { id: 1, question: "À quoi sert le champ Cci (Copie cachée invisible) dans un e-mail ?", options: ["À envoyer une copie sans que les autres destinataires ne voient cette adresse", "À bloquer les spams", "À programmer l'envoi de l'e-mail", "À signer automatiquement le message"], correct: 0 },
      { id: 2, question: "Comment planifier une réunion avec des collègues dans Outlook ?", options: ["Créer un événement dans le Calendrier et inviter des participants", "Le faire uniquement par WhatsApp", "Envoyer un e-mail simple sans date", "Imprimer l'agenda"], correct: 0 },
      { id: 3, question: "À quoi sert la fonction 'Règles' dans Outlook ?", options: ["À trier automatiquement les e-mails entrants dans des dossiers", "À modifier la police par défaut", "À traduire les e-mails en anglais", "À compresser les pièces jointes"], correct: 0 }
    ]
  }

  // Vérifier si l'utilisateur a déjà passé un test (via localStorage)
  const checkAlreadyTested = (email, phone) => {
    const history = JSON.parse(localStorage.getItem('skillup_pretests') || '[]')
    return history.some(item => item.email.toLowerCase() === email.toLowerCase() || item.telephone === phone)
  }

  const handleStartTest = (tool) => {
    setActiveTestTool(tool)
    setTestStep(1)
    setUserInfo({ nom: '', telephone: '', email: '' })
    setAnswers({})
    setScore(null)
    setErrorMsg('')
    setAlreadyTested(false)
  }

  const handleUserInfoSubmit = (e) => {
    e.preventDefault()
    if (!userInfo.nom || !userInfo.telephone || !userInfo.email) {
      setErrorMsg("Veuillez remplir tous les champs d'identification.")
      return
    }
    if (checkAlreadyTested(userInfo.email, userInfo.telephone)) {
      setAlreadyTested(true)
      return
    }
    setErrorMsg('')
    setTestStep(2)
  }

  const handleAnswerSelect = (questionId, optionIndex) => {
    setAnswers({ ...answers, [questionId]: optionIndex })
  }

  const handleSubmitTest = () => {
    const questions = testQuestions[activeTestTool]
    let correctCount = 0
    questions.forEach((q) => {
      if (answers[q.id] === q.correct) {
        correctCount++
      }
    })
    const finalScore = Math.round((correctCount / questions.length) * 100)
    setScore(finalScore)
    setTestStep(3)

    // Enregistrement local pour bloquer les doublons
    const history = JSON.parse(localStorage.getItem('skillup_pretests') || '[]')
    history.push({
      tool: activeTestTool,
      ...userInfo,
      score: finalScore,
      date: new Date().toISOString()
    })
    localStorage.setItem('skillup_pretests', JSON.stringify(history))

    // Simulation d'envoi des résultats par email à l'administration
    console.ouveau(`[SIMULATION EMAIL ADMIN] Résultat du prétest ${activeTestTool.toUpperCase()} pour ${userInfo.nom} (${userInfo.email}, Tél: ${userInfo.telephone}) - Score : ${finalScore}%`)
  }

  return (
    <div className="space-y-20 pb-16">

      {/* 1. HÉROS DE LA PAGE FORMATIONS */}
      <section className="bg-gradient-to-br from-[#1A237E] to-[#0D1250] text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider text-[#8FD9AE] mb-4 border border-white/20"
          >
            NOS FORMATIONS PROFESSIONNELLES
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold font-heading mb-6"
          >
            Développez les compétences de vos équipes
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-lg text-white/90 max-w-3xl mx-auto leading-relaxed mb-6"
          >
            Des modules 100 % pratiques, conçus pour répondre aux réalités des entreprises et des organisations en Côte d'Ivoire. Formations courtes de <strong className="text-[#8FD9AE]">3 à 5 jours</strong> en présentiel ou à distance.
          </motion.p>
        </div>
      </section>

      {/* 2. CATALOGUE DES FORMATIONS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-[#1B7A4B] text-sm font-semibold uppercase tracking-wider">Catalogue officiel</span>
          <h2 className="text-3xl font-bold text-[#1A237E] mt-2">Nos programmes de formation</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mt-2 text-sm">
            Chaque module dure entre <span className="font-semibold text-[#1A237E]">3 et 5 jours</span> avec délivrance d'une attestation de fin de formation. Testez votre niveau avant de vous lancer !
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* Module 1 : Bureautique & Outils Professionnels */}
          <div className="bg-[#EEF0F8] p-8 rounded-3xl border border-gray-200 flex flex-col justify-between shadow-sm">
            <div>
              <div className="w-12 h-12 bg-[#1A237E] text-white rounded-2xl flex items-center justify-center mb-4">
                <FileSpreadsheet size={24} />
              </div>
              <span className="text-xs font-bold text-[#1B7A4B] bg-[#1B7A4B]/10 px-3 py-1 rounded-full">Durée : 3 à 5 jours</span>
              <h3 className="text-xl font-bold text-[#1A237E] mt-3 mb-2">Bureautique & Outils Professionnels (Excel, Word, PowerPoint, Outlook)</h3>
              <p className="text-xs text-gray-700 leading-relaxed mb-6">
                Maîtrisez l'ensemble de la suite bureautique pour gagner en productivité : calculs et tableaux croisés dynamiques sur <strong>Excel</strong>, rédaction de documents professionnels sur <strong>Word</strong>, conception de présentations percutantes sur <strong>PowerPoint</strong>, et gestion optimisée de vos e-mails et agendas sur <strong>Outlook</strong>.
              </p>
              
              <div className="space-y-2 mb-6 text-xs text-gray-700">
                <div className="font-semibold text-[#1A237E] mb-1">Testez votre niveau par outil :</div>
                <div className="flex flex-wrap gap-2">
                  <button onClick={() => handleStartTest('excel')} className="bg-white hover:bg-gray-50 text-[#1A237E] border border-gray-300 px-3 py-1.5 rounded-lg font-medium transition-colors inline-flex items-center gap-1">
                    <Sparkles size={14} className="text-[#1B7A4B]" /> Prétest Excel
                  </button>
                  <button onClick={() => handleStartTest('word')} className="bg-white hover:bg-gray-50 text-[#1A237E] border border-gray-300 px-3 py-1.5 rounded-lg font-medium transition-colors inline-flex items-center gap-1">
                    <Sparkles size={14} className="text-[#1B7A4B]" /> Prétest Word
                  </button>
                  <button onClick={() => handleStartTest('powerpoint')} className="bg-white hover:bg-gray-50 text-[#1A237E] border border-gray-300 px-3 py-1.5 rounded-lg font-medium transition-colors inline-flex items-center gap-1">
                    <Sparkles size={14} className="text-[#1B7A4B]" /> Prétest PowerPoint
                  </button>
                  <button onClick={() => handleStartTest('outlook')} className="bg-white hover:bg-gray-50 text-[#1A237E] border border-gray-300 px-3 py-1.5 rounded-lg font-medium transition-colors inline-flex items-center gap-1">
                    <Sparkles size={14} className="text-[#1B7A4B]" /> Prétest Outlook
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Module 2 : Comptabilité & Fiscalité */}
          <div className="bg-[#E8F3ED] p-8 rounded-3xl border border-[#1B7A4B]/30 flex flex-col justify-between shadow-sm">
            <div>
              <div className="w-12 h-12 bg-[#1B7A4B] text-white rounded-2xl flex items-center justify-center mb-4">
                <BookOpen size={24} />
              </div>
              <span className="text-xs font-bold text-[#1B7A4B] bg-white px-3 py-1 rounded-full">Durée : 3 à 5 jours</span>
              <h3 className="text-xl font-bold text-[#1A237E] mt-3 mb-2">Comptabilité & Fiscalité pratique (SYSCOHADA & DGI)</h3>
              <p className="text-xs text-gray-700 leading-relaxed mb-6">
                Maîtrisez les écritures comptables courantes, l'élaboration des déclarations fiscales et sociales en Côte d'Ivoire ainsi que la gestion des états financiers selon les normes SYSCOHADA.
              </p>
            </div>
            <div className="text-xs text-[#1B7A4B] font-semibold flex items-center gap-1">
              <CheckCircle2 size={16} /> Attestation de participation incluse
            </div>
          </div>

          {/* Module 3 : Logiciel Sage 100 */}
          <div className="bg-[#EEF0F8] p-8 rounded-3xl border border-gray-200 flex flex-col justify-between shadow-sm">
            <div>
              <div className="w-12 h-12 bg-[#1A237E] text-white rounded-2xl flex items-center justify-center mb-4">
                <GraduationCap size={24} />
              </div>
              <span className="text-xs font-bold text-[#1B7A4B] bg-[#1B7A4B]/10 px-3 py-1 rounded-full">Durée : 3 à 5 jours</span>
              <h3 className="text-xl font-bold text-[#1A237E] mt-3 mb-2">Maîtrise des logiciels Sage 100</h3>
              <p className="text-xs text-gray-700 leading-relaxed mb-6">
                Paramétrage et utilisation opérationnelle des modules Sage 100 Comptabilité, Gestion Commerciale et Paie pour automatiser la gestion de votre structure.
              </p>
            </div>
            <div className="text-xs text-[#1A237E] font-semibold flex items-center gap-1">
              <CheckCircle2 size={16} /> Cas pratiques sur postes informatiques
            </div>
          </div>

          {/* Module 4 : Management & Gestion de projets */}
          <div className="bg-[#E8F3ED] p-8 rounded-3xl border border-[#1B7A4B]/30 flex flex-col justify-between shadow-sm">
            <div>
              <div className="w-12 h-12 bg-[#1B7A4B] text-white rounded-2xl flex items-center justify-center mb-4">
                <Award size={24} />
              </div>
              <span className="text-xs font-bold text-[#1B7A4B] bg-white px-3 py-1 rounded-full">Durée : 3 à 5 jours</span>
              <h3 className="text-xl font-bold text-[#1A237E] mt-3 mb-2">Management, Leadership & Gestion de projets</h3>
              <p className="text-xs text-gray-700 leading-relaxed mb-6">
                Renforcez la posture managériale de vos encadrants, apprenez à structurer des projets performants et à piloter vos équipes avec efficacité.
              </p>
            </div>
            <div className="text-xs text-[#1B7A4B] font-semibold flex items-center gap-1">
              <CheckCircle2 size={16} /> Outils de pilotage et méthodologie agile
            </div>
          </div>

        </div>
      </section>

      {/* MODAL DU PRÉTEST INTERACTIF */}
      {activeTestTool && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-lg w-full p-8 shadow-2xl relative border border-gray-100">
            <button 
              onClick={() => setActiveTestTool(null)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 text-sm font-bold bg-gray-100 w-8 h-8 rounded-full flex items-center justify-center"
            >
              ✕
            </button>

            <div className="flex items-center gap-2 mb-4">
              <Sparkles className="text-[#1B7A4B]" size={22} />
              <h3 className="text-xl font-bold text-[#1A237E] capitalize">
                Prétest de niveau : {activeTestTool}
              </h3>
            </div>

            {/* ÉTAPE 1 : FORMULAIRE D'IDENTIFICATION */}
            {testStep === 1 && (
              <form onSubmit={handleUserInfoSubmit} className="space-y-4">
                <p className="text-xs text-gray-600">
                  Veuillez renseigner vos coordonnées pour accéder au questionnaire d'évaluation. Vos résultats seront enregistrés et transmis à notre secrétariat.
                </p>

                {alreadyTested && (
                  <div className="bg-red-50 border border-red-200 text-red-700 p-3 rounded-xl text-xs flex items-center gap-2">
                    <AlertCircle size={16} className="shrink-0" />
                    <span>Vous avez déjà passé ce prétest avec cet e-mail ou ce numéro de téléphone. Un seul passage est autorisé par participant.</span>
                  </div>
                )}

                {errorMsg && (
                  <p className="text-xs text-red-600 font-semibold">{errorMsg}</p>
                )}

                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">Nom & Prénoms *</label>
                  <input
                    type="text"
                    required
                    value={userInfo.nom}
                    onChange={(e) => setUserInfo({...userInfo, nom: e.target.value})}
                    placeholder="Ex: Marie Kouassi"
                    className="w-full text-xs p-3 rounded-xl border border-gray-300 focus:outline-none focus:border-[#1A237E]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">Téléphone *</label>
                  <input
                    type="tel"
                    required
                    value={userInfo.telephone}
                    onChange={(e) => setUserInfo({...userInfo, telephone: e.target.value})}
                    placeholder="Ex: +225 0700000000"
                    className="w-full text-xs p-3 rounded-xl border border-gray-300 focus:outline-none focus:border-[#1A237E]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">Adresse e-mail *</label>
                  <input
                    type="email"
                    required
                    value={userInfo.email}
                    onChange={(e) => setUserInfo({...userInfo, email: e.target.value})}
                    placeholder="Ex: m.kouassi@email.com"
                    className="w-full text-xs p-3 rounded-xl border border-gray-300 focus:outline-none focus:border-[#1A237E]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#1B7A4B] hover:bg-[#155e39] text-white font-bold py-3 rounded-xl transition-colors text-xs"
                >
                  Commencer le questionnaire →
                </button>
              </form>
            )}

            {/* ÉTAPE 2 : QUESTIONNAIRE */}
            {testStep === 2 && (
              <div className="space-y-6">
                <p className="text-xs text-gray-600">
                  Répondez aux questions ci-dessous pour évaluer vos connaissances de base en <strong>{activeTestTool}</strong>.
                </p>

                <div className="space-y-4 max-h-64 overflow-y-auto pr-2">
                  {testQuestions[activeTestTool].map((q, index) => (
                    <div key={q.id} className="bg-gray-50 p-4 rounded-xl border border-gray-200">
                      <p className="text-xs font-bold text-[#1A237E] mb-2">
                        {index + 1}. {q.question}
                      </p>
                      <div className="space-y-1.5">
                        {q.options.map((opt, optIdx) => (
                          <label key={optIdx} className="flex items-center gap-2 text-xs text-gray-700 cursor-pointer bg-white p-2 rounded-lg border border-gray-100 hover:border-gray-300">
                            <input
                              type="radio"
                              name={`question-${q.id}`}
                              checked={answers[q.id] === optIdx}
                              onChange={() => handleAnswerSelect(q.id, optIdx)}
                              className="text-[#1B7A4B]"
                            />
                            <span>{opt}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                <button
                  onClick={handleSubmitTest}
                  disabled={Object.keys(answers).length < testQuestions[activeTestTool].length}
                  className={`w-full font-bold py-3 rounded-xl transition-colors text-xs ${
                    Object.keys(answers).length < testQuestions[activeTestTool].length
                      ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                      : 'bg-[#1B7A4B] hover:bg-[#155e39] text-white'
                  }`}
                >
                  Valider mes réponses & voir mon score
                </button>
              </div>
            )}

            {/* ÉTAPE 3 : RÉSULTAT */}
            {testStep === 3 && (
              <div className="text-center space-y-4 py-4">
                <div className="w-16 h-16 bg-[#1B7A4B]/10 text-[#1B7A4B] rounded-full flex items-center justify-center mx-auto">
                  <Award size={32} />
                </div>
                <h4 className="font-bold text-lg text-[#1A237E]">Test terminé avec succès !</h4>
                
                <div className="bg-[#EEF0F8] p-4 rounded-2xl">
                  <p className="text-xs text-gray-600 mb-1">Votre score d'évaluation :</p>
                  <p className="text-3xl font-extrabold text-[#1B7A4B]">{score} / 100</p>
                </div>

                <p className="text-xs text-gray-600 leading-relaxed">
                  Merci <strong>{userInfo.nom}</strong>. Vos coordonnées ({userInfo.email}) et vos résultats ont été transmis à notre équipe pédagogique. Un conseiller vous contactera sous 24h pour vous orienter vers le module de formation adapté.
                </p>

                <button
                  onClick={() => setActiveTestTool(null)}
                  className="w-full bg-[#1A237E] hover:bg-[#0D1250] text-white font-bold py-3 rounded-xl transition-colors text-xs"
                >
                  Fermer la fenêtre
                </button>
              </div>
            )}

          </div>
        </div>
      )}

    </div>
  )
}