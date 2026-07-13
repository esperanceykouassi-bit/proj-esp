import { createContext, useContext, useState, useCallback } from 'react'

const TOKEN_KEY = 'scci_admin_token'

const AuthContext = createContext(null)

export function AuthProvider({ children }) {
  const [token, setToken] = useState(() => localStorage.getItem(TOKEN_KEY))

  const login = useCallback((newToken) => {
    localStorage.setItem(TOKEN_KEY, newToken)
    setToken(newToken)
  }, [])

  const logout = useCallback(() => {
    localStorage.removeItem(TOKEN_KEY)
    setToken(null)
  }, [])

  /** Fetch pré-configuré avec Authorization header */
  const authFetch = useCallback((url, options = {}) => {
    return fetch(url, {
      ...options,
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
        Authorization: `Bearer ${localStorage.getItem(TOKEN_KEY)}`,
      },
    })
  }, [])

  return (
    <AuthContext.Provider value={{ token, isAuthenticated: !!token, login, logout, authFetch }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error('useAuth doit être utilisé dans <AuthProvider>')
  return ctx
}
