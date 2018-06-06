import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-todos-list',
  templateUrl: './todos-list.component.html',
  styleUrls: ['./todos-list.component.css']
})
export class TodosListComponent implements OnInit {

  @Input() public todos;

  constructor() { }

  ngOnInit() { }

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
