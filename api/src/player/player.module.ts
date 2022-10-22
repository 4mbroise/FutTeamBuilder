import { Module } from '@nestjs/common';
import { PlayerService } from './player.service';
import { PlayerController } from './player.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Player, PlayerSchema } from './schemas/player.schema';
import { PlayerMongo } from './dao/player.mongo.dao';

@Module({
  imports: [MongooseModule.forFeature([{ name: Player.name, schema: PlayerSchema }])],
  controllers: [PlayerController],
  providers: [
    PlayerService,
    {
      provide: "PlayerDao",
      useClass: PlayerMongo,
    }]
})
export class PlayerModule {}
