import { Component } from '@angular/core';
import { AuthService } from './core/services';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title = 'app';

  constructor(public auth: AuthService) {}
}
