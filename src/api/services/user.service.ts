/* eslint-disable no-useless-constructor */

import { Injectable } from '@nestjs/common'
import { PrismaService } from 'src/database/prisma.client'
import { IUser } from 'src/dtos/interfaces'
import { hashPassword } from 'src/utils/bcrypt'
import { z } from 'zod'

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  public async createUser(user: IUser) {
    const userSchema = z.object({
      email: z.string().email({ message: 'Insira um email válido' }),
      password: z.string(),
      role: z.union([z.literal('admin'), z.literal('user')], {
        message: 'Insira uma role válida',
      }),
    })

    const { email, password, role } = userSchema.parse(user)

    // if (result.error)
    //   return {
    //     status: 400,
    //     message: result.error.message,
    //   }

    const encryptedPassword = await hashPassword(password)

    const newUser = await this.prisma.user.create({
      data: {
        email,
        password: encryptedPassword,
        role,
      },
    })

    if (!newUser)
      return {
        status: 500,
        message: 'Ocorreu um erro inesperado, por favor tente novamente',
        data: null,
      }

    return {
      status: 201,
      message: 'User registered successfully!',
      data: newUser,
    }
  }
}
