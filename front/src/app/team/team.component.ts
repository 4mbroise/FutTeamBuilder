import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { TeamsService } from '../shared/services/teams.service';
import { Team } from '../shared/types/team.type';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {

  // private property to store person value
  private _team: Team;
  // private property to store all backend URLs
  private readonly _backendURL: any;

  constructor(private _teamService : TeamsService) {
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

  /**
  * Returns private property _team
  */
   get team(): Team {
     return this._team;
   }

 ngOnInit(): void {
     this._teamService
     .fetchOne(this._team._id).subscribe({ next: (team : Team) => this._team = team });
 }

}
