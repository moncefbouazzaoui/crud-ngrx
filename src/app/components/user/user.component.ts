import { Component, OnInit } from '@angular/core';
import {UsersService} from '../../services/users.service';
import {IUser, IUsers, User} from '../../interfaces/user';
import { select, Store } from '@ngrx/store';
import {Observable, Subscription} from 'rxjs';
import UserState from './store/user.state';
import { getUsers } from './store/user.selector';
import {map} from 'rxjs/operators';
import * as UserActions from './store/user.action';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  users: User[];
  user$: Observable<User[]>;
  UserSubscription: Subscription;
  usersList: User[];
  Title: string = '';
  IsCompleted: boolean = false;
  userError: Error;

  constructor(private userService: UsersService, private store: Store<UserState>) {
    this.user$ = store.pipe(select(getUsers));
  }

  ngOnInit() {
    this.store.dispatch(UserActions.BeginGetUserAction());
  }

  /*getUsers() {
    this.userService.getUsers().subscribe((users) => {
      this.users = users;
    });
  }*/

  ngOnDestroy() {
    this.UserSubscription.unsubscribe();
  }

}
