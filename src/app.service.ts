/* eslint-disable no-useless-constructor */

import { Injectable } from '@nestjs/common'
import { PrismaService } from './database/prisma.client'
import { IUser } from './interfaces'

@Injectable()
export class AppService {
  constructor(private prisma: PrismaService) {}

  async createUser(user: IUser) {
    const { email, password, role } = user

    const newUser = await this.prisma.user.create({
      data: {
        email,
        password,
        role,
      },
    })

    console.log(newUser)

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
