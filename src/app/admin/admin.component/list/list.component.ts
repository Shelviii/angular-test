import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../../../database/database.service';
import { Product } from 'src/app/database/enum/product.enum';

@Component({
  selector: 'admin-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  data: Product[] = [];
  constructor(private db: DatabaseService) {}

  ngOnInit(): void {
    this.db.getProduct().subscribe(
      (response) => {
        this.data = response;
      },
      (error) => {
        console.error(error);
      }
    );
  }
}
