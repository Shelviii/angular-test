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
  isEditing: boolean = false;
  constructor(private dataService: DatabaseService) {}
  createCate: FormGroup<any> = new FormGroup<any>({
    id_category: new FormControl(),
    category: new FormControl(),
  });
  ngOnInit(): void {
    this.dataService.getCategory().subscribe((res) => {
      this.data = res;
    });
  }

  toAdd() {
    this.toggleAdd = !this.toggleAdd;
    if (this.isEditing) {
      this.createCate.setValue({
        id_category: null,
        category: null,
      });
      this.isEditing = false;
    }
  }

  onSubmit(category: FormGroup) {
    const data = category.value['category'];
    if (!this.isEditing) {
      if (data) {
        this.dataService.createCategory(category).subscribe((res) => {
          if (res.status == 200) {
            alert('Data Created Successfully!');
            window.location.reload();
          } else {
            alert('Something went wrong');
          }
        });
      } else {
        alert('กรุณากรอกข้อมูลก่อน submit');
      }
    } else {
      const id = category.value['id_category'];
      this.dataService.editCategory(id, category.value).subscribe((res) => {
        if (res.status == 200) {
          alert('Data Created Successfully!');
          window.location.reload();
        } else {
          alert('Something went wrong');
        }
      });
    }
  }

  editAction(val: Category) {
    this.createCate.setValue({
      id_category: val.id_category,
      category: val.category,
    });
    this.toggleAdd = true;
    this.isEditing = true;
  }

  deleteAction(val: Category) {
    val.active = false;
    const con = confirm('คุณต้องการลบหมวดหมู่นี้ ใช่ หรือ ไม่');
    if (con) {
      this.dataService
        .editCategory(val.id_category, val)
        .subscribe((res) => {
          if(res.status == 200){
            alert('Deleted Successfully')
            window.location.reload()
          }else{
            alert('Something went worng!')
          }
        });
    }
  }
}
