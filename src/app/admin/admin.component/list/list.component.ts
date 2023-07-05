import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../../../database/database.service';
import { Product } from '../../../../app/database/enum/product.enum';
import { Router } from '@angular/router';

@Component({
  selector: 'admin-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  data: any = [];
  constructor(private db: DatabaseService, private router: Router) {}

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

  deleteProduct(id: number, req: Product) {
    req.active = false;
    const con = confirm('คุณต้องการลบข้อมูล ใช่ หรือ ไม่');
    if (con) {
      this.db.editProduct(id, req).subscribe((res) => {
        if (res.status == 200) {
          window.location.reload();
        }
      });
    }
  }

  navigateToAddProduct(id: number, ele: Product) {
    this.router.navigate(['/admin/edit', id], { state: { data: ele } });
  }
}
