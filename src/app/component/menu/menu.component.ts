import { Component, Input, OnInit } from '@angular/core';

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

  constructor() {}

  ngOnInit(): void {}
}
