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
      'password': ['', Validators.required]
    });
  }

  ngOnInit() {
    // TODO: не могу подписаться на изменения
    // this.route.url.subscribe(data => {
    //   console.log('data = ', data);
    // });
    
    this.router.events.subscribe((event: Event) => {

      if(event instanceof NavigationEnd ){
        let url = event.url;
        this.authType = url.split('/')[2];
        console.log(this.authType);
      }

      switch(this.authType) {
        case 'login': {
          this.title = 'Sign in';
          this.authForm.addControl('email', new FormControl());
          break;
        }
        case 'register': {
          this.title = 'Sign up';
          this.authForm.addControl('username', new FormControl());
          this.authForm.addControl('email', new FormControl());
          break;
        }
        case 'reset': {
          this.title = 'Reset pass';
          this.authForm.addControl('newPass', new FormControl());
          break;
        }
      }

    });

  }

  submitForm() {
    this.isSubmitting = true;

    const credentials = this.authForm.value;
    console.log('form data = ', credentials);
  }

}
