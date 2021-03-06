import { Component, OnInit } from '@angular/core';
import { TodosService, AuthService } from './../core/services';
import { ITodo } from './todo.type';


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
    this.todosService
      .getUserTodos(this.user.uid)
      // .getAllTodos()
      .subscribe(data => {
        this.todos = data;
        console.log('uid = ', this.user.uid);
        console.log('todos = ', this.todos);
      });
  }

  public addTodo(title: string) {
    this.todosService.createOneTodo(this.user.uid, title);
  }

  public toggleTodo(todo: ITodo) {
    this.todosService.toggleOneTodo(todo)
  }

  public updateTodo(todo: ITodo) {
    this.todosService.updateOneTodo(todo)
  }

  public deleteTodo(todo: ITodo) {
    this.todosService.deleteOneTodo(todo);
  }

}
