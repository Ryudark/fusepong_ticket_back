import jwt from 'jsonwebtoken'
import type { UserSchema } from '../../user/types/users.type'

export const signToken = (user: UserSchema, secret: string): string => {
    const token = jwt.sign({ id: user.id, CompanyId: user.CompanyId }, secret, { expiresIn: '1h' })
    return token
}