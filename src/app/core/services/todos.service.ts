import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

import {
  AngularFireDatabase,
  AngularFireList,
} from 'angularfire2/database';
import { AuthService } from './auth.service';

import { Todo } from '../../todos/todo.type';


@Injectable()
export class TodosService {

  public todosRef: AngularFireList<any>;
  // public todosRef: AngularFireObject<any[]>;

  constructor(
    // private apiService: ApiService,
    private fireDB: AngularFireDatabase,
    private authService: AuthService
  ) {
    this.todosRef = this.fireDB.list('/todos');
  }

  public getAllTodos(uid) {
    const query = this.fireDB.list('/todos',
      ref => ref.orderByChild('uid').equalTo(uid)
    );
    return query;
    // return this.apiService.get('todos');
  }

  public createOneTodo(uid, title) {
    const todo = new Todo(uid, title);
    console.log('new todo -> ', todo);
    this.todosRef.push(todo);
    // return this.apiService.post('todos', todo);
  }

  public toggleTodo(todo: Todo) {
    todo.isCompleted = !todo.isCompleted;
    this.todosRef.update(todo.key, todo);
    // return this.apiService.put('todos', todo);
  }

  public deleteOneTodo(todo: Todo) {
    this.todosRef.remove(todo.key);
    // return this.apiService.delete('todos', todo);
  }

}
