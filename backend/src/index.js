import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import { rateLimit } from 'express-rate-limit'
import contactRouter    from './routes/contact.js'
import formationRouter  from './routes/formation.js'
import inscriptionRouter from './routes/inscription.js'
import adminRouter      from './routes/admin.js'

const app  = express()
const PORT = process.env.PORT || 3001

app.use(helmet())
app.use(cors({
  origin:      process.env.FRONTEND_URL || 'http://localhost:5173',
  credentials: true,
}))
app.use(express.json())

const globalLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 200,
  standardHeaders: true,
  legacyHeaders:   false,
})
app.use(globalLimiter)

// ── Routes publiques ───────────────────────────────────────────────────────────
app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() })
})

app.use('/api/contact',      contactRouter)
app.use('/api/formations',   formationRouter)
app.use('/api/inscriptions', inscriptionRouter)

// ── Routes administration ──────────────────────────────────────────────────────
app.use('/api/admin', adminRouter)

// ── Fallbacks ──────────────────────────────────────────────────────────────────
app.use((_req, res) => {
  res.status(404).json({ error: 'Route non trouvée.' })
})

app.use((err, _req, res, _next) => {
  console.error('[server] Erreur non gérée :', err)
  res.status(500).json({ error: 'Erreur interne du serveur.' })
})

app.listen(PORT, () => {
  console.log(`✅ SkillUp Consulting CI API — http://localhost:${PORT}`)
})
