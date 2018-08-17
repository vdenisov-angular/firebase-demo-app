import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

import {
  AngularFireDatabase,
  AngularFireList,
} from 'angularfire2/database';
import { AuthService } from './auth.service';

import { Todo } from './../../todos/todo.type';


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

  public getAllTodos() {
    return this.todosRef.valueChanges();
  }

  public getUserTodos(uid) {
    // return this.apiService.get('todos');

    const query = this.fireDB.list('/todos',
      ref => ref.orderByChild('uid').equalTo(uid)
    );
    return query.valueChanges();
  }

  public createOneTodo(uid, title) {
    const pushId = this.fireDB.createPushId();
    const todo = new Todo(uid, title);

    const element = { ...todo, id: pushId };
    this.todosRef.set(element.id, element);
  }

  public toggleTodo(todo) {
    todo.isCompleted = !todo.isCompleted;
    this.todosRef.update(todo.id, todo);
    // return this.apiService.put('todos', todo);
  }

  public deleteOneTodo(todo) {
    this.todosRef.remove(todo.id);
    // return this.apiService.delete('todos', todo);
  }

}
