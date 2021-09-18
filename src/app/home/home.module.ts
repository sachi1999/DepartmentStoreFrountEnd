import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeRoutingModule } from './home-routing.module';

import { NavComponent } from './shared/nav/nav.component';
import { CartItemComponent } from './shopping-cart/cart/cart-item/cart-item.component';
import { CartComponent } from './shopping-cart/cart/cart.component';
import { FilterComponent } from './shopping-cart/filter/filter.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { ShoppingItemComponent } from './shopping-cart/shopping/shopping-item/shopping-item.component';
import { ShoppingComponent } from './shopping-cart/shopping/shopping.component';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        HomeRoutingModule,
        CommonModule,
    ],
    declarations: [
        FilterComponent,
        ShoppingCartComponent,
        ShoppingComponent,
        ShoppingItemComponent,
        CartItemComponent,
CartComponent,
    ],
   
})
export class Homemodule { };

