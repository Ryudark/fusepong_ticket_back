import { Router } from 'express'

import { listCompanies } from '../controllers/Company.controller'

const router = Router()
router.get('/', listCompanies)


export default router
