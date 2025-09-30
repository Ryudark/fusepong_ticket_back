import { Sequelize } from 'sequelize'
import fs from 'fs'
import path from 'path'

const { DATABASE_URL, NODE_ENV } = process.env

// Este archivo autoimporta los modelos de la base de datos mientras se siga la estructura src/modules/models/(Nombre del modulo).model.ts
const config =
  NODE_ENV !== 'dev'
    ? {
        dialectOptions: {
          ssl: {
            require: true,
            rejectUnauthorized: false,
          },
        },
      }
    : {}

const sequelize = new Sequelize(DATABASE_URL!, config)

const modules: string[] = fs.readdirSync(path.join(__dirname, './modules'))
modules.forEach((folder: string) => {
  const modelFiles = fs.readdirSync(
    path.join(__dirname, 'modules', folder, 'models'),
  )
  modelFiles.forEach((file: string) => {
    const model = require(
      path.join(__dirname, 'modules', folder, 'models', file),
    )
    model(sequelize)
  })
})

type Models = Record<string, any>
export const models: Models = sequelize.models

Object.keys(models).forEach((modelName) => {
  if (models[modelName].associate !== undefined) {
    models[modelName].associate(models)
  }
})

export default sequelize
