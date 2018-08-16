import { Component, OnInit } from '@angular/core';
import { TodosService, AuthService } from './../core/services';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  public todos = [];
  public uid;

  constructor(
    private todosService: TodosService,
    private authService: AuthService
  ) {
    this.authService.getUser().then(user => {
      this.uid = user.uid;
      console.log('user uid = ', this.uid);
    });
  }

  ngOnInit() {
    this.todosService.getAllTodos(this.uid).valueChanges()
      // .snapshotChanges().pipe(
      //   map(changes =>
      //     changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
      //   )
      // )
      .subscribe(data => {
        this.todos = data;
        console.log('todos = ', this.todos);
      });
  }

  public addTodo(todo) {
    todo.uid = this.uid;
    console.log('new todo = ', todo);
    this.todosService.createOneTodo(todo);
  }

  public toggleTodo(todo) {
    this.todosService.toggleTodo(todo)

  }

  public deleteTodo(todo) {
    this.todosService.deleteOneTodo(todo);
  }

}
