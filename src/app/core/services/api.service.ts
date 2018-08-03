import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import {
  AngularFireDatabase,
  AngularFireList,
} from 'angularfire2/database';


@Injectable()
export class ApiService {

  // public apiLink = 'http://5b19a15483b6190014ca39f0.mockapi.io';
  // public apiLink = 'http://localhost:3000';

  dataRef: AngularFireList<any>;

  constructor(
    private http: Http,
    private fireDB: AngularFireDatabase
  ) {}

  public get(path) {
    this.dataRef = this.fireDB.list(path);
    return this.dataRef;

    // return this.http.get(`${this.apiLink}/${path}`)
    //   .pipe(map(response => response.json()));
  }

  public post(path, data) {
    this.dataRef = this.fireDB.list(path);
    this.dataRef.push(data);

    // return this.http.post(`${this.apiLink}/${path}`, data)
    //   .pipe(map(response => response.json()));
  }

  public put(path, data) {
    this.dataRef = this.fireDB.list(path);
    this.dataRef.update(data.key, data);

    // return this.http.put(`${this.apiLink}/${path}/${id}`, updates)
    //   .pipe(map(response => response.json()));
  }

  public delete(path, data) {
    this.dataRef = this.fireDB.list(path);
    this.dataRef.remove(data.key);

    // return this.http.delete(`${this.apiLink}/${path}/${id}`)
    //   .pipe(map(response => response.json()));
  }

}
