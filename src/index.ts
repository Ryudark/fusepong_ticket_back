import 'tsconfig-paths/register'
import dotenv from 'dotenv'
dotenv.config()

import server from './server'
import sequelize from './database'

const PORT = process.env.PORT

sequelize
  .sync({ force: false, alter: false, logging: console.log }) //Si force esta en true, borra toda la base de datos y la crea de nuevo de ceros con los nuevos cambios
  .then(() => {
    // Si alter esta en true, modifica las tablas para que quede como en los cambios y si alguna columna se modifica se borra los datos de esa columna
    server.listen(PORT, () => {
      console.log('Listening at port ' + PORT)
    })
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err)
  })
