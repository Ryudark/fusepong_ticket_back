import { Router } from 'express'

import { listHistories } from '../controllers/History.controller'

const router = Router()
router.get('/', listHistories)


export default router
