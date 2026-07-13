import { PrismaClient } from '@prisma/client'
import { z } from 'zod'

const prisma = new PrismaClient()

const inscriptionSchema = z.object({
  nom: z.string().min(2, 'Nom trop court (min 2 caractères)').max(100),
  prenom: z.string().min(2, 'Prénom trop court (min 2 caractères)').max(100),
  email: z.string().email('Adresse email invalide'),
  telephone: z.string().min(8, 'Numéro trop court').max(30),
  formationId: z.number().int().positive('Formation requise'),
  message: z.string().max(2000).optional(),
})

export async function createInscription(req, res) {
  try {
    const parsed = inscriptionSchema.safeParse({
      ...req.body,
      formationId: Number(req.body.formationId),
    })

    if (!parsed.success) {
      return res.status(400).json({
        error: 'Données invalides.',
        details: parsed.error.flatten().fieldErrors,
      })
    }

    const formation = await prisma.formation.findUnique({
      where: { id: parsed.data.formationId },
      select: { id: true, titre: true, statut: true },
    })

    if (!formation) {
      return res.status(404).json({ error: 'Formation introuvable.' })
    }
    if (formation.statut === 'INACTIF') {
      return res.status(409).json({ error: 'Cette formation n\'est plus disponible.' })
    }

    const inscription = await prisma.inscription.create({ data: parsed.data })

    res.status(201).json({
      success: true,
      message: `Votre inscription à "${formation.titre}" a bien été enregistrée. Nous vous contacterons sous 24h.`,
      id: inscription.id,
    })
  } catch (err) {
    console.error('[inscription] createInscription :', err)
    res.status(500).json({ error: 'Une erreur est survenue. Veuillez réessayer.' })
  }
}

export async function getAllInscriptions(req, res) {
  try {
    const inscriptions = await prisma.inscription.findMany({
      orderBy: { createdAt: 'desc' },
      include: { formation: { select: { titre: true, categorie: true } } },
    })
    res.json(inscriptions)
  } catch (err) {
    console.error('[inscription] getAllInscriptions :', err)
    res.status(500).json({ error: 'Impossible de charger les inscriptions.' })
  }
}

export async function updateStatutInscription(req, res) {
  try {
    const id = parseInt(req.params.id, 10)
    const { statut } = req.body
    const statutsValides = ['EN_ATTENTE', 'CONFIRMEE', 'ANNULEE']

    if (isNaN(id)) return res.status(400).json({ error: 'ID invalide.' })
    if (!statutsValides.includes(statut)) {
      return res.status(400).json({
        error: `Statut invalide. Valeurs acceptées : ${statutsValides.join(', ')}`,
      })
    }

    const inscription = await prisma.inscription.update({
      where: { id },
      data: { statut },
      include: { formation: { select: { titre: true } } },
    })
    res.json(inscription)
  } catch (err) {
    console.error('[inscription] updateStatutInscription :', err)
    res.status(500).json({ error: 'Impossible de mettre à jour cette inscription.' })
  }
}
