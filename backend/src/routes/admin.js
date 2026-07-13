import { Router } from 'express'
import { rateLimit } from 'express-rate-limit'
import { requireAuth } from '../middleware/auth.js'
import {
  login,
  getStats,
  getInscriptions,
  updateInscriptionStatut,
  getMessages,
  markMessageLu,
} from '../controllers/admin.js'

const router = Router()

// Rate-limit strict sur le login (5 tentatives / 15 min)
const loginLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 5,
  message: { error: 'Trop de tentatives. Réessayez dans 15 minutes.' },
})

// ── Route publique ─────────────────────────────────────────────────────────────
router.post('/login', loginLimiter, login)

// ── Routes protégées (JWT requis) ──────────────────────────────────────────────
router.use(requireAuth)

router.get('/stats', getStats)

router.get('/inscriptions',                        getInscriptions)
router.patch('/inscriptions/:id/statut',           updateInscriptionStatut)

router.get('/messages',                            getMessages)
router.patch('/messages/:id/lu',                   markMessageLu)

export default router
