import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../database/database.service';
import { Product } from '../database/enum/product.enum';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  items: number = 0;
  data: Product[] = [];
  counter: number[] = [];
  foundData: boolean = true;

  constructor(
    private dataService: DatabaseService,
    private route: ActivatedRoute,
    private router: Router,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    const dataRoute: Product[] = history.state.data;
    if (id && dataRoute) {
      if (dataRoute.length > 0) {
        this.counter = new Array(dataRoute.length).fill(1);
        this.data = dataRoute;
      } else {
        this.foundData = false;
      }
    } else {
      this.dataService.getProduct().subscribe((res) => {
        this.counter = new Array(res.length).fill(1);
        this.data = res;
      });
    }
  }
  increment(index: number) {
    this.counter[index] += 1;
  }

  decrement(index: number) {
    if (this.counter[index] !== 1) {
      this.counter[index] -= 1;
    } else {
      this.counter[index] = 1;
    }
  }

  toPreview(data: Product) {
    this.router.navigate(['product/preview/', data.id_product], {
      state: { data: data },
    });
  }

  addNewItems(value: string) {
    this.items += Number(value);
  }
}
