import { Observable } from "rxjs";
import { CreatePlayerDto } from "../dto/create-player.dto";
import { Player } from "../schemas/player.schema";

export interface PlayerDao{
    find(): Observable<Player[] | void>
    findById(id: number): Observable<Player | void>
    save(player: CreatePlayerDto): Observable<Player>
    update(id: number, player:Player): Observable<Player>
    remove(id: number): Observable<Player>
}