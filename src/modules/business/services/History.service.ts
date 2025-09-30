import type { infoSchema } from '../types/info.type'
import { models } from '@models'

export const getHistories = async (ProjectId: string): Promise<infoSchema[]> => {
    const histories = await models.Histories.findAll({
        where: { ProjectId }
    }
    )
    return histories
}
