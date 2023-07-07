import { Component, OnInit } from '@angular/core';
import { InCart } from '../product.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  data: any[] = [];
  items:number = 0
  constructor() {}

  ngOnInit(): void {
    const local: any = localStorage.getItem('inCartData');
    const json: InCart = JSON.parse(local);
    this.data = json.data;
    this.items = json.items
  }
}
