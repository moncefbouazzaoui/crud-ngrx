import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {Action, Store} from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import * as AppActions from './app.action';

import * as UserActions from '../components/user/store/user.action';
import AppState from './app.state';
import {tap} from 'rxjs/operators';
import {mapTo, switchMap} from 'rxjs/internal/operators';

@Injectable()
export class AppEffects {
  constructor(private action$: Actions, private store: Store<AppState>) {}

  LoadingEnds$: Observable<Action> = createEffect(() =>
    this.action$.pipe(
      ofType(UserActions.SuccessGetUserAction),
      mapTo(AppActions.EndLoadingAction())
    )
  );

  LoadingStarts$: Observable<Action> = createEffect(() =>
    this.action$.pipe(
      ofType(UserActions.GetUserAction),
      mapTo(AppActions.StartLoadingAction())
    )
  );
}
