import type { Request, Response } from 'express'
import { addUser, findUser } from '../services/user.service'
import { models } from '@models'
import { compare } from 'bcrypt'
import jsonwebtoken from 'jsonwebtoken';
import { signToken } from '../utils/signTokens';

// Este es el segundo paso de la peticion, aca se llama al servicio y en base a eso se responde la peticion
export const createUser = async(req: Request, res: Response) => {
  try {
    const newUser = await addUser(req.body)
    res.status(201).json(newUser)
  } catch (error) {
    console.error(error)
    res.status(400).json({ message: 'Error creando usuario' })
  }
}

export const loginUser = async(req:Request, res: Response)=>{

  const TOKEN_SECRET = process.env.TOKEN_SECRET as string

  const email = req.body.email
  const password = req.body.password
  if(!email || !password){
    res.status(400).send({status:"Error", message:"Campos incompletos"})
  }
  const userFind = await findUser(email)
  if(!userFind){
    res.status(400).send({status:"Error", message:"Revise los datos ingresados"})
  }
  const login = await compare(password, userFind.password)
  if(!login){
    res.status(400).send({status:"Error", message:"Revise los datos ingresados"})
  }
  const token = signToken(userFind, TOKEN_SECRET)
  const response ={
    isAuthenticated: true,
    token: { token, expiresIn: '1h' },
    // refreshToken: { refreshToken, expiresIn: '7d' },
    userFind
  }
  res.status(200).send(response)
}
