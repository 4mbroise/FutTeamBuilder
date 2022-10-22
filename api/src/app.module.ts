import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PlayerModule } from './player/player.module';
import { TeamModule } from './team/team.module';

@Module({
  imports: [PlayerModule, MongooseModule.forRoot("mongodb://0.0.0.0:27017/fut"), TeamModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
