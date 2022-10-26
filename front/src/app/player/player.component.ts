import { Component, OnInit } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Player } from '../shared/types/player.type';
import { PlayersService } from '../shared/services/players.service';

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

   constructor(private _playerService : PlayersService) {
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
      this._playerService
      .fetchOne(this._player._id).subscribe({ next: (player : Player) => this._player = player });
  }

}
