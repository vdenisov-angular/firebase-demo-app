import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { ApiService } from './api.service';
import { LocalStorageService } from './local-storage.service';


@Injectable()
export class TodosService {

  constructor(
    private apiService: ApiService,
    private localStorageService: LocalStorageService,
  ) { }

  public getAllTodos() {
    return this.apiService.get('todos');
  }

  public createOneTodo(todo) {
    return this.apiService.post('todos', todo);
  }

  public toggleTodo(todo) {
    todo.isCompleted = !todo.isCompleted;
    return this.apiService.put('todos', todo.id, todo);
  }

  public deleteOneTodo(todo) {
    return this.apiService.delete('todos', todo.id);
  }

}
