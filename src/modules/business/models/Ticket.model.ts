import { Model, DataTypes } from 'sequelize'
import type { Sequelize } from 'sequelize'

import type { TicketSchema } from '../types/ticket.type'
    module.exports = (sequelize: Sequelize) => {
    class Ticket extends Model<TicketSchema> implements TicketSchema {
        id!: number
        name!: string
        description!: string
        status!: string
        
        static associate(models: Record<string, any>): void {
            Ticket.belongsTo(models.Histories)
        }
    }
    Ticket.init(
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
            },
            name: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            description: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            status: {
                type: DataTypes.STRING,
                allowNull: false,
            }
        },
        {
            sequelize,
            modelName: 'Tickets',
            timestamps: false,
        },
    )
    return Ticket
}
