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
    { path: '/', label: 'Начало' },
    { path: '/auth/login', label: 'Войти' },
    { path: '/auth/register', label: 'Регистрация' },
  ];

  public authLinks = [
    { path: '/', label: 'Начало', isActive: true },
    { path: '/todos', label: 'Задачи' },
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
