import { InjectModel } from "@nestjs/mongoose";
import { cp } from "fs";
import { Model } from "mongoose";
import { from, map, Observable } from "rxjs";
import { Player } from "../schemas/player.schema";
import { PlayerDao } from "./player.dao";

export class PlayerMongo implements PlayerDao{

    constructor( @InjectModel(Player.name) private readonly _playerModel: Model<Player> ){
    }

    private selectString:string = "sofifa_id age short_name player_face_url overall pace shooting passing dribbling defending physic"

    find(): Observable<Player[]> {
        console.log("ouaf")       
        return from(this._playerModel.find({}).lean()).pipe( map( (people) => [].concat(people)))
    }
    findById(id: number): Observable<void | Player> {
        throw new Error("Method not implemented.");
    }
    save(player: Player): Observable<Player> {
        throw new Error("Method not implemented.");
    }
    update(id: number, player: Player): Observable<Player> {
        throw new Error("Method not implemented.");
    }
    remove(id: number): Observable<Player> {
        throw new Error("Method not implemented.");
    }
    
}