import type { Request, Response } from 'express'

import { getTickets, postTickets } from '../services/Ticket.service'

export const listTickets = async (req: Request, res: Response) => {
    const {HistoryId} = req.body
    try {
        const listTickets = await getTickets(HistoryId as string)
        res.status(201).json(listTickets)
    } catch (error) {
        console.error(error)
        res.status(400).json({ message: 'Error obteniendo listado' })
    }
}

export const createTicket = async (req: Request, res:Response) =>{
    const ticket=req.body
    try {
        const newTicket = await postTickets(ticket)
        res.status(201).json(newTicket)
    } catch (error) {
        console.error(error)
        res.status(400).json({ message: 'Error creando ticket' })
    }
}