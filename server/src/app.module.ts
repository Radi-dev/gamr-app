import { Module } from '@nestjs/common';

import { RoomModule } from './room/room.module';
import { AuthModule } from './auth/auth.module';
import { AppController } from './app.controller';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [RoomModule, AuthModule, PrismaModule],
  controllers: [AppController],
  // providers: [AppService],
})
export class AppModule {}
