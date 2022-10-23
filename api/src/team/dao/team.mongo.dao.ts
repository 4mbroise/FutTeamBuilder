import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { from, map, Observable, of } from "rxjs";
import { CreateTeamDto } from "../dto/create-team.dto";
import { UpdateTeamDto } from "../dto/update-team.dto";
import { TeamEntity } from "../entities/team.entity";
import { Team } from "../schemas/team.schema";
import { TeamDao } from "./team.dao";

export class TeamMongo implements TeamDao{

    constructor( @InjectModel(Team.name) private readonly _teamModel: Model<Team> ){
    }

    find(): Observable<void | TeamEntity[]> {
        return from(this._teamModel.find({}).lean()).pipe( map( (people) => [].concat(people)))
    }
    findById(id: string): Observable<void | TeamEntity> {
        return from(this._teamModel.findById(id).then(a => new TeamEntity(a.toJSON())))
    }
    save(team: CreateTeamDto): Observable<TeamEntity> {       
        new this._teamModel(team).save().then( a => console.log(a.toJSON()))
        return from(new this._teamModel(team).save().then( a => new TeamEntity(a.toJSON())))
    }
    update(id: string, team: UpdateTeamDto): Observable<TeamEntity> {
        return from(this._teamModel.findByIdAndUpdate(id, team, {new:true, runValidators:true}).then( a => new TeamEntity(a.toJSON())))
    }
    remove(id: string): Observable<TeamEntity> {
        return from(this._teamModel.findByIdAndRemove(id).then( a => new TeamEntity(a.toJSON())));
    }

}