import { Router } from 'express'
import fs from 'fs'
import path from 'path'

const router = Router({ strict: true })

// Este archivo autoimporta las rutas mientras se siga la estructura src/modules/routes/(Nombre del modulo).routes.ts
const modules: string[] = fs.readdirSync(path.join(__dirname, './modules'))

modules.forEach((folder: string) => {
  if (folder === '.DS_Store') return
  const routeFiles = fs.readdirSync(
    path.join(__dirname, 'modules', folder, 'routes'),
  )
  routeFiles.forEach((file: string) => {
    const route = require(
      path.join(__dirname, 'modules', folder, 'routes', file),
    )
    router.use(`/${folder}/${file.slice(0, -10)}`, route.default)
  })
})

export default router
