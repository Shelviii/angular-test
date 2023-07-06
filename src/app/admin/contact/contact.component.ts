import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/database/enum/product.enum';

@Component({
  selector: 'admin-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class AdminContactComponent implements OnInit {
  data: any[] = [];
  constructor() {}

  ngOnInit(): void {}

  editAction(val: Category) {
    
  }
}
