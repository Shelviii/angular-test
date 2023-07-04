import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../../../database/database.service';

interface product {
  idProduct: number;
  title: string;
  price: number;
  category: number;
}

@Component({
  selector: 'admin-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  data: product[] = [
    { idProduct: 1, title: 'Product1', price: 2000, category: 1 },
    { idProduct: 2, title: 'Product2', price: 3000, category: 2 },
    { idProduct: 3, title: 'Product3', price: 4000, category: 3 },
    { idProduct: 4, title: 'Product4', price: 5000, category: 2 },
    { idProduct: 5, title: 'Product5', price: 6000, category: 1 },
  ];
  constructor(private dataService: DatabaseService) {}

  ngOnInit(): void {
  //  const data = this.dataService.fetchData()
  //  console.log(data);
   
  }
}
