import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../../../app/database/enum/product.enum';
import { Router } from '@angular/router';
import { InCart, ProductService } from 'src/app/product.service';

interface MenuType {
  title: string;
  path: string;
}
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  @Input() itemsInCart: number = 0;
  inCartData: Product[] = [];
  menuBar: MenuType[] = [
    { title: 'หน้าแรก', path: '/' },
    { title: 'สินค้าทั้งหมด', path: '/product' },
    { title: 'หมวดหมู่สินค้า', path: '/category' },
    { title: 'ติดต่อเรา', path: '/contact' },
  ];

  constructor(private router: Router, private productService: ProductService) {}

  ngOnInit(): void {
    const product: InCart = this.productService.getItems();
    this.itemsInCart = product.items;
    const local: any = localStorage.getItem('inCartData');
    const json = JSON.parse(local);
    const { items, data } = json;
    if(product.items != items){
      this.itemsInCart = items
    }
  }

  navigate() {
    this.router.navigate(['cart']);
  }
}
