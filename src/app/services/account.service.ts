import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from '@environments/environment';
import { User } from '../account/models/user';

@Injectable({ providedIn: 'root' })
export class AccountService {
   private userSubject: BehaviorSubject<User>;
    public user: Observable<User>;

    constructor(
        private router: Router,
        private http: HttpClient
    ) {
        this.userSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('user')));
        this.user = this.userSubject.asObservable();
    }

    public get userValue(): User {
        return this.userSubject.value;
    }

    login(emailId, pwd) {
        console.log("Login user");
        return this.http.post<User>(`${environment.apiUrl}/api/v1/Auth/Login`, { emailId, pwd })
            .pipe(map(user => {
                return user;
            }));
    }

    register(user: User) {

        console.log("register working");
        return this.http.post(`${environment.apiUrl}/api/v1/Account/Register`, user);
    }
}