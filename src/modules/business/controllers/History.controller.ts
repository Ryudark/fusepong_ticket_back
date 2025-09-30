import type { Request, Response } from 'express'

import {getHistories} from '../services/History.service'

export const listHistories = async (req: Request, res: Response) => {
    const {ProjectId} = req.body
    try {
        const listHistories = await getHistories(ProjectId as string)
        res.status(201).json(listHistories)
    } catch (error) {
        console.error(error)
        res.status(400).json({ message: 'Error obteniendo listado' })
    }
}