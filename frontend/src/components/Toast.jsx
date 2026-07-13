import { useEffect, useState } from 'react'
import { CheckCircle, XCircle, X } from 'lucide-react'

/**
 * Toast de notification auto-disparaissant.
 * Props :
 *   message  – texte affiché
 *   type     – 'success' | 'error'
 *   onClose  – callback appelé à la fermeture
 *   duration – millisecondes avant fermeture auto (défaut 5000)
 */
export default function Toast({ message, type = 'success', onClose, duration = 5000 }) {
  const [visible, setVisible] = useState(false)

  // Entrée animée
  useEffect(() => {
    requestAnimationFrame(() => setVisible(true))
    const timer = setTimeout(() => {
      setVisible(false)
      setTimeout(onClose, 300) // attend la sortie CSS
    }, duration)
    return () => clearTimeout(timer)
  }, [duration, onClose])

  const isSuccess = type === 'success'
  const Icon = isSuccess ? CheckCircle : XCircle

  return (
    <div
      role="alert"
      aria-live="polite"
      className={`fixed bottom-6 right-6 z-[9999] flex items-start gap-3 max-w-sm w-full
        px-5 py-4 rounded-2xl shadow-2xl border
        transition-all duration-300
        ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
        ${isSuccess
          ? 'bg-white border-brand-green/30 text-gray-800'
          : 'bg-white border-red-300 text-gray-800'
        }`}
    >
      <Icon
        size={22}
        className={`shrink-0 mt-0.5 ${isSuccess ? 'text-brand-green' : 'text-red-500'}`}
        strokeWidth={2}
      />
      <p className="text-sm leading-relaxed flex-1">{message}</p>
      <button
        onClick={() => { setVisible(false); setTimeout(onClose, 300) }}
        aria-label="Fermer"
        className="text-gray-400 hover:text-gray-600 transition-colors shrink-0"
      >
        <X size={16} />
      </button>
    </div>
  )
}
