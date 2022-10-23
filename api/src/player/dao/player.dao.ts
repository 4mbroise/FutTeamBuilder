import { Observable } from "rxjs";
import { CreatePlayerDto } from "../dto/create-player.dto";
import { UpdatePlayerDto } from "../dto/update-player.dto";
import { Player } from "../schemas/player.schema";

export interface PlayerDao{
    find(): Observable<Player[] | void>
    findById(id: string): Observable<Player | void>
    save(player: CreatePlayerDto): Observable<Player>
    update(id: string, player:UpdatePlayerDto): Observable<Player>
    remove(id: string): Observable<Player>
}