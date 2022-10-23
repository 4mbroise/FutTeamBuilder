import { ConflictException, Inject, Injectable, NotFoundException, UnprocessableEntityException } from '@nestjs/common';
import { catchError, filter, map, mergeMap, of, throwError } from 'rxjs';
import { TeamDao } from './dao/team.dao';
import { CreateTeamDto } from './dto/create-team.dto';
import { UpdateTeamDto } from './dto/update-team.dto';
import { TeamEntity } from './entities/team.entity';

@Injectable()
export class TeamService {

  constructor(@Inject("TeamDao") private readonly _teamDao: TeamDao){

  }

  create(createTeamDto: CreateTeamDto) {
    return  of(createTeamDto).pipe(
      mergeMap((newPreparedPerson: CreateTeamDto) =>
        this._teamDao.save(newPreparedPerson),
      ),
      catchError((e) =>
        e.code === 11000
          ? throwError(
              () =>
                new ConflictException(
                  `the ID #${createTeamDto._id} is already used`,
                ),
            )
          : throwError(() => new UnprocessableEntityException(e.message)),
      ),
      map((personCreated) => new TeamEntity(personCreated)),
    );
  }

  findAll() {
    return this._teamDao.find().pipe(
      filter(Boolean),
      map((player) => (player || []).map((player) => new TeamEntity(player)))
    )
  }

  findOne(id: string) {
    return this._teamDao.findById(id).pipe(
      catchError((e) =>
        throwError(() => new UnprocessableEntityException(e.message)),
      ),
      mergeMap((person) =>
        !!person
          ? of(new TeamEntity(person))
          : throwError(
              () => new NotFoundException(`Player #${id} doesn't exist`),
            ),
      ),
    );
  }

  update(id: string, updateTeamDto: UpdateTeamDto) {
    return this._teamDao.update(id, updateTeamDto).pipe(
      catchError((e) =>
        throwError(() => new UnprocessableEntityException(e.message)),
      ),
      mergeMap((personUpdated) =>
        !!personUpdated
          ? of(new TeamEntity(personUpdated))
          : throwError(
              () => new NotFoundException(`Player #${id} doesn't exist`),
            ),
      ),
    );
  }

  remove(id: string) {
    return this._teamDao.remove(id).pipe(
      catchError((e) =>
        throwError(() => new UnprocessableEntityException(e.message)),
      ),
      mergeMap((person) =>
        !!person
          ? of(new TeamEntity(person))
          : throwError(
              () => new NotFoundException(`Player #${id} doesn't exist`),
            ),
      ),
    );
  }
}
