import { Component, OnInit } from '@angular/core';
import { ShoppingCart } from '@app/home/models/shoppingCart';
import { ShoppingCartService } from '@app/services/shoppingCart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cartItems = [];
  cartTotal = 0
  
  constructor(private cart: ShoppingCartService) { }

  ngOnInit(): void {
    this.cart.getCart().subscribe((cart: ShoppingCart[]) => {
      this.cartItems = cart;
      this.cartTotal = cart.reduce((total, item) => {
        return total + (item.product.price * item.lineItem.quantity);
      }, 0)
    });
  }
}
