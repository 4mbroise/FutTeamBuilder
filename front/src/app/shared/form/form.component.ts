import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { EmailValidator, FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
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
  // private property to store form value
  private readonly _form: FormGroup;


  /**
   * Component constructor
   */
  constructor() {
    this._model = {} as Team;
    this._isUpdateMode = false;
    this._submit$ = new EventEmitter<Team>();
    this._cancel$ = new EventEmitter<void>();
    this._form = this._buildForm();
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
   * Returns private property _form
   */
   get form(): FormGroup {
    return this._form;
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
        _id:this._model._id,
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
        this._isUpdateMode = false;
      };
      // update form's values with model
    this._form.patchValue(this._model);
    }
    
  /**
   * Function to emit event to cancel process
   */
  cancel(): void {
    this._cancel$.emit();
  }

  /**
   * Function to emit event to submit form and team
   */
  submit(team: Team): void {
    console.log("azezaezae "+this._model._id)
    this._submit$.emit(team);
  }

  /**
   * Function to build our form
   */
   private _buildForm(): FormGroup {
    return new FormGroup({
      id: new FormControl(),
      name: new FormControl(),
      striker: new FormControl(),
      leftForward: new FormControl(),
      rightForward: new FormControl(),
      centerMiddle1: new FormControl(),
      centerMiddle2: new FormControl(),
      centerMiddle3: new FormControl(),
      leftBack: new FormControl(),
      centerBack1: new FormControl(),
      centerBack2: new FormControl(),
      rightBack: new FormControl(),
      goalKeeper : new FormControl(),
    });
  }
}
  
