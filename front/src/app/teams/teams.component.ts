import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { environment } from 'src/environments/environment';
import { DialogComponent } from '../shared/dialog/dialog.component';
import { filter, map, mergeMap, Observable } from 'rxjs';
import { Team } from '../shared/types/team.type';
import { TeamsService } from '../shared/services/teams.service';
import { PageEvent } from '@angular/material/paginator';
import { Player } from '../shared/types/player.type';

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
    // private property to store a page number
    private _page:number = 0;


  /**
   * Component constructor
   */
    constructor(private _http: HttpClient, private _dialog: MatDialog, private _teamsService : TeamsService) {
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
      return this._teams.slice(0+8*this._page, 8*(this._page+1));
    }

  get page(): number{
    return this._page
  }

  get length(): number{
    return this._teams.length
  }

  handlePageEvent(pageEvent: PageEvent) {
    this._page = pageEvent.pageIndex;
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
    this._teamsDialog = this._dialog.open(DialogComponent, {
      width: '500px',
      disableClose: true,
    });

    // subscribe to afterClosed observable to set dialog status and do process
    this._teamsDialog
      .afterClosed()
      .pipe(
        filter((team: Team | undefined) => !!team),
        map((team: Team | undefined) => {

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
