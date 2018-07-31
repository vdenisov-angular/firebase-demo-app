import { Component, OnInit } from '@angular/core';
import { TodosService } from './../core/services';


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
    var x = this.todosService.getAllTodos();
    x.valueChanges().subscribe(todos => {
      console.log('todos = ', todos);
    });
  }

  public addTodo(todo) {
    this.todosService.createOneTodo(todo)
      .subscribe(data => {
        this.todos.push(data);
      });
  }

  public toggleTodo(todo) {
    this.todosService.toggleTodo(todo)
      .subscribe(data => {
        console.log(data);
      });
  }

  public deleteTodo(todo) {
    this.todosService.deleteOneTodo(todo)
      .subscribe(data => {
        this.todos = this.todos.filter(el => el.id !== todo.id);
      });
  }

}
