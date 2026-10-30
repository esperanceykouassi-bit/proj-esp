import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export default function ScrollToTop() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      // S'il y a une ancre dans l'URL (ex: #comptabilite), on cible l'élément
      const id = hash.replace('#', '')
      const timer = setTimeout(() => {
        const element = document.getElementById(id)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
      }, 100)

      return () => clearTimeout(timer)
    } else {
      // Sinon, on remonte tout en haut de la page normalement
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
      document.documentElement.scrollTop = 0
      document.body.scrollTop = 0

      const mainElement = document.querySelector('main')
      if (mainElement) {
        mainElement.scrollTop = 0
      }
    }
  }, [pathname, hash])

  return null
}