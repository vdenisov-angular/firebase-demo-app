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

  public authorized;
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

    if (this.authType === 'login') {
      this.authService.signIn(credentials)
        .then( () => this.router.navigateByUrl('/') );
    } else {
      this.authService.signUp(credentials)
        .then( () => this.router.navigateByUrl('/') );
    }

    console.log('this.authorized -> ', this.authorized);
    console.log('checkAll -> ', this.authService.checkAll());
  }

  public handleError(error: any) {
    console.log('\n\n!!! ERROR !!!\n\n', error.message || error);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
