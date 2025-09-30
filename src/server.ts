import express from 'express'
import cors from 'cors'
import corsConfig from './middlewares/cors'

import helmet from 'helmet' //secure web applications by setting crucial HTTP headers
import favicon from 'serve-favicon' //Colocar icono en navegador
import path from 'path'

import routes from './routes'

const server = express() // crea el servidor

server.use(helmet())
server.use(express.urlencoded({ extended: true, limit: '100kb' }))
server.use(express.json({ limit: '100kb' }))
server.use(cors(corsConfig))
server.use(favicon(path.join(__dirname, '../assets/server.png')))


server.use('/', routes)

export default server
