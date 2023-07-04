import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  thumbnail: string[] = [
    'https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg',
    'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg',
    'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg',
    'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg',
    'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg',
    'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg',
    'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-6.jpg',
    'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-7.jpg',
    'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-8.jpg',
    'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-9.jpg',
    'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-10.jpg',
    'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-11.jpg'

  ];
  items: number = 0;

  constructor() {}

  ngOnInit(): void {}

  addNewItems(value:string) {
    this.items += Number(value);
  }
}
