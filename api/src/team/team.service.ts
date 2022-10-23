import { ConflictException, Inject, Injectable, UnprocessableEntityException } from '@nestjs/common';
import { catchError, map, mergeMap, of, throwError } from 'rxjs';
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

    return this._teamDao.save(createTeamDto);
  }

  findAll() {
    return `This action returns all team`;
  }

  findOne(id: number) {
    return `This action returns a #${id} team`;
  }

  update(id: number, updateTeamDto: UpdateTeamDto) {
    return `This action updates a #${id} team`;
  }

  remove(id: number) {
    return `This action removes a #${id} team`;
  }
}
