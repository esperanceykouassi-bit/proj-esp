import jwt from 'jsonwebtoken'

/**
 * Middleware Express — vérifie le JWT Bearer.
 * Injecte req.admin = { sub, email, role } si valide.
 */
export function requireAuth(req, res, next) {
  const header = req.headers.authorization
  if (!header?.startsWith('Bearer ')) {
    return res.status(401).json({ error: 'Authentification requise.' })
  }

  const token = header.slice(7)
  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET || 'dev-secret-change-me')
    req.admin = payload
    next()
  } catch (err) {
    const message = err.name === 'TokenExpiredError'
      ? 'Session expirée. Veuillez vous reconnecter.'
      : 'Token invalide.'
    res.status(401).json({ error: message })
  }
}
