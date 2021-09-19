import { Component, OnInit } from '@angular/core';
import { Product } from '@app/home/models/product';

import { ProductService } from '@app/services/product.service';

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.scss']
})
export class ShoppingComponent implements OnInit {

  productList: Product[] = []

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe((products) => {
      this.productList = products;
    });
  }

}
