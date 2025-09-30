import type { Request, Response } from 'express'

import { deleteTicketById,  getTickets, patchTicketById, postTickets } from '../services/Ticket.service'

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

export const patchTicket = async (req: Request, res:Response): Promise<void> => {
    console.log(req.body);
    const ticketData = req.body
    // const id = req.body.id
    // const ticket = await getTicketById(id as string)
    // try{
    //     const ticket= await patchTicketById(ticketData)
    //     res.status(201).json(ticket)
    // }
    // catch (error){
    //     console.error(error)
    //     res.status(400).json({ message: 'Error eliminando ticket' })
    // }
}

export const deleteTicket = async (req: Request, res:Response): Promise<void> => {
    const { id } = req.body
    console.log(id);
    try{
        const ticket= await deleteTicketById(id as string)
        res.status(201).json(ticket)
    }
    catch (error){
        console.error(error)
        res.status(400).json({ message: 'Error eliminando ticket' })
    }
}