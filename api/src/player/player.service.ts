import { ConflictException, Inject, Injectable, NotFoundException, UnprocessableEntityException } from '@nestjs/common';
import { catchError, filter, from, map, mergeMap, Observable, of, throwError, } from 'rxjs';
import { PlayerDao } from './dao/player.dao';
import { CreatePlayerDto } from './dto/create-player.dto';
import { UpdatePlayerDto } from './dto/update-player.dto';
import { PlayerEntity } from './entities/player.entity';

@Injectable()
export class PlayerService {

  constructor(@Inject("PlayerDao") private readonly _playerDao: PlayerDao){
  }

  create(createPlayerDto: CreatePlayerDto) {

    return  of(createPlayerDto).pipe(
      mergeMap((newPreparedPerson: CreatePlayerDto) =>
        this._playerDao.save(newPreparedPerson),
      ),
      catchError((e) =>
        e.code === 11000
          ? throwError(
              () =>
                new ConflictException(
                  `the ID #${createPlayerDto._id} is already used`,
                ),
            )
          : throwError(() => new UnprocessableEntityException(e.message)),
      ),
      map((personCreated) => new PlayerEntity(personCreated)),
    );
  }

  findAll() {
    return this._playerDao.find().pipe(
      filter(Boolean),
      map((player) => (player || []).map((player) => new PlayerEntity(player)))
    )
  }

  findOne(id: string) : Observable<PlayerEntity> {
    return this._playerDao.findById(id).pipe(
      catchError((e) =>
        throwError(() => new UnprocessableEntityException(e.message)),
      ),
      mergeMap((person) =>
        !!person
          ? of(new PlayerEntity(person))
          : throwError(
              () => new NotFoundException(`Player #${id} doesn't exist`),
            ),
      ),
    );
  }

  update(id: string, updatePlayerDto: UpdatePlayerDto) {
    return this._playerDao.update(id, updatePlayerDto).pipe(
      catchError((e) =>
        throwError(() => new UnprocessableEntityException(e.message)),
      ),
      mergeMap((personUpdated) =>
        !!personUpdated
          ? of(new PlayerEntity(personUpdated))
          : throwError(
              () => new NotFoundException(`Player #${id} doesn't exist`),
            ),
      ),
    );
  }

  remove(id: string) {
    return this._playerDao.remove(id).pipe(
      catchError((e) =>
        throwError(() => new UnprocessableEntityException(e.message)),
      ),
      mergeMap((person) =>
        !!person
          ? of(new PlayerEntity(person))
          : throwError(
              () => new NotFoundException(`Player #${id} doesn't exist`),
            ),
      ),
    );
  }
}
