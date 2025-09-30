import { body } from 'express-validator'
import type { Request, Response, NextFunction } from 'express'

import validator from '@validator'
//datos a validar para create user, para saber como validar busque la documentacion de express validator
export const validateCreateUser = [
  body('name', 'Name not valid').exists().isString().trim().escape(),
  body('email', 'Email not valid').exists().isEmail().normalizeEmail(),
  body('password', 'Password not valid')
    .exists()
    .isString()
    .isStrongPassword()
    .trim()
    .escape(),
  (req: Request, res: Response, next: NextFunction) => {
    validator(req, res, next)
  },
]
