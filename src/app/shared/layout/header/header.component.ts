import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';

import { AuthService } from '../../../core/services';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public authorized = null;
  public user;

  public notAuthLinks = [
    { path: '/', label: 'Home' },
    { path: '/auth/login', label: 'Sign In' },
    { path: '/auth/register', label: 'Sign Up' },
  ];

  public authLinks = [
    { path: '/', label: 'Home', isActive: true },
    { path: '/todos', label: 'Todos' },
  ];

  constructor(
    private router: Router,
    private authService: AuthService,
    public dialog: MatDialog,
  ) {
    this.authService.userSub$
      .subscribe(user => this.user = user);
    this.authService.authenticated$
      .subscribe(isAuth => this.authorized = isAuth);
  }

  ngOnInit() {
    //
  }

  openHomePage() {
    this.router.navigateByUrl('/');
  }

  ////////////////// IF NOT AUTHORIZED //////////////////////////

  signIn() {
    this.router.navigateByUrl('/auth/login');
  }

  signUp() {
    this.router.navigateByUrl('/auth/register');
  }

  ////////////////// IF AUTHORIZED //////////////////////////

  openTodosPage() {
    this.router.navigateByUrl('/todos');
  }

  openProfilePage() {
    this.router.navigateByUrl('/profile');
  }

  signOut() {
    this.authService.signOut();
    this.openHomePage();
  }

}
