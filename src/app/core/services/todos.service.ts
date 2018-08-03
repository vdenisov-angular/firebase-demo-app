import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

import {
  AngularFireDatabase,
  AngularFireList,
} from 'angularfire2/database';


@Injectable()
export class TodosService {

  public todosRef: AngularFireList<any>;
  // todosRef: AngularFireObject<any[]>;

  constructor(
    // private apiService: ApiService,
    private fireDB: AngularFireDatabase
  ) {
    this.todosRef = this.fireDB.list('todos');
  }

  public getAllTodos() {
    return this.todosRef;
    // return this.apiService.get('todos');
  }

  public createOneTodo(todo) {
    this.todosRef.push(todo);
    // return this.apiService.post('todos', todo);
  }

  public toggleTodo(todo) {
    todo.isCompleted = !todo.isCompleted;
    this.todosRef.update(todo.key, todo);
    // return this.apiService.put('todos', todo);
  }

  public deleteOneTodo(todo) {
    this.todosRef.remove(todo.key);
    // return this.apiService.delete('todos', todo);
  }

}
