import { Router } from 'express'

import { listTickets, createTicket } from '../controllers/Ticket.controller'

const router = Router()
router.get('/', listTickets)
router.post('/', createTicket)


export default router
