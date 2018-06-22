import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material';

import { DialogDeleteComponent } from './../../shared/dialogs';


@Component({
  selector: 'app-todos-item',
  templateUrl: './todos-item.component.html',
  styleUrls: ['./todos-item.component.css']
})
export class TodosItemComponent implements OnInit {

  @Input() public todoInfo;
  @Output() public toggleEvent = new EventEmitter()
  @Output() public deleteEvent = new EventEmitter()

  constructor(public dialog: MatDialog) {}

  ngOnInit() { }

  public onToggle() {
    this.toggleEvent.emit(this.todoInfo);
  }

  public openDialogForDeleting() {
    let dialogRef = this.dialog.open(DialogDeleteComponent, {
      width: '250px',
      data: { title: 'Delete todo' }
    });
    dialogRef.afterClosed().subscribe(result => {
      let answer = result;
      if (answer === true ) {
        this.deleteEvent.emit(this.todoInfo);
      }
    });
  }

}
