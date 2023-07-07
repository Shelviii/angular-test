import { Injectable } from '@angular/core';
import { Product } from './database/enum/product.enum';

export interface InCart {
  items: number;
  data: Product[];
  checkedId: number[];
}
@Injectable({
  providedIn: 'root',
})
export class ProductService {
  items: number = 0;
  inCart: Product[] = [];
  checkdId: number[] = [];
  constructor() {
    const local:any = localStorage.getItem('inCartData')
    const json:InCart = JSON.parse(local)
    if(local){
      this.checkdId = json.checkedId
      this.inCart = json.data
      this.items = json.items
    }
  }

  insertItems(value: number): void {
    this.items += value;
  }

  dataToCart(data: Product):InCart {
    const checked:boolean = this.checkdId.includes(data.id_product)
    if(!checked){
      this.checkdId.push(data.id_product)
      this.inCart.push(data)
    }
    const res:InCart = {
      items: this.items,
      data: this.inCart,
      checkedId: this.checkdId,
    }
    return res
  }

  getItems(): InCart {
    const res: InCart = {
      items: this.items,
      data: this.inCart,
      checkedId: this.checkdId,
    };
    return res;
  }
}
