import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {Action, Store} from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import * as UserActions from './user.action';
import * as AppActions from '../../../store/app.action';
import {UsersService} from '../../../services/users.service';
import {User} from '../../../interfaces/user';
import UserState from './user.state';
import {mapTo, tap} from 'rxjs/internal/operators';

@Injectable()
export class UserEffects {
  constructor(private userService: UsersService, private action$: Actions, private store: Store<UserState>) {}

  GetUsers$: Observable<Action> = createEffect(() =>
    this.action$.pipe(
      ofType(UserActions.GetUserAction),
      mergeMap(action =>
          this.userService.getUsers().pipe(
            map((data: User[]) => {
              return UserActions.SuccessGetUserAction({ payload: data });
            }),
            catchError((error: Error) => {
              return of(UserActions.ErrorUserAction(error));
            })
          )
      )),
    { dispatch: true }
  );

  UpdateUser$: Observable<Action> = createEffect(() =>
      this.action$.pipe(
        ofType(UserActions.UpdateUserAction),
        mergeMap(action =>
          this.userService.updateUser(action.payload.id, action.payload).pipe(
            map(() => {
              return UserActions.SuccessUpdateUserAction();
            }),
            catchError((error: Error) => {
              return of(UserActions.ErrorUserAction(error));
            })
          )
        )
      )
  );

  SuccesUpdate$: Observable<Action> = createEffect(() =>
    this.action$.pipe(
      ofType(UserActions.SuccessUpdateUserAction),
      tap(() => console.log('Success done'))
    ),
    { dispatch: false }
  );
}
