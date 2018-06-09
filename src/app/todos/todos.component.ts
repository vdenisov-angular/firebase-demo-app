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
    this.todosService.getAllTodos()
      .subscribe(data => {
        this.todos = data;
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
