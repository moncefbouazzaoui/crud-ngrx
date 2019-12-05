import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {select, Store} from '@ngrx/store';
import {isLoading} from '../../../store/app.selector';
import AppState from '../../../store/app.state';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isLoading$: Observable<AppState>;
  constructor(private store: Store<AppState>) {
    this.isLoading$ = this.store.pipe(select(isLoading));
  }

  ngOnInit() {
  }

}
