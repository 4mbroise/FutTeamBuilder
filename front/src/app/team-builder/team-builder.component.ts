import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { Component, EventEmitter, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { PlayersService } from '../shared/services/players.service';
import { Player } from '../shared/types/player.type';
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

  private _striker: Player[] = []
  private _leftForward: Player[] = []
  private _rightForward: Player[] = []
  private _centerMiddle1: Player[] = []
  private _centerMiddle2: Player[] = []
  private _centerMiddle3: Player[] = []
  private _leftBack: Player[] = []
  private _centerBack1: Player[] = []
  private _centerBack2: Player[] = []
  private _rightBack: Player[] = []
  private _goalKeeper: Player[] = []

  private _players: Player[];


  items = Array.from({length: 100000}).map((_, i) => `Item #${i}`);

  constructor(private _playerService: PlayersService) {
    this._players = [];
    this._model = {} as Team;
    this._submit$ = new EventEmitter<Team>();
    this._cancel$ = new EventEmitter<void>();
   }
  ngOnChanges(changes: SimpleChanges): void {
    throw new Error('Method not implemented.');
  }

  ngOnInit(): void {
    this._playerService
    .fetchAll()
    .subscribe( { next: (player: Player[]) => this._players = player} )
  }

    drop(event: CdkDragDrop<string[]>) {
      
    }
    
    get players(): Player[]{
      return this._players;
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

    get striker(): Player[]{
      return this._striker;
    }
    get leftForward(): Player[]{
      return this._leftForward
    }
    get rightForward(): Player[]{
      return this._rightForward
    }
    get centerMiddle1(): Player[]{
      return this._centerMiddle1
    }
    get centerMiddle2(): Player[]{
      return this._centerMiddle2
    }
    get centerMiddle3(): Player[]{
      return this._centerMiddle3
    }
    get leftBack(): Player[]{
      return this._leftBack
    }
    get centerBack1(): Player[]{
      return this._centerBack1
    }
    get centerBack2(): Player[]{
      return this._centerBack2
    }
    get rightBack(): Player[]{
      return this._rightBack
    }
    get goalKeeper(): Player[]{
      return this._goalKeeper
    }


}
