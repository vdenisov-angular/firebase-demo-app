import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Http } from '@angular/http';

import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';


/* TODO: how to add ?

import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
import { catchError } from 'rxjs/operators/catchError';
*/


@Injectable()
export class ApiService {

  // public apiLink = 'http://5b19a15483b6190014ca39f0.mockapi.io';
  public apiLink = 'http://localhost:3000';

  constructor(
    private http: Http,
  ) { }

  public get(path) {
    return this.http.get(`${this.apiLink}/${path}`)
      .pipe(map(response => response.json()));
  }

  public post(path, data) {
    return this.http.post(`${this.apiLink}/${path}`, data)
      .pipe(map(response => response.json()));
  }

  public put(path, id, updates) {
    return this.http.put(`${this.apiLink}/${path}/${id}`, updates);
  }

  public delete(path, id) {
    return this.http.delete(`${this.apiLink}/${path}/${id}`);
  }

}
