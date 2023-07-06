import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DatabaseService } from '../../../app/database/database.service';
import { Category } from '../../../app/database/enum/product.enum';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/product.service';

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
  @Input() cart: number = 0;
  menuBar: MenuType[] = [
    { title: 'หน้าแรก', path: '/' },
    { title: 'สินค้าทั้งหมด', path: '/product' },
    { title: 'หมวดหมู่สินค้า', path: '/category' },
    { title: 'ติดต่อเรา', path: '/contact' },
  ];
  category: Category[] = [];
  toggleCate: boolean = false;

  constructor(private router: Router, private productService: ProductService) {}

  ngOnInit(): void {console.log(this.cart,'menu');
  }
  
  getItem() {
    const data = this.productService.getItems();
    this.cart = data;
  }
  navigate() {
    this.router.navigate(['cart']);
  }
}
