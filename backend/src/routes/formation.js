import { Router } from 'express'
import { getAllFormations, getFormationById } from '../controllers/formation.js'

const router = Router()

router.get('/', getAllFormations)
router.get('/:id', getFormationById)

export default router
