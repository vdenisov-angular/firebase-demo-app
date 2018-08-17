import { Injectable } from '@angular/core';
import {
  AngularFireDatabase,
  AngularFireList,
} from 'angularfire2/database';

import { ApiService } from './api.service';
import { AuthService } from './auth.service';

import { ITodo, Todo } from './../../todos/todo.type';


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

  public createOneTodo(uid: string, title: string) {
    const pushId = this.fireDB.createPushId();
    const todo = new Todo(uid, title);

    const element = { ...todo, _id: pushId };
    this.todosRef.set(element._id, element);
  }

  public toggleTodo(todo: ITodo) {
    todo.isCompleted = !todo.isCompleted;
    this.todosRef.update(todo._id, todo);
    // return this.apiService.put('todos', todo);
  }

  public deleteOneTodo(todo: ITodo) {
    this.todosRef.remove(todo._id);
    // return this.apiService.delete('todos', todo);
  }

}
