import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../../../app/database/database.service';
import {
  Category,
  Contact,
  ContactDTO,
} from '../../../app/database/enum/product.enum';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'admin-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class AdminContactComponent implements OnInit {
  data: Contact[] = [];
  contactDTO: FormGroup<ContactDTO> = new FormGroup<ContactDTO>({
    title: new FormControl(),
    detail: new FormControl(),
    name: new FormControl(),
    tel: new FormControl(),
    email: new FormControl(),
    active: new FormControl(),
    reading: new FormControl(),
  });
  constructor(private dataService: DatabaseService, private router: Router) {}

  ngOnInit(): void {
    this.dataService.getContact().subscribe((res) => {
      this.data = res;
    });
  }

  preview(id: number, val: Contact) {
    this.router.navigate(['admin/contact/preview', id], {
      state: { data: val },
    });
  }
  deleteAction(val: Contact) {
    const con: boolean = confirm('คุณต้องการลบข้อมูลผู้ติดต่อนี้ ใช่ หรือ ไม่');
    if (con) {
      const id = val.id_contact;
      this.contactDTO.setValue({
        title: val.title,
        detail: val.detail,
        name: val.name,
        tel: val.tel,
        email: val.email,
        active: false,
        reading: val.reading,
      });
      const data: any = this.contactDTO.value;
      this.dataService.editContact(id, data).subscribe((res) => {
        if (res.status == 200) {
          alert('Data Deleted Successfully');
          window.location.reload();
        } else {
          alert('Something went wrong');
        }
      });
    }
  }
}
