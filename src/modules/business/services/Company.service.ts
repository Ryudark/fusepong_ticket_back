import type { CompanySchema } from '../types/company.type'
import { models } from '@models'

export const getCompanies = async (): Promise<CompanySchema[]> => {
    const companies = await models.Companies.findAll()
    return companies
}

