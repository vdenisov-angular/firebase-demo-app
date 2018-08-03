import { Component, OnInit } from '@angular/core';
import { TodosService } from './../core/services';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  public todos = [];

  constructor(
    private todosService: TodosService
  ) { }

  ngOnInit() {
    this.todosService.getAllTodos()
      .snapshotChanges().pipe(
        map(changes =>
          changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
        )
    )
    .subscribe(data => {
      this.todos = data;
      console.log('todos = ', this.todos);
    });
    // this.todosService.getAllTodos()
    //   .subscribe(data => {
    //     this.todos = data;
    //     console.log('todos = ', this.todos);
    //     console.log('todos[0].$key = ', this.todos[0].$key);
    //     console.log('todos[0].key = ', this.todos[0].key);
    // });
  }

  public addTodo(todo) {
    console.log('new todo = ', todo);
    this.todosService.createOneTodo(todo);
  }

  public toggleTodo(todo) {
    this.todosService.toggleTodo(todo)

  }

  public deleteTodo(todo) {
    this.todosService.deleteOneTodo(todo);
      // .subscribe(data => {
      //   this.todos = this.todos.filter(el => el.id !== todo.id);
      // });
  }

}
