import bcrypt from 'bcrypt'
// Funcion para encryptar y comprar la contraseña de usuario
export const encrypt = async (password: string): Promise<string> => {
  const salt = await bcrypt.genSalt(10)
  const hash = await bcrypt.hash(password, salt)
  return hash
}

export const compare = async (password: string, hash: string): Promise<boolean> => {
  const result = await bcrypt.compare(password, hash)
  return result
}
