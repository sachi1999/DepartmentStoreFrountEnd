import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AccountService } from '@app/services/account.service';
import { first } from 'rxjs/operators';

import { User } from './models/user';

@Component({
  templateUrl: 'register.component.html',
  styleUrls: ['register.component.scss']
})
export class RegisterComponent implements OnInit {

  form: FormGroup;
    loading = false;
    submitted = false;

    constructor(
        private accountservice: AccountService,
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
    ) { }

    ngOnInit() {
        this.form = this.formBuilder.group({
            firstName: ['', Validators.required],
            lastName: ['', Validators.required],
            emailId: ['', Validators.required],
            pwd: ['', [Validators.required, Validators.minLength(6)]]
        });

        console.log(this);
    }

  get f() { return this.form.controls; }

  onSubmit(): void {
    

    
    
    this.accountservice.register(this.form.value)

    .pipe(first())
            .subscribe({
                next: () => {
                    
                },
                error: error => {
                    
                }
            });

  
  }

 
}
