import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { from, map, Observable } from "rxjs";
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
    findById(id: string): Observable<void | Player> {
        return from(this._playerModel.findById(id).lean())
    }
    save(player: CreatePlayerDto): Observable<Player> {
        return from(new this._playerModel(player).save().then( value => value.toJSON()))
    }
    update(id: string, player: UpdatePlayerDto): Observable<Player> {
        return from(this._playerModel.findByIdAndUpdate(id, player, {new:true, runValidators:true}).lean());
    }
    remove(id: string): Observable<Player> {
        console.log("remove")
        return from(this._playerModel.findByIdAndRemove(id).lean())
    }
    
}