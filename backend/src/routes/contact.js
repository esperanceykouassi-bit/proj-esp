import { Router } from 'express'
import { rateLimit } from 'express-rate-limit'
import { createContactMessage, getAllMessages, markAsRead } from '../controllers/contact.js'

const router = Router()

const contactLimiter = rateLimit({
  windowMs: 60 * 60 * 1000,
  max: 5,
  message: { error: 'Trop de messages envoyés. Réessayez dans 1 heure.' },
})

router.post('/', contactLimiter, createContactMessage)
router.get('/', getAllMessages)
router.patch('/:id/lu', markAsRead)

export default router
