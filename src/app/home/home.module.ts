import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { NavComponent } from './shared/nav/nav.component';
import { CartItemComponent } from './shopping-cart/cart/cart-item/cart-item.component';
import { CartComponent } from './shopping-cart/cart/cart.component';
import { FilterComponent } from './shopping-cart/filter/filter.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { ShoppingItemComponent } from './shopping-cart/shopping/shopping-item/shopping-item.component';
import { ShoppingComponent } from './shopping-cart/shopping/shopping.component';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule
    ],
    declarations: [
        NavComponent,
        ShoppingCartComponent,
        CartComponent,
        CartItemComponent,
        FilterComponent,
        ShoppingComponent,
        ShoppingItemComponent
    ],
   
})
export class Homemodule { };

