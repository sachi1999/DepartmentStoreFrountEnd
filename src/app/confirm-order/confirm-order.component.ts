import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from '@app/services/shoppingCart.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-confirm-order',
  templateUrl: './confirm-order.component.html',
  styleUrls: ['./confirm-order.component.scss']
})
export class ConfirmOrderComponent implements OnInit {
  constructor(private shoppingCartService: ShoppingCartService) { }
  ngOnInit(): void {
    this.shoppingCartService.getShoppingCart()
      .pipe(first())
      .subscribe();
  }

}
