import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material';

import { LocalStorageService } from '../../../core';

import { AuthLoginComponent } from './../../dialogs';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public authorized;

  public navLinks: Object[] = [
    { label: 'Home', path: '/' },
    { label: 'Todos', path: '/todos' },
  ];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private localStorage: LocalStorageService,
    public dialog: MatDialog,
  ) { }

  ngOnInit() {
    this.authorized = this.localStorage.read('auth') || false;
  }

  ////////////////// TOOLBAR BUTTONS //////////////////////////

  signIn() {
    let dialogRef = this.dialog.open(AuthLoginComponent, {
      width: '250px',
      data: { title: 'Log In' }
    });
    dialogRef.afterClosed().subscribe(result => {
      let answer = result;
      if (answer === true ) {
        console.log('sign in !');
        this.authorized = this.localStorage.write('auth', true);
      }
    });
  }

  signUp() {
    console.log('sign up !');
    this.authorized = this.localStorage.write('auth', true);
  }

  signOut() {
    console.log('sign out !');
    this.router.navigate( ['/'], {relativeTo: this.route} );
    this.authorized = this.localStorage.write('auth', false);
  }

  openProfile() {
    console.log('open profile !');
  }

  /////////////////////////////////////////////////////////////

  openHomePage() {
    // this.router.navigate(['/']);
    this.router.navigate( ['/'], {relativeTo: this.route} );
  }

  openTodosPage() {
    // this.router.navigate(['/todos']);
    this.router.navigate( ['/todos'], {relativeTo: this.route} );
  }

}
