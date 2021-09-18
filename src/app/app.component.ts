import { Component } from '@angular/core';
import { User } from '../app/account/models/user';

@Component({ selector: 'app-root', templateUrl: 'app.component.html' })
export class AppComponent {
  user: User;s
  title: any;

  constructor() {
  }
}