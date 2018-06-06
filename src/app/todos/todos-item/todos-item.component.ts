import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-todos-item',
  templateUrl: './todos-item.component.html',
  styleUrls: ['./todos-item.component.css']
})
export class TodosItemComponent implements OnInit {

  @Input() public todoInfo;
  @Output() public toggleEvent = new EventEmitter()
  @Output() public deleteEvent = new EventEmitter()

  constructor() { }

  ngOnInit() { }

  public onToggle() {
    this.toggleEvent.emit(this.todoInfo);
  }

  public onDelete() {
    this.deleteEvent.emit(this.todoInfo);
  }

}
