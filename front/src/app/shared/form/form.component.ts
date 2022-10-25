import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { Team } from '../types/team.type';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})


export class FormComponent implements OnInit, OnChanges {
  // private property to store update mode flag
  private _isUpdateMode: boolean;
  // private property to store model value
  private _model: Team;
  // private property to store cancel$ value
  private readonly _cancel$: EventEmitter<void>;
  // private property to store submit$ value
  private readonly _submit$: EventEmitter<Team>;

  /**
   * Component constructor
   */
  constructor() {
    this._model = {} as Team;
    this._isUpdateMode = false;
    this._submit$ = new EventEmitter<Team>();
    this._cancel$ = new EventEmitter<void>();
  }

  /**
   * Sets private property _model
   */
  @Input()
  set model(model: Team) {
    this._model = model;
  }

  /**
   * Returns private property _model
   */
  get model(): Team {
    return this._model;
  }

  /**
   * Returns private property _isUpdateMode
   */
  get isUpdateMode(): boolean {
    return this._isUpdateMode;
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
   * OnInit implementation
   */
  ngOnInit(): void {
  }

  /**
   * Function to handle component update
   */
  ngOnChanges(record: any): void {
    if (record.model && record.model.currentValue) {
      this._model = record.model.currentValue;
      this._isUpdateMode = true;
    } else {
      this._model = {
        _id : '',
        striker: '',
        leftForward: '',
        rightForward: '',
        centerMiddle1: '',
        centerMiddle2: '',
        centerMiddle3: '',
        leftBack: '',
        centerBack1: '',
        centerBack2: '',
        rightBack: '',
        goalKeeper: '',
        name: '' ,
        }
      };
      this._isUpdateMode = false;
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
  
