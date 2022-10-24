import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { PlayersService } from '../shared/services/players.service';
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
constructor(private _router: Router, private _playerService: PlayersService) {
  this._players = [];
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
  this._playerService
    .fetchAll()
    .subscribe( { next: (player: Player[]) => this._players = player} )
  console.log("players = "+this.players)
}

}
