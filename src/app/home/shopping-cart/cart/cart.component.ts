import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  cartItems=[
    {id:1,productId:1,productName:'test1',qty:4,price:100},
    {id:2,productId:2,productName:'test2',qty:5,price:10},
    {id:3,productId:5,productName:'test3',qty:3,price:50},
    {id:4,productId:7,productName:'test4',qty:2,price:100},
  ];

  cartTotal =0
  constructor() { }

  ngOnInit(): void {
    this.cartItems.forEach(item=>{
      this.cartTotal += (item.qty * item.price)
    })
  }

}
