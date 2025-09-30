import { Router } from 'express'

import { validateCreateUser } from '../utils/user.validator'
import { createUser, loginUser } from '../controllers/user.controller'

const router = Router()
// cuando se hace la peticion entra aca primero luego valida con el validador y luego llama al controlador
router.post('/', validateCreateUser, createUser)
router.post('/login', loginUser)

export default router
