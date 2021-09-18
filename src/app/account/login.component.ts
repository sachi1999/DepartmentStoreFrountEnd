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
            this.router.navigate(['/home']); 
            return;
          }
          this.errMsg = data.errMsg;
        },
        error => {
         
         //   this.alertService.error(error);
         //   this.loading = false;
        
      });

  }
  ngOnInit() {
  }

}
