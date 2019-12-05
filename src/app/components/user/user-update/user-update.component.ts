import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA,  MatDialogRef} from '@angular/material';
import * as UserActions from '../store/user.action';
import UserState from '../store/user.state';
import {Store} from '@ngrx/store';

@Component({
  selector: 'app-user-update',
  templateUrl: './user-update.component.html',
  styleUrls: ['./user-update.component.scss']
})
export class UserUpdateComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<UserUpdateComponent>,
    private store: Store<UserState>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
  }

  saveUser() {
    this.store.dispatch(UserActions.UpdateUserAction( { payload : this.data }));
    this.dialogRef.close();
  }

}

export interface DialogData {
  email: string;
  name: string;
}
