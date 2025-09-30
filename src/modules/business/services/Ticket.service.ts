import type { TicketSchema } from '../types/ticket.type'
import { models } from '@models'

export const getTickets = async (HistoryId:string): Promise<TicketSchema[]> => {
    const tickets = await models.Tickets.findAll({
        where: {HistoryId}
    })
    return tickets
}

export const postTickets = async (ticketData: TicketSchema): Promise<TicketSchema> =>{
    const newTicket = await models.Tickets.create(ticketData)
    return newTicket as TicketSchema
}

// export const patchTickets = async()

