import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { from, Observable, of } from "rxjs";
import { CreateTeamDto } from "../dto/create-team.dto";
import { UpdateTeamDto } from "../dto/update-team.dto";
import { TeamEntity } from "../entities/team.entity";
import { Team } from "../schemas/team.schema";
import { TeamDao } from "./team.dao";

export class TeamMongo implements TeamDao{

    constructor( @InjectModel(Team.name) private readonly _teamModel: Model<Team> ){
    }

    find(): Observable<void | TeamEntity[]> {
        throw new Error("Method not implemented.");
    }
    findById(id: string): Observable<void | TeamEntity> {
        throw new Error("Method not implemented.");
    }
    save(team: CreateTeamDto): Observable<TeamEntity> {       
        new this._teamModel(team).save().then( a => console.log(a.toJSON()))
        return from(new this._teamModel(team).save().then( a => new TeamEntity(a.toJSON())))
        return undefined
    }
    update(id: string, team: UpdateTeamDto): Observable<TeamEntity> {
        throw new Error("Method not implemented.");
    }
    remove(id: string): Observable<TeamEntity> {
        throw new Error("Method not implemented.");
    }

}