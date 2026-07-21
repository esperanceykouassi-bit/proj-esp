import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const CATEGORIES_VALIDES = ['SAARI', 'BUREAUTIQUE', 'LEADERSHIP', 'COMPTABLE', 'PROJET']

export async function getAllFormations(req, res) {
  try {
    const { categorie, statut = 'ACTIF' } = req.query

    if (categorie && !CATEGORIES_VALIDES.includes(categorie)) {
      return res.status(400).json({
        error: `Catégorie invalide. Valeurs acceptées : ${CATEGORIES_VALIDES.join(', ')}`,
      })
    }

    const formations = await prisma.formation.findMany({
      where: {
        statut,
        ...(categorie && { categorie }),
      },
      orderBy: { createdAt: 'asc' },
      select: {
        id: true,
        titre: true,
        categorie: true,
        description: true,
        statut: true,
        createdAt: true,
        _count: { select: { inscriptions: true } },
      },
    })

    res.json(formations)
  } catch (err) {
    console.error('[formation] getAllFormations :', err)
    res.status(500).json({ error: 'Impossible de charger les formations.' })
  }
}

export async function getFormationById(req, res) {
  try {
    const id = parseInt(req.params.id, 10)
    if (isNaN(id)) return res.status(400).json({ error: 'ID invalide.' })

    const formation = await prisma.formation.findUnique({
      where: { id },
      include: {
        inscriptions: {
          select: { id: true, statut: true, createdAt: true },
          orderBy: { createdAt: 'desc' },
        },
      },
    })

    if (!formation) return res.status(404).json({ error: 'Formation introuvable.' })
    res.json(formation)
  } catch (err) {
    console.error('[formation] getFormationById :', err)
    res.status(500).json({ error: 'Impossible de charger cette formation.' })
  }
}