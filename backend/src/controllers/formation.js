import { prisma } from '../services/prisma.js'

const CATEGORIES_VALIDES = ['SAARI', 'BUREAUTIQUE', 'LEADERSHIP', 'COMPTABLE', 'PROJET']
export async function getAllFormations(req, res) {
  try {
    const { categorie, statut } = req.query

    if (categorie && !CATEGORIES_VALIDES.includes(categorie)) {
      return res.status(400).json({
        error: `Catégorie invalide. Valeurs acceptées : ${CATEGORIES_VALIDES.join(', ')}`,
      })
    }

    // On ne filtre sur le statut que si un statut est explicitement transmis dans l'URL
    const whereCondition = {}
    if (statut) {
      whereCondition.statut = statut
    }
    if (categorie) {
      whereCondition.categorie = categorie
    }

    const formations = await prisma.formation.findMany({
      where: whereCondition,
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
    res.status(500).json({ 
      error: 'Impossible de charger les formations.',
      details: err.message 
    })
  }
}