import { Router } from 'express'
import { PrismaClient } from '@prisma/client'
import { getAllFormations, getFormationById } from '../controllers/formation.js'

const router = Router()
const prisma = new PrismaClient()

// Route temporaire pour alimenter la base de données PostgreSQL
router.get('/seed-now', async (req, res) => {
  try {
    const result = await prisma.formation.createMany({
      data: [
        {
          titre: 'Formation SAARI Comptabilité',
          categorie: 'SAARI',
          description: 'Maîtriser les logiciels SAARI pour la gestion comptable.',
          statut: 'DISPONIBLE',
        },
        {
          titre: 'Bureautique Avancée (Excel, Word)',
          categorie: 'BUREAUTIQUE',
          description: 'Perfectionnement sur la suite Office.',
          statut: 'DISPONIBLE',
        },
        {
          titre: 'Management et Leadership',
          categorie: 'LEADERSHIP',
          description: 'Développer ses compétences de leader d\'équipe.',
          statut: 'DISPONIBLE',
        },
      ],
      skipDuplicates: true,
    })
    res.json({ message: '✅ Base de données initialisée avec succès !', result })
  } catch (err) {
    res.status(500).json({ error: 'Erreur lors du seed', details: err.message })
  }
})

router.get('/', getAllFormations)
router.get('/:id', getFormationById)

export default router