import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../../../../app/database/database.service';
import {
  Category,
  ProductDTO,
  Product,
} from '../../../../app/database/enum/product.enum';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'admin-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
})
export class CreateComponent implements OnInit {
  createProduct: FormGroup<ProductDTO> = new FormGroup<ProductDTO>({
    title: new FormControl(),
    category: new FormControl(),
    price: new FormControl(),
    detail: new FormControl(),
    thumbnail: new FormControl(),
    active: new FormControl(true),
  });
  optionsData: Category[] = [];
  selectedOption: number | null = null;
  isEditing: boolean = false;
  idEdit: number = 0;
  constructor(
    private dataService: DatabaseService,
    private router: ActivatedRoute,
    private route: Router
  ) {}

  ngOnInit(): void {
    const id = this.router.snapshot.paramMap.get('id');
    const data = history.state.data;
    if (id && data) {
      this.idEdit = Number(id);
      this.createProduct.setValue({
        title: data.title,
        category: data.category,
        price: data.price,
        detail: data.detail,
        thumbnail: data.thumbnail,
        active: data.active,
      });
      this.isEditing = true;
    }
    this.dataService.getCategory().subscribe((res) => {
      this.optionsData = res;
    });
  }

  onOptionChange(selectedValue: string | null) {
    this.createProduct.patchValue({
      category: Number(selectedValue),
    });
  }

  changeToProduct(formGroup: FormGroup): Product {
    const res: Product = {
      id_product: this.idEdit,
      title: formGroup.get('title')?.value,
      category: formGroup.get('category')?.value,
      price: formGroup.get('price')?.value,
      detail: formGroup.get('detail')?.value,
      active: formGroup.get('active')?.value,
      created_datetime: formGroup.get('cretead_datetime')?.value,
      updated_datetime: formGroup.get('updated_datetime')?.value,
      thumbnail: formGroup.get('thumbnail')?.value,
    };
    return res;
  }

  onSubmit() {
    if (this.isEditing) {
      const product: Product = this.changeToProduct(this.createProduct);
      this.dataService.editProduct(this.idEdit, product).subscribe((res) => {
        if (res.status == 200) {
          alert('Data updated successfully');
          this.route.navigate(['/admin/welcome']);
        } else {
          alert('Something went wrong');
        }
      });
    } else {
      this.dataService.createProduct(this.createProduct).subscribe((res) => {
        if (res.status == 200) {
          alert('Data Created Successfully');
          this.createProduct.reset();
        } else {
          alert('Something went wrong!');
        }
      });
    }
  }
}
