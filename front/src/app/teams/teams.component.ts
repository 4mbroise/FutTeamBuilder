import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Team } from '../shared/types/team.type';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {

    // private property to store players value
  private _teams: Team[];
  // private property to store all backend URLs
  private readonly _backendURL: any;
 
  /**
   * Component constructor
   */
   constructor(private _http: HttpClient) {
    this._teams = [{name:'Liverpool'} as Team];
    this._backendURL = {};

    // build backend base url
    let baseUrl = `${environment.backend.protocol}://${environment.backend.host}`;
    if (environment.backend.port) {
      baseUrl += `:${environment.backend.port}`;
    }

    // build all backend urls
    // @ts-ignore
    Object.keys(environment.backend.endpoints).forEach(k => this._backendURL[ k ] = `${baseUrl}${environment.backend.endpoints[ k ]}`);
  }

  /**
   * Returns private property _people
   */
  get teams(): Team[] {
    return this._teams;
  }

  /**
   * OnInit implementation
   */
  ngOnInit(): void {
    this._http.get<Team[]>(this._backendURL.allTeams)
      .subscribe({ next: (teams: Team[]) => this._teams = teams });
  }

}
