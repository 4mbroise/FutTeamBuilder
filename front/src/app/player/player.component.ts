import { Component, OnInit } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Player } from '../shared/types/player.type';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {
   // private property to store person value
   private _player: Player;
   // private property to store all backend URLs
   private readonly _backendURL: any;

   constructor(private _http: HttpClient) {
    this._player = {} as Player;
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
   * Returns private property _person
   */
    get player(): Player {
      return this._player;
    }

  ngOnInit(): void {
    this._http.get<Player[]>(this._backendURL.allPlayers)
      .subscribe({ next: (players: Player[]) => this._player = players[0] });
  }

}
