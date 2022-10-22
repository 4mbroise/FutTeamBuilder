import { Inject, Injectable } from '@nestjs/common';
import { filter, map, } from 'rxjs';
import { PlayerDao } from './dao/player.dao';
import { CreatePlayerDto } from './dto/create-player.dto';
import { UpdatePlayerDto } from './dto/update-player.dto';
import { PlayerEntity } from './entities/player.entity';
import { Player } from './player.types';

@Injectable()
export class PlayerService {

  constructor(@Inject("PlayerDao") private readonly _playerDao: PlayerDao){
  }

  create(createPlayerDto: CreatePlayerDto) {
    return 'This action adds a new player';
  }

  findAll() {
    return this._playerDao.find().pipe(
      filter(Boolean),
      map((player) => (player || []).map((player) => new PlayerEntity(player)))
    )
    return `This action returns all player`;
  }

  findOne(id: number) {
    return `This action returns a #${id} player`;
  }

  update(id: number, updatePlayerDto: UpdatePlayerDto) {
    return `This action updates a #${id} player`;
  }

  remove(id: number) {
    return `This action removes a #${id} player`;
  }
}
