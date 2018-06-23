import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material';

import { LocalStorageService } from '../../../core/services';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public authorized;
  public pressed = 'Home';

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
    this.activateButton('Home');
    this.router.navigateByUrl('/');
    // this.router.navigate(['/']);
    // this.router.navigate( ['/'], {relativeTo: this.route} );
  }

  ////////////////// IF NOT AUTHORIZED //////////////////////////

  signIn() {
    this.activateButton('Sign In');
    this.router.navigateByUrl('/auth/login');
  }

  signUp() {
    this.activateButton('Sign Up');
    this.router.navigateByUrl('/auth/register');
  }

  ////////////////// IF AUTHORIZED //////////////////////////

  openTodosPage() {
    this.router.navigateByUrl('/todos');
  }

  openProfilePage() {
    console.log('open profile !');
  }

  signOut() {
    this.openHomePage();
  }

  /////////////////////////////////////////////////////////////

  activateButton(title) {
    this.pressed = title;
  }

}
