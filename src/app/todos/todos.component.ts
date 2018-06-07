import { Component, OnInit } from '@angular/core';
import { TodosService } from './../core';


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
    this.todos = this.todosService.getAllTodos();
  }

  public addTodo(todo) {
    this.todosService.createOneTodo(todo);
  }

  public toggleTodo(todo) {
    this.todosService.toggleTodo(todo);
  }

  public deleteTodo(todo) {
    this.todosService.deleteOneTodo(todo);
  }

}
