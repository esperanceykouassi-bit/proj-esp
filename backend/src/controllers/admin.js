import { PrismaClient } from '@prisma/client'
import jwt from 'jsonwebtoken'
import { createHash, timingSafeEqual } from 'crypto'

const prisma = new PrismaClient()

// Comparaison en temps constant pour éviter les timing attacks
function safeEqual(a, b) {
  const hashA = createHash('sha256').update(String(a)).digest()
  const hashB = createHash('sha256').update(String(b)).digest()
  return hashA.length === hashB.length && timingSafeEqual(hashA, hashB)
}

// ─── POST /api/admin/login ────────────────────────────────────────────────────

export async function login(req, res) {
  try {
    const { email, password } = req.body ?? {}
    if (!email || !password) {
      return res.status(400).json({ error: 'Email et mot de passe requis.' })
    }

    const adminEmail    = process.env.ADMIN_EMAIL    || 'admin@skillup.ci'
    const adminPassword = process.env.ADMIN_PASSWORD || 'skillup2025'

    const emailOk    = safeEqual(email, adminEmail)
    const passwordOk = safeEqual(password, adminPassword)

    if (!emailOk || !passwordOk) {
      // Même message pour email et mot de passe (pas d'énumération)
      return res.status(401).json({ error: 'Identifiants incorrects.' })
    }

    const token = jwt.sign(
      { sub: 'admin', email: adminEmail, role: 'admin' },
      process.env.JWT_SECRET || 'dev-secret-change-me',
      { expiresIn: process.env.JWT_EXPIRES_IN || '24h' },
    )

    res.json({ token, expiresIn: process.env.JWT_EXPIRES_IN || '24h' })
  } catch (err) {
    console.error('[admin] login :', err)
    res.status(500).json({ error: 'Erreur serveur.' })
  }
}

// ─── GET /api/admin/stats ─────────────────────────────────────────────────────

export async function getStats(req, res) {
  try {
    const sevenDaysAgo = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000)

    const [
      totalInscriptions,
      nouvellesInscriptions,
      formationsActives,
      messagesNonLus,
    ] = await Promise.all([
      prisma.inscription.count(),
      prisma.inscription.count({ where: { createdAt: { gte: sevenDaysAgo } } }),
      prisma.formation.count({ where: { statut: 'ACTIF' } }),
      prisma.contactMessage.count({ where: { lu: false } }),
    ])

    res.json({ totalInscriptions, nouvellesInscriptions, formationsActives, messagesNonLus })
  } catch (err) {
    console.error('[admin] getStats :', err)
    res.status(500).json({ error: 'Impossible de charger les statistiques.' })
  }
}

// ─── GET /api/admin/inscriptions ──────────────────────────────────────────────

export async function getInscriptions(req, res) {
  try {
    const { statut, limit = '50' } = req.query
    const inscriptions = await prisma.inscription.findMany({
      where: statut ? { statut } : undefined,
      orderBy: { createdAt: 'desc' },
      take: Math.min(Number(limit), 200),
      include: {
        formation: { select: { id: true, titre: true, categorie: true } },
      },
    })
    res.json(inscriptions)
  } catch (err) {
    console.error('[admin] getInscriptions :', err)
    res.status(500).json({ error: 'Impossible de charger les inscriptions.' })
  }
}

// ─── PATCH /api/admin/inscriptions/:id/statut ─────────────────────────────────

export async function updateInscriptionStatut(req, res) {
  try {
    const id = parseInt(req.params.id, 10)
    const { statut } = req.body
    const statutsValides = ['EN_ATTENTE', 'CONFIRMEE', 'ANNULEE']

    if (isNaN(id)) return res.status(400).json({ error: 'ID invalide.' })
    if (!statutsValides.includes(statut)) {
      return res.status(400).json({
        error: `Statut invalide. Valeurs : ${statutsValides.join(', ')}`,
      })
    }

    const inscription = await prisma.inscription.update({
      where: { id },
      data:  { statut },
      include: { formation: { select: { titre: true } } },
    })
    res.json(inscription)
  } catch (err) {
    console.error('[admin] updateInscriptionStatut :', err)
    res.status(500).json({ error: 'Impossible de modifier le statut.' })
  }
}

// ─── GET /api/admin/messages ──────────────────────────────────────────────────

export async function getMessages(req, res) {
  try {
    const { lu, limit = '50' } = req.query
    const messages = await prisma.contactMessage.findMany({
      where: lu !== undefined ? { lu: lu === 'true' } : undefined,
      orderBy: { createdAt: 'desc' },
      take: Math.min(Number(limit), 200),
    })
    res.json(messages)
  } catch (err) {
    console.error('[admin] getMessages :', err)
    res.status(500).json({ error: 'Impossible de charger les messages.' })
  }
}

// ─── PATCH /api/admin/messages/:id/lu ────────────────────────────────────────

export async function markMessageLu(req, res) {
  try {
    const id = parseInt(req.params.id, 10)
    if (isNaN(id)) return res.status(400).json({ error: 'ID invalide.' })

    const message = await prisma.contactMessage.update({
      where: { id },
      data:  { lu: true },
    })
    res.json(message)
  } catch (err) {
    console.error('[admin] markMessageLu :', err)
    res.status(500).json({ error: 'Impossible de mettre à jour ce message.' })
  }
}
