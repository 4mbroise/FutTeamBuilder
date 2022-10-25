import { Component, EventEmitter, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Team } from '../shared/types/team.type';

@Component({
  selector: 'team-builder',
  templateUrl: './team-builder.component.html',
  styleUrls: ['./team-builder.component.css']
})
export class TeamBuilderComponent implements OnInit, OnChanges {

    // private property to store cancel$ value
    private readonly _cancel$: EventEmitter<void>;
    // private property to store model value
    private _model: Team;
    // private property to store submit$ value
    private readonly _submit$: EventEmitter<Team>;


  constructor() {
    this._model = {} as Team;
    this._submit$ = new EventEmitter<Team>();
    this._cancel$ = new EventEmitter<void>();
   }
  ngOnChanges(changes: SimpleChanges): void {
    throw new Error('Method not implemented.');
  }

  ngOnInit(): void {

  }

    /**
   * Returns private property _cancel$
   */
     @Output('cancel')
     get cancel$(): EventEmitter<void> {
       return this._cancel$;
     }
   
     /**
      * Returns private property _submit$
      */
     @Output('submit')
     get submit$(): EventEmitter<Team> {
       return this._submit$;
     }

    /**
   * Function to emit event to cancel process
   */
     cancel(): void {
      this._cancel$.emit();
    }
  
    /**
     * Function to emit event to submit form and person
     */
    submit(): void {
      this._submit$.emit(this._model);
    }

}
