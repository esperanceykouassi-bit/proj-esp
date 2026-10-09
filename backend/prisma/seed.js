import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main() {
  await prisma.formation.createMany({
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
    skipDuplicates: true, // Empêche l'erreur en cas de réexécution
  })
  console.log('✅ Données de démonstration insérées avec succès !')
}

main()
  .catch((e) => {
    console.error('Erreur Seed:', e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })