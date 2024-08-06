/* eslint-disable no-useless-constructor */

import { Body, Controller, Get, Post } from '@nestjs/common'
import { AppService } from './app.service'
import { IUser } from './interfaces'

@Controller()
export class AppController {
  constructor(private appService: AppService) {}

  @Get()
  async welcome() {
    return 'API online and working fine'
  }

  @Post('create-user')
  async createUser(@Body() body: IUser) {
    const user = body
    const { message, data } = await this.appService.createUser(user)

    return { message, data }
  }
}
