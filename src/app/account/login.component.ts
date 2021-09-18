import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from '@app/services/account.service';
import { first } from 'rxjs/operators';
import { setCookie } from 'src/helper/Cookie';


@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  title = 'departmentStore';
  errMsg: string = "";
  constructor(private accountservice: AccountService, private router: Router) {

  }

  login(email, pwd) {
    if (!email)
    {
      this.errMsg = "Please enter email address"
      return;
    }
    if (!pwd)
    {
      this.errMsg = "Please enter password"
      return;
    }
    this.accountservice.login(email, pwd)
    .pipe(first())
    .subscribe(
        (data:any) => {
          if (data.status === 200) 
          {
            // Change it to jwt authentication if i get time later
            setCookie("auth", JSON.stringify(data.user), 1);
            this.router.navigate(['/home']); 
            return;
          }
          this.errMsg = data.errMsg;
        },
        error => {
          this.errMsg = "Somthing went wrong please try later"
        
      });

  }
  ngOnInit() {
  }

}
