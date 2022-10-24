import { Component, Input, OnInit } from '@angular/core';
import { Team } from '../types/team.type';

@Component({
  selector: 'app-team-card',
  templateUrl: './team-card.component.html',
  styleUrls: ['./team-card.component.css']
})
export class TeamCardComponent implements OnInit {

  // private property to store person value
  private _team: Team;

  /**
   * Component constructor
   */
  constructor() {
    this._team = { name:'Liverpool'} as Team;
  }

  /**
   * Returns private property _person
   */
  get team(): Team {
    return this._team;
  }

  /**
   * Sets private property _person
   */
  @Input()
  set team(team: Team) {
    this._team = team;
  }

  /**
   * OnInit implementation
   */
  ngOnInit(): void {}

}
