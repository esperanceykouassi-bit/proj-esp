# SkillUp Consulting CI — Projet Web

Site web complet pour **SkillUp Consulting Côte d'Ivoire**, cabinet spécialisé en formation professionnelle, assistance comptable et montage de projets.

## Stack technique

| Couche | Technologies |
|--------|-------------|
| Frontend | React 18 + Vite + Tailwind CSS |
| Backend | Node.js + Express + Prisma |
| Base de données | PostgreSQL |
| ORM | Prisma |

## Structure du projet

```
proj-esp/
├── frontend/               # React + Vite + Tailwind
│   ├── public/images/      # Logos SkillUp Consulting CI
│   ├── src/
│   │   ├── components/     # Navbar, Footer, sections réutilisables
│   │   ├── pages/          # Home, Services, Contact
│   │   └── index.css       # Tailwind + composants CSS
│   ├── tailwind.config.js  # Couleurs de la marque
│   └── vite.config.js
├── backend/                # Node.js + Express + Prisma
│   ├── prisma/
│   │   └── schema.prisma   # Modèle ContactMessage
│   ├── src/
│   │   ├── controllers/    # Logique métier
│   │   ├── routes/         # Routes API
│   │   └── index.js        # Point d'entrée Express
│   └── .env.example
└── README.md
```

## Démarrage rapide

### Prérequis

- Node.js >= 18
- PostgreSQL (local ou cloud — ex. Supabase, Railway)
- npm ou pnpm

---

### 1. Frontend

```bash
cd frontend
npm install
npm run dev
```

Ouvert sur **http://localhost:5173**

---

### 2. Backend

```bash
cd backend

# 1. Copier et remplir les variables d'environnement
cp .env.example .env
# → Renseigner DATABASE_URL avec votre connexion PostgreSQL

# 2. Installer les dépendances
npm install

# 3. Générer le client Prisma et pousser le schéma
npm run db:generate
npm run db:push

# 4. Démarrer le serveur
npm run dev
```

API disponible sur **http://localhost:3001**

---

## Routes API

| Méthode | Route | Description |
|---------|-------|-------------|
| `GET` | `/api/health` | Vérification santé du serveur |
| `POST` | `/api/contact` | Soumettre un message de contact |
| `GET` | `/api/contact` | Lister les messages reçus |

### Exemple — POST /api/contact

```json
{
  "name": "Konan Kouassi",
  "email": "konan@example.com",
  "subject": "Formation SAARI",
  "message": "Bonjour, je souhaite obtenir des informations sur vos formations."
}
```

---

## Couleurs de la marque

Configurées dans `frontend/tailwind.config.js` :

| Nom | Valeur | Usage |
|-----|--------|-------|
| `brand-green` | `#1B7A4B` | Couleur principale |
| `brand-green-dark` | `#145C38` | Hover / accentuation |
| `brand-teal` | `#1A6E5E` | Secondaire |
| `brand-blue` | `#1E3A8A` | Bleu marine |
| `brand-blue-mid` | `#2D4FC1` | Bleu intermédiaire |

---

## Pages du site

- **/** — Accueil (Hero, Mission/Vision, Services, Méthodologie, CTA Contact)
- **/services** — Détail des 5 domaines d'intervention
- **/contact** — Formulaire de contact + coordonnées

---

## Contact SkillUp Consulting CI

- infos.skillup24@gmail.com
- ci_consultskillup24@yahoo.com
