import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../database/database.service';
import { Product } from '../database/enum/product.enum';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  items: number = 0;
  data: Product[] = [];
  foundData:boolean = true;
  constructor(
    private dataService: DatabaseService,
    private router: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.router.snapshot.paramMap.get('id');
    const dataRoute: Product[] = history.state.data;
    if (id && dataRoute) {
      if (dataRoute.length > 0) {
        this.data = dataRoute;
      }else{
        this.foundData = false
      }
    } else {
      this.dataService.getProduct().subscribe((res) => {
        this.data = res;
      });
    }
  }

  addNewItems(value: string) {
    this.items += Number(value);
  }
}
