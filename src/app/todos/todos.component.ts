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
      description: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
      isCompleted: false,
    },
    {
      title: 'BBB',
      description: 'bbbbbbbbbbbbbbbbbbbbbbbbbbbbbb',
      isCompleted: false,
    },
    {
      title: 'CCC',
      description: 'cccccccccccccccccccccccccccccc',
      isCompleted: false,
    }
  ]

  constructor() { }

  ngOnInit() { }

}
