import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export default function ScrollToTop() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '')
      let attempts = 0

      // Fonction qui attend que l'élément soit réellement dans le DOM
      const scrollToElement = () => {
        const element = document.getElementById(id)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' })
        } else if (attempts < 10) {
          attempts++
          setTimeout(scrollToElement, 50) // Réessaye toutes les 50ms (max 500ms)
        }
      }

      scrollToElement()
    } else {
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