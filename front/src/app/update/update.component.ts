import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { DialogComponent } from '../shared/dialog/dialog.component';
import { environment } from '../../environments/environment';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { filter, map, mergeMap, Observable } from 'rxjs';
import { Team } from '../shared/types/team.type';
import { TeamsService } from '../shared/services/teams.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  // private property to store dialog reference
  private _teamDialog: MatDialogRef<DialogComponent, Team> | undefined;

  /**
    * Component constructor
    */
  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _dialog: MatDialog,
    private _service : TeamsService
  ) {
  }

  /**
    * OnInit implementation
    */
  ngOnInit(): void {
    this._route.params
      .pipe(
        map((params: any) => params.id),
        mergeMap((id: string) => this._service.fetchOne(id))
      )
      .subscribe((team: Team) => this._initModal(team));
  }


  
  /**
    * Initialize modal process
    */
  private _initModal(team: Team): void {
    // create modal with initial data inside
    this._teamDialog = this._dialog.open(DialogComponent, {
      width: '100%',
      height: '100%',
      disableClose: true,
      data: team,
    });
    
    // subscribe to afterClosed observable to set dialog status and do process
    this._teamDialog.afterClosed()
      .pipe(
        filter((team: Team | undefined) => !!team),
        map((team: Team | undefined) => {
          // get team id
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


  
}




