import { IUsers, IUser } from './../interfaces/user';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import {API_ENDPOINT} from '../config/api.config';

@Injectable({providedIn: 'root'})
export class UsersService {

  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get<IUsers>(API_ENDPOINT.USERS).pipe(
      map(data => data.users)
    );
  }

  getUser(id: number) {
    return this.http.get<IUser>(`${API_ENDPOINT.USERS}/${id}`).pipe(
      map(data => data.user)
    );
  }

  createUser(payload) {
    return this.http.post<IUser>(API_ENDPOINT.USERS, payload).pipe(
      map(data => data.user)
    );
  }

  updateUser(id: number, payload) {
    return this.http.put<IUser>(`${API_ENDPOINT.USERS}/${id}`, payload).pipe(
      map(data => data.user)
    );
  }

  deleteUser(id: number) {
    return this.http.delete(`${API_ENDPOINT.USERS}/${id}`);
  }

}
