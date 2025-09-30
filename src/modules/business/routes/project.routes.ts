import { Router } from 'express'

import { listProjects } from '../controllers/Project.controller'

const router = Router()
router.get('/', listProjects)


export default router
