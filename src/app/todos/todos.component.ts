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
      completed: false,
    },
    {
      title: 'BBB',
      description: 'bbbbbbbbbbbbbbbbbbbbbbbbbbbbbb',
      completed: false,
    },
    {
      title: 'CCC',
      description: 'cccccccccccccccccccccccccccccc',
      completed: false,
    }
  ]

  constructor() { }

  ngOnInit() { }

}
