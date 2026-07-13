import { PrismaClient } from '@prisma/client'
import { z } from 'zod'
import { sendNotificationEmail, sendConfirmationEmail } from '../services/mailer.js'

const prisma = new PrismaClient()

const SUJETS_VALIDES = ['Formation', 'Assistance comptable', 'Montage de projet', 'Autre']

const contactSchema = z.object({
  nom:       z.string().min(2, 'Nom requis (min 2 caractères)').max(100),
  email:     z.string().email('Adresse email invalide'),
  telephone: z.string().min(8, 'Numéro trop court').max(30),
  sujet:     z.enum(['Formation', 'Assistance comptable', 'Montage de projet', 'Autre'], {
    errorMap: () => ({ message: `Sujet invalide. Valeurs : ${SUJETS_VALIDES.join(', ')}` }),
  }),
  message:   z.string().min(10, 'Message trop court (min 10 caractères)').max(5000),
})

// ─── POST /api/contact ────────────────────────────────────────────────────────

export async function createContactMessage(req, res) {
  try {
    const parsed = contactSchema.safeParse(req.body)
    if (!parsed.success) {
      return res.status(400).json({
        error:   'Données invalides.',
        details: parsed.error.flatten().fieldErrors,
      })
    }

    // 1. Sauvegarde en base (prioritaire — ne pas bloquer sur l'email)
    const contact = await prisma.contactMessage.create({ data: parsed.data })

    // 2. Envoi des emails en parallèle (échec non bloquant)
    Promise.allSettled([
      sendNotificationEmail(parsed.data),
      sendConfirmationEmail(parsed.data),
    ]).then((results) => {
      results.forEach((r, i) => {
        if (r.status === 'rejected') {
          console.error(`[contact] Email ${i === 0 ? 'notification' : 'confirmation'} échoué :`, r.reason?.message)
        }
      })
    })

    res.status(201).json({
      success: true,
      message: 'Votre message a bien été envoyé. Nous vous répondrons sous 24h.',
      id:      contact.id,
    })
  } catch (err) {
    console.error('[contact] createContactMessage :', err)
    res.status(500).json({ error: 'Une erreur est survenue. Veuillez réessayer.' })
  }
}

// ─── GET /api/contact ─────────────────────────────────────────────────────────

export async function getAllMessages(req, res) {
  try {
    const messages = await prisma.contactMessage.findMany({
      orderBy: { createdAt: 'desc' },
      take: 50,
    })
    res.json(messages)
  } catch (err) {
    console.error('[contact] getAllMessages :', err)
    res.status(500).json({ error: 'Impossible de charger les messages.' })
  }
}

// ─── PATCH /api/contact/:id/lu ────────────────────────────────────────────────

export async function markAsRead(req, res) {
  try {
    const id = parseInt(req.params.id, 10)
    if (isNaN(id)) return res.status(400).json({ error: 'ID invalide.' })

    const message = await prisma.contactMessage.update({
      where: { id },
      data:  { lu: true },
    })
    res.json(message)
  } catch (err) {
    console.error('[contact] markAsRead :', err)
    res.status(500).json({ error: 'Impossible de mettre à jour ce message.' })
  }
}
