import { InjectModel } from "@nestjs/mongoose";
import { cp } from "fs";
import { Model } from "mongoose";
import { from, map, Observable } from "rxjs";
import { threadId } from "worker_threads";
import { CreatePlayerDto } from "../dto/create-player.dto";
import { UpdatePlayerDto } from "../dto/update-player.dto";
import { Player } from "../schemas/player.schema";
import { PlayerDao } from "./player.dao";

export class PlayerMongo implements PlayerDao{

    constructor( @InjectModel(Player.name) private readonly _playerModel: Model<Player> ){
    }

    find(): Observable<Player[]> {
        console.log("ouaf")       
        return from(this._playerModel.find({}).lean()).pipe( map( (people) => [].concat(people)))
    }
    findById(id: number): Observable<void | Player> {
        return from(this._playerModel.findOne({sofifaId : id}).lean())
    }
    save(player: CreatePlayerDto): Observable<Player> {
        return from(new this._playerModel(player).save())
    }
    update(id: number, player: UpdatePlayerDto): Observable<Player> {
        return from(this._playerModel.findOneAndUpdate({ sofifaId:id }, player, {new:true, runValidators:true}).lean());
    }
    remove(id: number): Observable<Player> {
        console.log("remove")
        return from(this._playerModel.findOneAndRemove({sofifaId : id}).lean())
    }
    
}