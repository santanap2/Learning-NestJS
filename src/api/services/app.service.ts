/* eslint-disable no-useless-constructor */

import { Injectable } from '@nestjs/common'
import { PrismaService } from 'src/database/prisma.client'

@Injectable()
export class AppService {
  constructor(private prisma: PrismaService) {}
}
