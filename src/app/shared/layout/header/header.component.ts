import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material';

import { LocalStorageService } from '../../../core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public authorized;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private localStorage: LocalStorageService,
    public dialog: MatDialog,
  ) { }

  ngOnInit() {
    this.authorized = this.localStorage.read('auth') || false;
  }

  openHomePage() {
    // this.router.navigate(['/']);
    this.router.navigate( ['/'], {relativeTo: this.route} );
  }

  ////////////////// IF NOT AUTHORIZED //////////////////////////

  signIn() {
    console.log('sign in !');
    this.authorized = this.localStorage.write('auth', true);
  }

  signUp() {
    console.log('sign up !');
    this.authorized = this.localStorage.write('auth', true);
  }

  ////////////////// IF AUTHORIZED //////////////////////////

  openTodosPage() {
    // this.router.navigate(['/todos']);
    this.router.navigate( ['/todos'], {relativeTo: this.route} );
  }

  openProfilePage() {
    console.log('open profile !');
  }

  signOut() {
    console.log('sign out !');
    this.openHomePage();
    this.authorized = this.localStorage.write('auth', false);
  }

  /////////////////////////////////////////////////////////////

}
