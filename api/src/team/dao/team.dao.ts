import { Observable } from "rxjs";
import { CreateTeamDto } from "../dto/create-team.dto";
import { UpdateTeamDto } from "../dto/update-team.dto";
import { TeamEntity } from "../entities/team.entity";
import { Team } from "../schemas/team.schema";

export interface TeamDao{
    find(): Observable<TeamEntity[] | void>
    findById(id: string): Observable<TeamEntity | void>
    save(team: CreateTeamDto): Observable<TeamEntity>
    update(id: string, team:UpdateTeamDto): Observable<TeamEntity>
    remove(id: string): Observable<TeamEntity>
}