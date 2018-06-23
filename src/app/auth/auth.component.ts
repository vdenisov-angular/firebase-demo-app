import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Event, NavigationEnd } from '@angular/router';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  public authType = undefined;
  public title = undefined;
  public isSubmitting = false;
  public authForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
  ) {
    this.authForm = this.fb.group({
      'email': ['', Validators.required],
      'password': ['', Validators.required]
    });
  }

  ngOnInit() {    
    this.route.url.subscribe(data => {
      // Get the last piece of the URL (it's either 'login' or 'register')
      this.authType = data[data.length - 1].path;
      // Set a title for the page accordingly
      this.title = (this.authType === 'login') ? 'Sign in' : 'Sign up';
      // add form control for username if this is the register page
      if (this.authType === 'register') {
        this.authForm.addControl('username', new FormControl());
      }
    });
    
  }

  submitForm() {
    this.isSubmitting = true;

    const credentials = this.authForm.value;
    console.log('form data = ', credentials);
  }

}
