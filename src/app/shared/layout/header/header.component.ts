import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material';

import { AuthService } from '../../../core/services';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public authorized;
  // public pressed = 'Home';

  private authSubscription;

  public navLinks = [
    { path: '/', label: 'Home' },
    { path: '/auth/login', label: 'Sign In' },
    { path: '/auth/register', label: 'Sign Up' },
  ];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private authService: AuthService,
    public dialog: MatDialog,
  ) { }

  ngOnInit() {
    this.authSubscription = this.authService.authValue
      .subscribe((nextValue) => {
        this.authorized = nextValue;
      });
  }

  openHomePage() {
    // this.activateButton('Home');
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
    this.activateButton('Todos');
    this.router.navigateByUrl('/todos');
  }

  userActions() {
    //
  }

  openProfilePage() {
    this.router.navigateByUrl('/profile');
    // this.pressed = '';
  }

  signOut() {
    this.authService.signOut();
    this.openHomePage();
  }

  /////////////////////////////////////////////////////////////

  activateButton(title) {
    // this.pressed = title;
  }

}
