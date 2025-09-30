import type { infoSchema } from '../types/info.type'
import { models } from '@models'

export const getProjects = async (CompanyId: string): Promise<infoSchema[]> => {
    const projects = await models.Projects.findAll({
        where: { CompanyId }
    }
    )
    return projects
}
