import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/database/enum/product.enum';

@Component({
  selector: 'app-product-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.css'],
})
export class ProductPreviewComponent implements OnInit {
  items: number = 0;
  counter: number = 1;
  data: any;
  constructor() {}

  ngOnInit(): void {
    const data = history.state.data;
    const local = localStorage.getItem('productData');
    if (data) {
      localStorage.setItem('productData', JSON.stringify(data));
      this.data = data;
    } else if (local) {
      this.data = JSON.parse(local);
    }
  }

  addNewItems(value: string) {
    this.items += Number(value);
  }

  increment() {
    this.counter += 1;
  }

  decrement() {
    if (this.counter !== 1) {
      this.counter -= 1;
    } else {
      this.counter = 1;
    }
  }
}
