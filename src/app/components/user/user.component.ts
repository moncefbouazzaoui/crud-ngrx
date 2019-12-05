import { Component, OnInit } from '@angular/core';
import {UsersService} from '../../services/users.service';
import {IUser, IUsers, User} from '../../interfaces/user';
import { select, Store } from '@ngrx/store';
import {Observable, Subscription} from 'rxjs';
import UserState from './store/user.state';
import {getUsers} from './store/user.selector';
import * as UserActions from './store/user.action';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {UserUpdateComponent} from './user-update/user-update.component';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  users: User[];
  user$: Observable<User[]>;

  constructor(
    private userService: UsersService,
    private store: Store<UserState>,
    public dialog: MatDialog
  ) {
    this.user$ = this.store.pipe(select(getUsers));
  }

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this.store.dispatch(UserActions.GetUserAction());
  }

  openDialog(user: any): void {
    const dialogRef = this.dialog.open(UserUpdateComponent, {
      width: '350px',
      data: user
    });

    dialogRef.updatePosition({top: '20%'});
  }

  ngOnDestroy() {}

}
