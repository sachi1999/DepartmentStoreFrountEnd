import { Component, OnInit,Input } from '@angular/core';
import { product } from '@app/home/models/product';

@Component({
  selector: 'app-shopping-item',
  templateUrl: './shopping-item.component.html',
  styleUrls: ['./shopping-item.component.scss']
})
export class ShoppingItemComponent implements OnInit {


 @Input() productItem:product

  constructor() { }

  ngOnInit(): void {
  }

}
