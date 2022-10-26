import { CdkDrag, CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
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

  private _striker: Player[] = [ ]
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

  teamName: string = "Fst FC"

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

    /** Predicate function that only allows even numbers to be dropped into a list. */


  drop(event: CdkDragDrop<Player[]>) {
    if (event.previousContainer === event.container) {
        moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      if(event.container.data.length != 1){
        transferArrayItem(
          event.previousContainer.data,
          event.container.data,
          event.previousIndex,
          event.currentIndex,
        );
      }
    }
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

      console.log(this._model)

      this._model.name = this.teamName;
      this._model.striker = this.striker[0]._id;
      this._model.leftForward = this.leftForward[0]._id;
      this._model.rightForward = this.rightForward[0]._id;
      this._model.centerMiddle1 = this.centerMiddle1[0]._id;
      this._model.centerMiddle2 = this.centerMiddle2[0]._id;
      this._model.centerMiddle3 = this.centerMiddle3[0]._id;
      this._model.leftBack = this.leftBack[0]._id;
      this._model.centerBack1 = this.centerBack1[0]._id;
      this._model.centerBack2 = this.centerBack2[0]._id;
      this._model.rightBack = this.rightBack[0]._id;
      this._model.goalKeeper = this.goalKeeper[0]._id;

      console.log(this._model)
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

    get allPlayerProvided(): boolean{
      let sum = this.striker.length + this.leftForward.length + this.rightForward.length + this.centerMiddle1.length + this.centerMiddle2.length + this.centerMiddle3.length + this.leftBack.length + this.centerBack1.length + this.centerBack2.length + this.rightBack.length + this.goalKeeper.length;
      if( sum == 11){
        return false;
      }

      return true;
    }


}
