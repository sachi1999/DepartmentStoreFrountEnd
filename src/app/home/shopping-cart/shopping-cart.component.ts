import { Component, OnInit } from '@angular/core';
import { ProductService } from '@app/services/product.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
  }

  searchbyCatogery(searchTerm: string) {
    this.productService.searchByCataoger(searchTerm)
      .pipe(first())
      .subscribe();
  }
}
