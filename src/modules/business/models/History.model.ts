import { Model, DataTypes } from 'sequelize'
import type { Sequelize } from 'sequelize'

import type { infoSchema } from '../types/info.type'
    module.exports = (sequelize: Sequelize) => {
    class History extends Model<infoSchema> implements infoSchema {
        id!: number
        name!: string
        

        static associate(models: Record<string, any>): void {
            History.belongsTo(models.Projects)
            History.hasMany(models.Tickets)
        }
    }
    History.init(
        {
            id: {
                type: DataTypes.INTEGER,
                defaultValue: DataTypes.INTEGER,
                primaryKey: true,
            },
            name: {
                type: DataTypes.STRING,
                allowNull: false,
            }
        },
        {
            sequelize,
            modelName: 'Histories',
            timestamps: false,
        },
    )
    return History
}
