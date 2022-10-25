import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { filter, merge, mergeMap, Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { PlayersService } from '../shared/services/players.service';
import { TeamsService } from '../shared/services/teams.service';
import { Player } from '../shared/types/player.type';
import { Team } from '../shared/types/team.type';

@Component({
  selector: 'app-team-details',
  templateUrl: './team-details.component.html',
  styleUrls: ['./team-details.component.css']
})
export class TeamDetailsComponent implements OnInit {

  // private property to store team value
  private _team: Team;
  // private property to store all backend URLs
  private readonly _backendURL: any;
  // private property to store flag to know if it's a team
  private _isTeam: boolean;
  //private property to store striker value
  private _striker : Player;

  constructor(private _http: HttpClient, private _teamDetailsService : TeamsService, private playerService : PlayersService, private _route : ActivatedRoute, private _router: Router) {
   this._team = {} as Team;
   this._striker = {} as Player;
   this._isTeam = false;
   this._backendURL = {};

   
   // build backend base url
   let baseUrl = `${environment.backend.protocol}://${environment.backend.host}`;
   if (environment.backend.port) {
     baseUrl += `:${environment.backend.port}`;
   }

   // build all backend urls
   // @ts-ignore
   Object.keys(environment.backend.endpoints).forEach((k: string) => this._backendURL[k] = `${baseUrl}${environment.backend.endpoints[k]}`);
 }


 ngOnInit(): void {

   // this.playerService.fetchOne(this._team.leftForward);

   merge(
    this._route.params.pipe(
      filter((params: any) => !!params._id),
      mergeMap((params: any) => this._teamDetailsService.fetchOne(params._id)),
      tap(() => this._isTeam = true)
    )
  )
    .subscribe({
      next: (team: Team) => this._team = team,
      error: () => {
        this._isTeam = true;
      }
    });
    this.playerService.fetchOne(this._team.striker).subscribe({next : ( player : Player) => this._striker = player});
 }

 get striker(): Player{
  return this._striker;
 }

}
