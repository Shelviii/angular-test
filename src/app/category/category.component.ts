import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../database/database.service';
import { Category } from '../database/enum/product.enum';
import { Router } from '@angular/router';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
})
export class CategoryComponent implements OnInit {
  data: Category[] = [];
  constructor(private dataService: DatabaseService, private router: Router) {}

  ngOnInit(): void {
    this.dataService.getCategory().subscribe((res) => {
      this.data = res;
    });
  }

  navigateToProduct(id: number) {
    this.dataService.getProductByType(id).subscribe((res) => {
      this.router.navigate(['/product', id], { state: { data: res } });
    });
  }
}
