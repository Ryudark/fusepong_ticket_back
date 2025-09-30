import type { TicketSchema } from '../types/ticket.type'
import { models } from '@models'

export const getTickets = async (HistoryId:string): Promise<TicketSchema[]> => {
    const tickets = await models.Tickets.findAll({
        where: {HistoryId}
    })
    return tickets
}

// export const getTicketById = async(req: Request): Promise<TicketSchema[]> => {
//     const tickets = await models.Tickets.findAll({
//         where: {HistoryId}
//     })
//     return tickets
// }

export const postTickets = async (ticketData: TicketSchema): Promise<TicketSchema> =>{
    const newTicket = await models.Tickets.create(ticketData)
    return newTicket as TicketSchema
}

export const patchTicketById = async (data: unknown, userData: any): Promise<TicketSchema> => {
    const ticket = await userData.set(data)
    // const ticket = await models.Tickets.findOne({
    // where: { id }
    // })
    // console.log(ticket);
    // ticket.isDeleted = true
    // await ticket.save()
    return ticket
}

export const deleteTicketById = async (id: string): Promise<TicketSchema> => {
    const ticket = await models.Tickets.findOne({
    where: { id }
    })
    console.log(ticket);
    ticket.isDeleted = true
    await ticket.save()
    return ticket
}