import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from '@app/services/account.service';
import { first } from 'rxjs/operators';


@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  title = 'departmentStore';
  constructor(private accountservice: AccountService, private router: Router) {

  }

  login(email, pwd) {
    // this.router.navigate(['/account/login']);
    this.accountservice.login(email, pwd)
      .pipe(first())
      .subscribe({
        next: () => {
          console.log('Done');

        },
        error: error => {
          console.log(error);
        }
      });

  }
  ngOnInit() {
  }

}
