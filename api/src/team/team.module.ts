import { Module } from '@nestjs/common';
import { TeamService } from './team.service';
import { TeamController } from './team.controller';
import { TeamMongo } from './dao/team.mongo.dao';
import { MongooseModule } from '@nestjs/mongoose';
import { Team, TeamSchema } from './schemas/team.schema';

@Module({
  imports : [MongooseModule.forFeature([{ name: Team.name, schema: TeamSchema }])],
  controllers: [TeamController],
  providers: [
  TeamService,
  {
    provide: "TeamDao",
    useClass: TeamMongo
  }]
})
export class TeamModule {}
