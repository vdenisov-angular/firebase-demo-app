import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';

import { AuthService } from '../../../core/services';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() public authorized;

  public notAuthLinks = [
    { path: '/', label: 'Home' },
    { path: '/auth/login', label: 'Sign In' },
    { path: '/auth/register', label: 'Sign Up' },
  ];

  public authLinks = [
    { path: '/', label: 'Home' },
    { path: '/todos', label: 'Todos' },
  ];

  constructor(
    private router: Router,
    private authService: AuthService,
    public dialog: MatDialog,
  ) {
    this.authService.authValue
      .subscribe((nextValue) => {
        this.authorized = nextValue;
      });
  }

  ngOnInit() {
    this.authService.checkUserAuth()
      .then(auth => this.authorized = auth);
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
