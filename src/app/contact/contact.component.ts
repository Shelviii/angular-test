import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Contact, ContactDTO } from '../database/enum/product.enum';
import { DatabaseService } from '../database/database.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  contact: FormGroup<ContactDTO> = new FormGroup<ContactDTO>({
    title: new FormControl(),
    detail: new FormControl(),
    name: new FormControl(),
    tel: new FormControl(),
    email: new FormControl(),
    active: new FormControl(true),
    reading: new FormControl(false),
  });
  constructor(private dataService: DatabaseService) {}

  ngOnInit(): void {}

  changeToContactDTO(formGroup: FormGroup): ContactDTO {
    const res: ContactDTO = {
      title: formGroup.get('title')?.value,
      detail: formGroup.get('detail')?.value,
      name: formGroup.get('name')?.value,
      tel: formGroup.get('tel')?.value,
      email: formGroup.get('email')?.value,
      active: formGroup.get('active')?.value,
      reading: formGroup.get('reading')?.value,
    };
    return res;
  }
  onSubmit() {
    const data: ContactDTO = this.changeToContactDTO(this.contact);
    this.dataService.createContact(data).subscribe((res) => {
      if (res.status == 200) {
        alert('Data Sent Successfully');
        window.location.reload();
      } else {
        alert('Something went wrong');
      }
    });
  }
}
