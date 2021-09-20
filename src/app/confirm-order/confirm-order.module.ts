import { CommonModule } from '@angular/common';
import { NO_ERRORS_SCHEMA } from '@angular/compiler';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CartItemComponent } from '@app/home/shopping-cart/cart/cart-item/cart-item.component';
import { CartComponent } from '@app/home/shopping-cart/cart/cart.component';
import { ShoppingCartComponent } from '@app/home/shopping-cart/shopping-cart.component';
import { ShoppingItemComponent } from '@app/home/shopping-cart/shopping/shopping-item/shopping-item.component';
import { ShoppingComponent } from '@app/home/shopping-cart/shopping/shopping.component';
import { ConfirmOrderRoutingmodule } from './confirm-order-routing.model';
import { ConfirmOrderComponent } from './confirm-order.component';


@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        ShoppingCartComponent,
        ShoppingComponent,
        ShoppingItemComponent,
        CartItemComponent,
        CartComponent
    ],
    declarations: [
        ConfirmOrderComponent,
    ],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA
    ],
})

export class ConfirmOrderModule{};