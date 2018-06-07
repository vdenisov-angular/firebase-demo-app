import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

// import { ApiService } from './api.service';
import { LocalStorageService } from './local-storage.service';


@Injectable()
export class TodosService {

  // private _apiLink = 'https://randomuser.me/api';

  public allTodos = [
    {
      title: 'AAA',
      isCompleted: false,
    },
    {
      title: 'BBB',
      isCompleted: false,
    },
    {
      title: 'CCC',
      isCompleted: false,
    }
  ]

  constructor(
    private http: Http,
    private localStorageService: LocalStorageService,
  ) { }

  public getAllTodos() {
    return this.allTodos;
  }

  public createOneTodo(todo) {
    this.allTodos.push(todo);
  }

  public toggleTodo(todo) {
    todo.isCompleted = !todo.isCompleted;
  }

  public deleteOneTodo(todo) {
    let index = this.allTodos.indexOf(todo);
    if (index > -1) {
      this.allTodos.splice(index, 1);
    }
  }

}
