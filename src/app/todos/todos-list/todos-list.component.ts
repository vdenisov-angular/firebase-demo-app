import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todos-list',
  templateUrl: './todos-list.component.html',
  styleUrls: ['./todos-list.component.css']
})
export class TodosListComponent implements OnInit {

  @Input() public todos;

  @Output() toggleEvent = new EventEmitter();
  @Output() updateEvent = new EventEmitter();
  @Output() deleteEvent = new EventEmitter();

  constructor() { }

  ngOnInit() { }

  public toggleTodo(todo) {
    this.toggleEvent.emit(todo);
  }

  public updateTodo(todo) {
    this.updateEvent.emit(todo);
  }

  public deleteTodo(todo) {
    this.deleteEvent.emit(todo);
  }

}
