import { validationResult } from 'express-validator'
import type { Request, Response, NextFunction } from 'express'

//este middleware valida la entrada de datos del usuario
const validator = (req: Request, res: Response, next: NextFunction): any => {
  try {
    validationResult(req).throw()
    next()
  } catch (err: any) {
    console.error('Validation error ' + JSON.stringify(err.array()))
    res.status(422)
    res.json(err.array())
  }
}

export default validator
