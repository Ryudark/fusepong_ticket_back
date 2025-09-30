import { Model, DataTypes } from 'sequelize'
import type { Sequelize } from 'sequelize'

import type { infoSchema } from '../types/info.type'
    module.exports = (sequelize: Sequelize) => {
    class Project extends Model<infoSchema> implements infoSchema {
        id!: number
        name!: string
        

        static associate(models: Record<string, any>): void {
            Project.belongsTo(models.Companies)
            Project.hasMany(models.Histories)
        }
    }
    Project.init(
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
            modelName: 'Projects',
            timestamps: false,
        },
    )
    return Project
}
