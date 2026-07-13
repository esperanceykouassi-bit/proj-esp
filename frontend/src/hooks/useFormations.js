import { useState, useEffect } from 'react'

/**
 * Récupère les formations depuis l'API.
 * @param {string} categorie - filtre optionnel (SAARI, BUREAUTIQUE, etc.)
 */
export function useFormations(categorie = '') {
  const [formations, setFormations] = useState([])
  const [loading, setLoading]       = useState(true)
  const [error, setError]           = useState(null)

  useEffect(() => {
    const controller = new AbortController()
    setLoading(true)
    setError(null)

    const url = categorie
      ? `/api/formations?categorie=${encodeURIComponent(categorie)}`
      : '/api/formations'

    fetch(url, { signal: controller.signal })
      .then((res) => {
        if (!res.ok) throw new Error(`Erreur ${res.status} — ${res.statusText}`)
        return res.json()
      })
      .then((data) => {
        setFormations(Array.isArray(data) ? data : [])
        setLoading(false)
      })
      .catch((err) => {
        if (err.name === 'AbortError') return
        setError(err.message || 'Impossible de charger les formations.')
        setLoading(false)
      })

    return () => controller.abort()
  }, [categorie])

  return { formations, loading, error }
}
