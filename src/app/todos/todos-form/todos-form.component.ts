import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todos-form',
  templateUrl: './todos-form.component.html',
  styleUrls: ['./todos-form.component.css']
})
export class TodosFormComponent implements OnInit {

  public newTodo = '';

  @Output() addEvent = new EventEmitter();

  constructor() { }

  ngOnInit() {}

  public onAdd() {
    if (this.newTodo.length) {
      const todo = {
        title: this.newTodo,
        isCompleted: false
      };
      this.newTodo = '';
      this.addEvent.emit(todo);
    }
  }

}
