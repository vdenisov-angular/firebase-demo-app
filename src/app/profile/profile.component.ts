import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase/app';

import { AuthService } from '../core/services';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  public user: firebase.User;
  public isEdit = false;

  public userName = 'loading...';
  public userEmail = 'loading...';

  constructor(private authService: AuthService) {
    this.authService.userSub$.subscribe((user: firebase.User) => {
      if (user != null) {
        this.user = user;
        this.userName = this.user.displayName;
        this.userEmail = this.user.email;
      }
    });
  }

  ngOnInit() { }

  onToggleEdit() {
    this.isEdit = !this.isEdit;
  }

  onSave() {
    this.user
      .updateProfile({
        displayName: this.userName,
        photoURL: 'undefinded'
      })
      .then(() => {
        this.onToggleEdit();
        console.log('profile updated');
      })
      .catch(error => console.log('error'));
  }

}
