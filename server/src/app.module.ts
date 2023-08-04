import { Module } from '@nestjs/common';

import { RoomModule } from './room/room.module';
import { AuthModule } from './auth/auth.module';
import { AppController } from './app.controller';

@Module({
  imports: [RoomModule, AuthModule],
  controllers: [AppController],
  // providers: [AppService],
})
export class AppModule {}
