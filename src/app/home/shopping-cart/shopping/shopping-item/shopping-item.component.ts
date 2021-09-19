import { Component, OnInit, Input } from '@angular/core';
import { Product } from '@app/home/models/product';
import { ShoppingCartService } from '@app/services/shoppingCart.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-shopping-item',
  templateUrl: './shopping-item.component.html',
  styleUrls: ['./shopping-item.component.scss']
})
export class ShoppingItemComponent implements OnInit {


  @Input() productItem: Product


  constructor(private shoppingCartService: ShoppingCartService) { }
  qty: number = 0;
  disable: boolean = false;
  addText: string = "Add to Cart";

  ngOnInit(): void {
    this.shoppingCartService.getCart().subscribe((cart) => {
      const item = cart.find((c) => {
        return c.lineItem.productId === this.productItem.id
      });
      this.qty = item?.lineItem?.quantity ?? 0;
      if (this.qty >= item?.product?.quantity) {
        this.disable = true;
      } else {
        this.disable = false;
      }
      if (this.qty > 0) {
        this.addText = `${this.qty} item in Cart`;
      } else {
        this.addText = "Add to Cart";
      }
    })
  }

  updateItem(updateQty) {
    this.shoppingCartService.updateShoppingCart(this.productItem.id, this.qty + updateQty)
      .pipe(first())
      .subscribe();
  }
}
