import type { Request, Response } from 'express'

import {getCompanies} from '../services/Company.service'

export const listCompanies = async (req: Request, res: Response) => {
  try {
    const listCompanies = await getCompanies()
    res.status(201).json(listCompanies)
  } catch (error) {
    console.error(error)
    res.status(400).json({ message: 'Error obteniendo listado' })
  }
}