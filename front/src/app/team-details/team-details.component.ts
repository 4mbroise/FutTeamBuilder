import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { PlayersService } from '../shared/services/players.service';
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

  constructor(private _http: HttpClient, private _teamDetailsService : PlayersService) {
   this._team = {} as Team;
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
   this._http.get<Team[]>(this._backendURL.allTeams)
     .subscribe({ next: (teams: Team[]) => this._team = teams[0] });
 }

 get striker(): Observable<Player>{
  return this._teamDetailsService.fetchOne(this._team.striker);
 }

}
