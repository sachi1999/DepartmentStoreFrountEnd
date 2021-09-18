import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './account/login.component';
import { ShoppingCartComponent } from './home/shopping-cart/shopping-cart.component';




const Homemodule = () => import('./home/home.module').then(x => x.Homemodule);
const AccountModule = () => import('./account/account.module').then(x => x.AccountModule);
// replace LoginComponent with home comp after implemanting Home component 

const routes: Routes = [
    { path: '', component: LoginComponent },
    { path: 'account', loadChildren: AccountModule },
    { path: 'home', component: ShoppingCartComponent, },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }