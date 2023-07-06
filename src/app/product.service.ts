import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  items: number = 0;
  constructor() {}

  insertItems(value: number): void {
    this.items += value;
  }

  getItems(): number {
    return this.items;
  }
}
