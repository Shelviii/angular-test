import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../../../app/database/database.service';
import { Category } from '../../../app/database/enum/product.enum';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'admin-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
})
export class AdminCategoryComponent implements OnInit {
  data: Category[] = [];
  toggleAdd: boolean = false;
  constructor(private dataService: DatabaseService) {}
  createCate: FormGroup<any> = new FormGroup<any>({
    category: new FormControl(),
  });
  ngOnInit(): void {
    this.dataService.getCategory().subscribe((res) => {
      this.data = res;
    });
  }

  toAdd() {
    this.toggleAdd = !this.toggleAdd;
  }

  postCategory(category: FormGroup) {
    const data = category.value['category'];
    if (data) {
      this.dataService.createCategory(category).subscribe((res) => {
        if (res.status == 200) {
          alert('Data Created Successfully!');
          window.location.reload()
        } else {
          alert('Something went wrong');
        }
      });
    } else {
      alert('กรุณากรอกข้อมูลก่อน submit');
    }
  }
}
