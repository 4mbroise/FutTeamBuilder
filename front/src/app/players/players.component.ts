import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Player } from '../shared/types/player.type';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {

// private property to store players value
private _players: Player[];
// private property to store all backend URLs
private readonly _backendURL: any;

/**
 * Component constructor
 */
constructor(private _http: HttpClient) {
  this._players = [];
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
get players(): Player[] {
  return this._players;
}

/**
 * OnInit implementation
 */
ngOnInit(): void {
  this._http.get<Player[]>(this._backendURL.allPeople)
    .subscribe({ next: (players: Player[]) => this._players = players });
}

}
