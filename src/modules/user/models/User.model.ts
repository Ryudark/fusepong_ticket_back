import { Model, DataTypes } from 'sequelize'
import type { Sequelize } from 'sequelize'

import type { UserSchema } from '../types/users.type'
// Aca se crean las tablas de la base de datos
module.exports = (sequelize: Sequelize) => {
  class User extends Model<UserSchema> implements UserSchema {
    id!: string
    name!: string
    email!: string
    password!: string
    CompanyId?: number

    static associate(models: Record<string, any>): void {
      // Aca se colocan las relaciones del modelo con otros modelos
      User.belongsTo(models.Companies)
    }
  }
  User.init(
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        validate: { isEmail: true },
        allowNull: false,
        unique: true,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      }
    },
    {
      sequelize,
      modelName: 'Users',
      timestamps: true,
    },
  )
  return User
}
