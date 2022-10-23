import { Module } from '@nestjs/common';
import { PlayerService } from './player.service';
import { PlayerController } from './player.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Player, PlayerSchema } from './schemas/player.schema';
import { PlayerMongo } from './dao/player.mongo.dao';
import { PlayerExists } from './validators/playerExists.validator';

@Module({
  imports: [MongooseModule.forFeature([{ name: Player.name, schema: PlayerSchema }])],
  controllers: [PlayerController],
  providers: [
    PlayerExists,
    PlayerService,
    {
      provide: "PlayerDao",
      useClass: PlayerMongo,
    }]
})
export class PlayerModule {}
