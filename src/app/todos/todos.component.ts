import { Component, OnInit } from '@angular/core';
import { TodosService, AuthService } from './../core/services';

import { map } from 'rxjs/operators';
import { Todo } from './todo.type';


@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  public todos = [];
  public user;

  constructor(
    private todosService: TodosService,
    private authService: AuthService
  ) {
    // this.authService.getUser().then(user => {
    //   this.uid = user.uid;
    //   console.log('user uid = ', this.uid);
    // });
    this.authService.userSub$.subscribe(user => {
      this.user = user;
    })
  }

  ngOnInit() {
    this.todosService.getAllTodos(this.user.uid)
      // .valueChanges()
      .snapshotChanges()
      .pipe(
        map(changes =>
          changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
        )
      )
      .subscribe(data => {
        this.todos = data;
        console.log('todos = ', this.todos);
      });
  }

  public addTodo(title: string) {
    this.todosService.createOneTodo(this.user.uid, title);
  }

  public toggleTodo(todo: Todo) {
    this.todosService.toggleTodo(todo)
  }

  public deleteTodo(todo: Todo) {
    this.todosService.deleteOneTodo(todo);
  }

}
