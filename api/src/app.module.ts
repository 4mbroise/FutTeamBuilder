import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PlayerModule } from './player/player.module';

@Module({
  imports: [PlayerModule, MongooseModule.forRoot("mongodb://0.0.0.0:27017/fut")],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
