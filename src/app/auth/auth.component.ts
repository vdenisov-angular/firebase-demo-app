import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router, Event, NavigationEnd } from '@angular/router';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

import { AuthService } from './../core/services';


@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit, OnDestroy {

  public authorized = this.authService.checkAuth();
  private authSubscription;

  public authType = undefined;
  public title = undefined;
  public isSubmitting = false;
  public authForm: FormGroup;

  private subscription;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private authService: AuthService,
  ) {
    this.authForm = this.fb.group({
      'email': ['', Validators.required],
      'password': ['', Validators.required]
    });
  }

  ngOnInit() {
    this.subscription = this.route.url.subscribe(data => {
      this.authType = data[data.length - 1].path;
      this.title = (this.authType === 'login') ? 'Sign in' : 'Sign up';
      if (this.authType === 'register') {
        this.authForm.addControl('username', new FormControl());
      }
    });
    this.authSubscription = this.authService.authValue
      .subscribe((nextValue) => {
        this.authorized = nextValue;
      });
  }

  submitForm() {
    this.isSubmitting = true;
    const credentials = this.authForm.value;
    console.log('credentials -> ', credentials);
    let result = null;

    switch (this.authType) {
      case 'login':
        result = this.authService.signIn(credentials);
        break;
      case 'register':
        result = this.authService.signUp(credentials);
        break;
    }

    console.log('\nresult -> ',
      result || '\n\n!!! PRESS "Sign in" BUTTON AGAIN !!!' +
      '\n\nAND LOOK TO RESULT');

    if (this.authorized) {
      this.router.navigateByUrl('/');
    } else {
      console.log('Unauthorized');
    }

  }

















  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
