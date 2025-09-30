import { UserSchema } from '../types/users.type'
import { models } from '@models'
import { encrypt } from '../utils/encrypt'
// Ultimo paso de la peticion, aca se encrypta la contrasena y se crea el usuario en base de datos
export const addUser = async (body: UserSchema) => {
  const hash = await encrypt(body.password)

  const newUser = await models.Users.create({
    name: body.name,
    email: body.email,
    password: hash,
    CompanyId: body.CompanyId
  })

  return newUser
}

export const findUser = async (email: string) =>{
  const userFind = await models.Users.findOne({
    where:{email}
  })
  return userFind
}
