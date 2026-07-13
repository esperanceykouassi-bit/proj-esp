import { Router } from 'express'
import { rateLimit } from 'express-rate-limit'
import { createInscription, getAllInscriptions, updateStatutInscription } from '../controllers/inscription.js'

const router = Router()

const inscriptionLimiter = rateLimit({
  windowMs: 60 * 60 * 1000,
  max: 10,
  message: { error: 'Trop de demandes. Réessayez dans 1 heure.' },
})

router.post('/', inscriptionLimiter, createInscription)
router.get('/', getAllInscriptions)
router.patch('/:id/statut', updateStatutInscription)

export default router
