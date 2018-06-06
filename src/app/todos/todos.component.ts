import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  public todos = [
    {
      title: 'AAA',
      isCompleted: false,
    },
    {
      title: 'BBB',
      isCompleted: false,
    },
    {
      title: 'CCC',
      isCompleted: false,
    }
  ]

  constructor() { }

  ngOnInit() { }

  public addTodo(todo) {
    this.todos.push(todo);
  }

  public toggleTodo(todo) {
    todo.isCompleted = !todo.isCompleted;
  }

  public deleteTodo(todo) {
    let index = this.todos.indexOf(todo);
    if (index > -1) {
      this.todos.splice(index, 1);
    }
  }

}
