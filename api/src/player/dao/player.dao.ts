import { Observable } from "rxjs";
import { Player } from "../schemas/player.schema";

export interface PlayerDao{
    find(): Observable<Player[] | void>
    findById(id: number): Observable<Player | void>
    save(player: Player): Observable<Player>
    update(id: number, player:Player): Observable<Player>
    remove(id: number): Observable<Player>
}