import type { Request, Response } from 'express'

import {getProjects} from '../services/Project.service'

export const listProjects = async (req: Request, res: Response) => {
    const {CompanyId} = req.query
    try {
        const listProjects = await getProjects(CompanyId as string)
        res.status(201).json(listProjects)
    } catch (error) {
        console.error(error)
        res.status(400).json({ message: 'Error obteniendo listado' })
    }
}
