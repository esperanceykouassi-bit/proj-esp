import 'dotenv/config'
import { PrismaClient, CategorieFormation, StatutFormation } from '@prisma/client'

const prisma = new PrismaClient()

const formations = [
  // ── SAARI ──────────────────────────────────────────────────────────────────
  {
    titre: 'Sage Comptabilité 100 — Prise en main et pratique',
    categorie: CategorieFormation.SAARI,
    description:
      'Maîtrisez Sage Comptabilité 100 de la création du dossier à la clôture annuelle. ' +
      'Paramétrage du plan comptable SYSCOHADA, saisie des écritures, lettrage, ' +
      'rapprochement bancaire et édition des états financiers. Formation pratique sur cas réels.',
    duree: '4 jours (32 heures)',
    prix: 120000,
    statut: StatutFormation.ACTIF,
  },
  {
    titre: 'Sage Gestion Commerciale — Achats, Ventes & Stock',
    categorie: CategorieFormation.SAARI,
    description:
      'Gérez intégralement votre cycle commercial sous Sage Gestion Commerciale : ' +
      'création des articles et familles, gestion des tiers, bons de commande, ' +
      'livraisons, facturation, avoirs et suivi des stocks en temps réel. ' +
      'Idéal pour les responsables commerciaux et logistiques des PME.',
    duree: '3 jours (24 heures)',
    prix: 95000,
    statut: StatutFormation.ACTIF,
  },
  {
    titre: 'Sage Paie & RH — Gestion de la paie ivoirienne',
    categorie: CategorieFormation.SAARI,
    description:
      'Paramétrez et exploitez Sage Paie en conformité avec la législation sociale ivoirienne : ' +
      'CNPS, impôt sur salaire (ITS), IGF, absences, congés, heures supplémentaires. ' +
      "Édition des bulletins, déclarations sociales et états de synthèse RH. " +
      'Formation animée par un expert-comptable diplômé.',
    duree: '3 jours (24 heures)',
    prix: 100000,
    statut: StatutFormation.ACTIF,
  },

  // ── BUREAUTIQUE ────────────────────────────────────────────────────────────
  {
    titre: 'Excel Avancé — Tableaux de bord et analyse de données',
    categorie: CategorieFormation.BUREAUTIQUE,
    description:
      'Passez au niveau supérieur sur Excel : fonctions avancées (INDEX/EQUIV, SOMME.SI.ENS, ' +
      'RECHERCHEX), tableaux croisés dynamiques, graphiques professionnels, ' +
      'mise en forme conditionnelle et introduction aux macros VBA pour automatiser vos tâches. ' +
      'Cas pratiques issus des métiers de la finance et de la gestion.',
    duree: '3 jours (21 heures)',
    prix: 75000,
    statut: StatutFormation.ACTIF,
  },
  {
    titre: 'PowerPoint Stratégique — Présentations à fort impact',
    categorie: CategorieFormation.BUREAUTIQUE,
    description:
      'Concevez des présentations professionnelles qui convainquent : maîtrise des masques ' +
      'et thèmes, hiérarchie visuelle, storytelling de données, animations sobres ' +
      'et exportation multi-format. Atelier centré sur la prise de parole en entreprise ' +
      "et la préparation de pitchs d'investissement.",
    duree: '2 jours (14 heures)',
    prix: 50000,
    statut: StatutFormation.ACTIF,
  },

  // ── LEADERSHIP ─────────────────────────────────────────────────────────────
  {
    titre: 'Leadership & Management des équipes — Niveau Fondamental',
    categorie: CategorieFormation.LEADERSHIP,
    description:
      "Développez votre posture de leader et apprenez à mobiliser vos collaborateurs : " +
      'styles de management situationnel, délégation efficace, conduite de réunions, ' +
      'gestion des conflits, communication assertive et évaluation des performances. ' +
      'Formation intensive en salle avec mises en situation et jeux de rôle.',
    duree: '3 jours (21 heures)',
    prix: 150000,
    statut: StatutFormation.ACTIF,
  },
]

async function main() {
  console.log('🌱  Démarrage du seed SkillUp Consulting CI…\n')

  // Nettoyage dans l'ordre des dépendances
  await prisma.inscription.deleteMany()
  await prisma.contactMessage.deleteMany()
  await prisma.formation.deleteMany()

  console.log('🗑   Tables vidées.')

  // Insertion des formations
  for (const data of formations) {
    const formation = await prisma.formation.create({ data })
    const prix = formation.prix.toLocaleString('fr-CI')
    console.log(`✅  [${formation.categorie.padEnd(12)}] ${formation.titre} — ${prix} XOF`)
  }

  // Exemples d'inscriptions (données fictives)
  const [sageCompta, excelAvance] = await prisma.formation.findMany({
    where: {
      titre: {
        in: [
          'Sage Comptabilité 100 — Prise en main et pratique',
          'Excel Avancé — Tableaux de bord et analyse de données',
        ],
      },
    },
  })

  if (sageCompta && excelAvance) {
    await prisma.inscription.createMany({
      data: [
        {
          nom: 'Kouassi',
          prenom: 'Adjoua Marie',
          email: 'adjoua.kouassi@example.ci',
          telephone: '+225 07 00 11 22 33',
          formationId: sageCompta.id,
          message: 'Je travaille dans un cabinet comptable et souhaite valider mes acquis sur Sage.',
          statut: 'CONFIRMEE',
        },
        {
          nom: 'Diabaté',
          prenom: 'Seydou',
          email: 'seydou.diabate@example.ci',
          telephone: '+225 05 44 55 66 77',
          formationId: excelAvance.id,
          message: "Responsable administratif, j'ai besoin d'Excel pour mes reportings mensuels.",
          statut: 'EN_ATTENTE',
        },
        {
          nom: 'N\'Goran',
          prenom: 'Brice',
          email: 'brice.ngoran@example.ci',
          telephone: '+225 01 88 99 00 11',
          formationId: sageCompta.id,
          statut: 'EN_ATTENTE',
        },
      ],
    })
    console.log('\n📋  3 inscriptions exemples insérées.')
  }

  // Exemples de messages de contact
  await prisma.contactMessage.createMany({
    data: [
      {
        nom: 'Traoré Aminata',
        email: 'aminata.traore@example.ci',
        telephone: '+225 07 12 34 56 78',
        sujet: 'Formation SAARI',
        message:
          'Bonjour, je gère une PME de 15 salariés et je souhaite former mon équipe comptable sur Sage. ' +
          'Pouvez-vous me proposer un devis pour une formation intra-entreprise ?',
        lu: false,
      },
      {
        nom: 'Koné Ibrahima',
        email: 'kone.ibrahima@example.ci',
        sujet: 'Assistance Comptable',
        message:
          "Bonjour, j'ai besoin d'une assistance pour ma clôture comptable de fin d'exercice. " +
          'Mon entreprise est dans le secteur du négoce à Abidjan.',
        lu: true,
      },
    ],
  })
  console.log('📨  2 messages de contact exemples insérés.')

  const totalFormations = await prisma.formation.count()
  const totalInscriptions = await prisma.inscription.count()
  const totalMessages = await prisma.contactMessage.count()

  console.log(`
╔══════════════════════════════════════════╗
║         Seed terminé avec succès         ║
╠══════════════════════════════════════════╣
║  Formations   : ${String(totalFormations).padEnd(25)}║
║  Inscriptions : ${String(totalInscriptions).padEnd(25)}║
║  Messages     : ${String(totalMessages).padEnd(25)}║
╚══════════════════════════════════════════╝`)
}

main()
  .catch((e) => {
    console.error('❌  Erreur seed :', e)
    process.exit(1)
  })
  .finally(() => prisma.$disconnect())
