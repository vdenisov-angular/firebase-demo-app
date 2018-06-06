import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-todos-list',
  templateUrl: './todos-list.component.html',
  styleUrls: ['./todos-list.component.css']
})
export class TodosListComponent implements OnInit {

  @Input() public todos;

  constructor() { }

  ngOnInit() {
  }

  public onToggle(todo) {
    todo.isCompleted = !todo.isCompleted;
    console.log('toggle !');
  }у

  public onDelete(todo) {
    this.todos.pop(todo);
    console.log('delete !');
  }

}
