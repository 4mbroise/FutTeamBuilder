import { Component, Inject, OnInit, Optional } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Team } from '../types/team.type';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  /**
   * Component constructor
   */
   constructor(private _dialogRef: MatDialogRef<DialogComponent, Team>, @Optional() @Inject(MAT_DIALOG_DATA) private _team: Team) {
  }

  /**
   * Returns team passed in dialog open
   */
  get team(): Team {
    return this._team;
  }

  /**
   * OnInit implementation
   */
  ngOnInit(): void {
  }

  /**
   * Function to cancel the process and close the modal
   */
  onCancel(): void {
    this._dialogRef.close();
  }

  /**
   * Function to close the modal and send team to parent
   */
  onSave(team: Team): void {
    this._dialogRef.close(team);
  }


}
