import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export default function ScrollToTop() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '')
      let attempts = 0

      const scrollToTarget = () => {
        const element = document.getElementById(id)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' })
        } else if (attempts < 15) {
          attempts++
          setTimeout(scrollToTarget, 50)
        }
      }

      // Petit délai pour laisser React Router terminer le chargement de la route
      setTimeout(scrollToTarget, 100)
    } else {
      window.scrollTo(0, 0)
      document.documentElement.scrollTop = 0
      document.body.scrollTop = 0
    }
  }, [pathname, hash])

  return null
}