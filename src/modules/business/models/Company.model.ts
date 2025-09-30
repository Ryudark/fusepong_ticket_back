import { Model, DataTypes } from 'sequelize'
import type { Sequelize } from 'sequelize'

import type { CompanySchema } from '../types/company.type'
    module.exports = (sequelize: Sequelize) => {
    class Company extends Model<CompanySchema> implements CompanySchema {
        id!: number
        name!: string
        nit!:string
        phone!:string
        address!:string
        email!: string
        

        static associate(models: Record<string, any>): void {
            Company.hasMany(models.Users)
            Company.hasMany(models.Projects)
        }
    }
    Company.init(
        {
            id: {
                type: DataTypes.INTEGER,
                defaultValue: DataTypes.INTEGER,
                primaryKey: true,
            },
            name: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            nit: {
                type: DataTypes.STRING,
                allowNull:false,
                unique: true,
            },
            phone: {
                type: DataTypes.STRING,
                allowNull:false,
                unique: true,
            },
            address: {
                type: DataTypes.STRING,
                allowNull:false,
            },
            email: {
                type: DataTypes.STRING,
                validate: { isEmail: true },
                allowNull: false,
                unique: true,
            }
        },
        {
            sequelize,
            modelName: 'Companies',
            timestamps: false,
        },
    )
    return Company
}
