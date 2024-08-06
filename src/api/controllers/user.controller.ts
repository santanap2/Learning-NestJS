/* eslint-disable no-useless-constructor */
import { Body, Controller, Get, Post } from '@nestjs/common'
import { UserService } from '../services/user.service'
import { env } from 'src/environment'
import { CreateUserBody } from 'src/dtos/create-user-body'

@Controller()
export default class UserController {
  constructor(private userService: UserService) {}

  @Get('get-users')
  async getUsers() {
    console.log(env.XAMPSON)
    return 'users'
  }

  @Post('create-user')
  public async createUser(@Body() body: CreateUserBody) {
    const { email, password, role } = body
    const { message, data } = await this.userService.createUser({
      email,
      password,
      role,
    })

    return { message, data }
  }
}
