import { Module } from '@nestjs/common'
import { AppController } from './api/controllers/app.controller'
import { PrismaService } from './database/prisma.client'
import UserController from './api/controllers/user.controller'
import { UserService } from './api/services/user.service'
import { AppService } from './api/services/app.service'

@Module({
  imports: [],
  controllers: [AppController, UserController],
  providers: [AppService, PrismaService, UserService],
})
export class AppModule {}
