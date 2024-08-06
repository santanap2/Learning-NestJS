/* eslint-disable no-useless-constructor */

import { Controller, Get } from '@nestjs/common'
import { AppService } from '../services/app.service'

@Controller()
export class AppController {
  constructor(private appService: AppService) {}

  @Get()
  async welcome() {
    return { message: 'API online and working fine' }
  }
}
