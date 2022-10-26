import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
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
  private _page:number = 0


  /**
   * Component constructor
   */
  constructor(private _router: Router, private _playerService: PlayersService) {
    this._players = [];
  }

  /**
   * Returns private property _players
   */
  get players(): Player[] {
    return this._players.slice(0+8*this._page, 8*(this._page+1));
  }

  get page(): number{
    return this._page
  }

  get length(): number{
    return this._players.length
  }

  handlePageEvent(pageEvent: PageEvent) {
    this._page = pageEvent.pageIndex;
  }


  /**
   * OnInit implementation
   */
  ngOnInit(): void {
    this._playerService
      .fetchAll()
      .subscribe( { next: (player: Player[]) => this._players = player} )
  }

}
