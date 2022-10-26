import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { DialogComponent } from '../shared/dialog/dialog.component';
import { environment } from '../../environments/environment';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { filter, map, mergeMap, Observable } from 'rxjs';
import { Team } from '../shared/types/team.type';
import { TeamsService } from '../shared/services/teams.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  // private property to store all backend URLs
  private readonly _backendURL: any;
  // private property to store dialog reference
  private _teamDialog: MatDialogRef<DialogComponent, Team> | undefined;

  /**
    * Component constructor
    */
  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _http: HttpClient,
    private _dialog: MatDialog,
    private _service : TeamsService
  ) {
    this._backendURL = {};

    // build backend base url
    let baseUrl = `${environment.backend.protocol}://${environment.backend.host}`;
    if (environment.backend.port) {
      baseUrl += `:${environment.backend.port}`;
    }

    // build all backend urls
    // @ts-ignore
    Object.keys(environment.backend.endpoints).forEach(
      (k) =>
        (this._backendURL[k] = `${baseUrl}${
          environment.backend.endpoints[
            k as keyof typeof environment.backend.endpoints
          ]
        }`)
    );
  }

  /**
    * OnInit implementation
    */
  ngOnInit(): void {
    this._route.params
      .pipe(
        map((params: any) => params.id),
        mergeMap((id: string) => this._fetchOne(id))
      )
      .subscribe((team: Team) => this._initModal(team));
  }


  
  /**
    * Initialize modal process
    */
  private _initModal(team: Team): void {
    // create modal with initial data inside
    this._teamDialog = this._dialog.open(DialogComponent, {
      width: '500px',
      disableClose: true,
      data: team,
    });
    
    // subscribe to afterClosed observable to set dialog status and do process
    this._teamDialog.afterClosed()
      .pipe(
        filter((team: Team | undefined) => !!team),
        map((team: Team | undefined) => {
          // get recipe id
          const id = team?._id;
          // delete obsolete attributes in original object which are not required in the API
          delete team?._id
          return { id, update: team };
        }),
        mergeMap((_: { id: any, update: any }) => this._service.update(_.id, _.update))
      )
      .subscribe({
          error: () => this._router.navigate(['/teams']),
          complete: () => this._router.navigate(['/teams'])
        }
      );
  }


  /**
    * Returns an observable which fetch one team by id
    */
  private _fetchOne(id: string): Observable<Team> {
    return this._http.get<Team>(
      this._backendURL.oneTeam.replace(':id', id)
    );
  }


}
