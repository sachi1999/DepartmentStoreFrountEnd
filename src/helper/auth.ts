import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { getCookie } from './Cookie';

@Injectable({ providedIn: 'root' })
export class Auth implements CanActivate {
    constructor(
        private router: Router,
    ) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if (getCookie("getCookie")) {
            return true;
        }

        this.router.navigate(['/Account/login'], { queryParams: { returnUrl: state.url }});
        return false;
    }
}