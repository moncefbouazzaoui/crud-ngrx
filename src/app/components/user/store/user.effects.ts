import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import * as UserActions from './user.action';
import {UsersService} from '../../../services/users.service';
import {User} from '../../../interfaces/user';

@Injectable()
export class UserEffects {
  constructor(private userService: UsersService, private action$: Actions) {}

  GetUsers$: Observable<Action> = createEffect(() =>
    this.action$.pipe(
      ofType(UserActions.BeginGetUserAction),
      mergeMap(action =>
        this.userService.getUsers().pipe(
          map((data: User[]) => {
            return UserActions.SuccessGetUserAction({ payload: data });
          }),
          catchError((error: Error) => {
            return of(UserActions.ErrorUserAction(error));
          })
        )
      )
    )
  );
}
