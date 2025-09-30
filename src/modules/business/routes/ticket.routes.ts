import { Router } from 'express'

import { listTickets, createTicket, deleteTicket, patchTicket } from '../controllers/Ticket.controller'

const router = Router()
router.get('/', listTickets)
router.post('/', createTicket)
router.patch('/', patchTicket)
router.delete('/', deleteTicket)

export default router
