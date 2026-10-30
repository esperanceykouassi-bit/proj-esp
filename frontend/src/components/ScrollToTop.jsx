import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export default function ScrollToTop() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      // 1. Si une ancre (#id) est présente dans l'URL
      const id = hash.replace('#', '')
      
      // On laisse un léger délai (50ms) pour que React termine le rendu du DOM
      const timer = setTimeout(() => {
        const element = document.getElementById(id)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
      }, 50)

      return () => clearTimeout(timer)
    } else {
      // 2. Si AUCUNE ancre n'est présente, on remonte tout en haut
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
      document.documentElement.scrollTop = 0
      document.body.scrollTop = 0

      const mainElement = document.querySelector('main')
      if (mainElement) {
        mainElement.scrollTop = 0
      }
    }
  }, [pathname, hash]) // Écoute à la fois les changements de page ET d'ancres

  return null
}