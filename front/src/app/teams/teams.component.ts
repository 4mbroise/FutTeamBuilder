import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { environment } from 'src/environments/environment';
import { DialogComponent } from '../shared/dialog/dialog.component';
import { filter, map, mergeMap, Observable } from 'rxjs';
import { Team } from '../shared/types/team.type';
import { TeamsService } from '../shared/services/teams.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {

    // private property to store players value
  private _teams: Team[];
  // private property to store all backend URLs
  private readonly _backendURL: any;
    // private property to store dialogStatus value
    private _dialogStatus: string;
    // private property to store dialog reference
    private _teamsDialog: MatDialogRef<DialogComponent, Team> | undefined;
 


  /**
   * Component constructor
   */
    constructor(private _router: Router, private _dialog: MatDialog, private _teamsService : TeamsService) {
    this._teams = [];
    this._backendURL = {};
    this._dialogStatus = 'inactive';

    // build backend base url
    let baseUrl = `${environment.backend.protocol}://${environment.backend.host}`;
    if (environment.backend.port) {
      baseUrl += `:${environment.backend.port}`;
    }

    // build all backend urls
    // @ts-ignore
    Object.keys(environment.backend.endpoints).forEach(k => this._backendURL[ k ] = `${baseUrl}${environment.backend.endpoints[ k ]}`);
  }


    /**
   * Returns private property _teams
   */
    get teams(): Team[] {
      return this._teams;
    }


  /**
   * OnInit implementation
   */
  ngOnInit(): void {
    this._teamsService
    .fetch()
    .subscribe({ next: (teams: Team[]) => this._teams = teams });
  }

  /**
   * Returns private property _dialogStatus
   */
  get dialogStatus(): string {
    return this._dialogStatus;
  }

  /**
   * Function to delete one team
   */
  delete(team: Team): void {
    console.log("delete a marché");
    this._teamsService
      .delete(team._id as string)
      .subscribe((id: string) => this._teams = this._teams.filter((t: Team) => t._id !== id));
  }

  /**
   * Function to display modal
   */
  showDialog(): void {
    // set dialog status
    this._dialogStatus = 'active';

    // open modal
    this._teamsDialog = this._dialog.open(DialogComponent,
    {
      maxHeight: "100% !important",
      maxWidth: "100% !important",
      width: "100%",
      height: "100%",
    });

    // subscribe to afterClosed observable to set dialog status and do process
    this._teamsDialog.afterClosed()
      .pipe(
        filter((team: Team | undefined) => !!team),
        map((team: Team | undefined) => {
          // delete obsolete attributes in original object which are not required in the API
          delete team?._id;

          return team;
        }),
        mergeMap((team: Team | undefined) => this._add(team))
      )
      .subscribe({
        next: (team: Team) => (this._teams = this._teams.concat(team)),
        error: () => (this._dialogStatus = 'inactive'),
        complete: () => (this._dialogStatus = 'inactive'),
      });
  }

  /**
   * Add new team
   */
  private _add(team: Team | undefined): Observable<Team> {
    return this._teamsService
    .create(team as Team)
  }

}
