import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Team } from '../types/team.type';

@Component({
  selector: 'app-team-card',
  templateUrl: './team-card.component.html',
  styleUrls: ['./team-card.component.css']
})
export class TeamCardComponent implements OnInit {

    // private property to store team value
    private _team: Team;
    // private property to store delete$ value
    private readonly _delete$: EventEmitter<Team>;
  
    /**
     * Component constructor
     */
    constructor(private _route : ActivatedRoute, private _router: Router) {
      this._team = {} as Team;
      this._delete$ = new EventEmitter<Team>();
    }
  
    /**
     * Returns private property _team
     */
    get team(): Team {
      return this._team;
    }
  
    /**
     * Sets private property _team
     */
    @Input()
    set team(team: Team) {
      this._team = team;
    }
  
    /**
     * Returns private property _delete$
     */
    @Output('deletePerson') get delete$(): EventEmitter<Team> {
      return this._delete$;
    }
  
    /**
     * OnInit implementation
     */
    ngOnInit(): void {
    }
  
    /**
     * Function to emit event to delete current person
     */
    delete(team: Team): void {
      this._delete$.emit(team);
    }

    showSetails() : void {
      this._router.navigate(['/teamDetails/']);
    }

}
