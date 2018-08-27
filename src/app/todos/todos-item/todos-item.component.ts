import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material';

import { DialogDeleteComponent } from './../../shared/dialogs';


@Component({
  selector: 'app-todos-item',
  templateUrl: './todos-item.component.html',
  styleUrls: ['./todos-item.component.css']
})
export class TodosItemComponent implements OnInit {

  public newTitle = '';
  public isEdit = false;

  @Input() public todoInfo;
  @Output() public toggleEvent = new EventEmitter()
  @Output() public updateEvent = new EventEmitter()
  @Output() public deleteEvent = new EventEmitter()

  constructor(public dialog: MatDialog) {}

  ngOnInit() { }

  public onStartEdit() {
    this.isEdit = true;
  }

  public onFinishEdit() {
    this.isEdit = false;
  }

  public onUpdate() {
    if (this.newTitle.length) {
      this.todoInfo.title = this.newTitle;
      this.updateEvent.emit(this.todoInfo);
      this.onFinishEdit();
      this.newTitle = '';
    }
  }

  public onToggle() {
    this.toggleEvent.emit(this.todoInfo);
  }

  public openDialogForDeleting() {
    const dialogRef = this.dialog.open(DialogDeleteComponent, {
      width: '250px',
      data: { title: 'Удалить задачу?' }
    });
    dialogRef.afterClosed().subscribe(result => {
      const answer = result;
      if (answer === true ) {
        this.deleteEvent.emit(this.todoInfo);
      }
    });
  }

}
