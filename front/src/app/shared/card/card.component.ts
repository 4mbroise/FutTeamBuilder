import { Component, Input, OnInit } from '@angular/core';
import { Player } from '../types/player.type';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  // private property to store person value
  private _player: Player;

  /**
   * Component constructor
   */
  constructor() {
    this._player = {} as Player;
  }

  /**
   * Returns private property _person
   */
  get player(): Player {
    return this._player;
  }

  /**
   * Sets private property _person
   */
  @Input()
  set player(person: Player) {
    this._player = person;
  }

  /**
   * OnInit implementation
   */
  ngOnInit(): void {}

}
