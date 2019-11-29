import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {API_ENDPOINT} from '../config/api.config';

@Injectable({
  providedIn: 'root',
})

export class SharedService {

  constructor(private http: HttpClient) {
  }

  getProfileByUsername(username): Observable<any> {
    return this.http.get(API_ENDPOINT.github_profile + username);
  }

  getshortenerLink(username): Observable<any> {
    return this.http.get(API_ENDPOINT.shortener_link + username);
  }
}
