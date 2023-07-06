import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DatabaseService } from '../../../../app/database/database.service';
import {
  Contact,
  ContactDTO,
} from '../../../../app/database/enum/product.enum';

@Component({
  selector: 'contact-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.css'],
})
export class AdminContactPreviewComponent implements OnInit {
  idContact: number = 0;
  contactForm: FormGroup<ContactDTO> = new FormGroup<ContactDTO>({
    title: new FormControl(),
    detail: new FormControl(),
    name: new FormControl(),
    tel: new FormControl(),
    email: new FormControl(),
    active: new FormControl(true),
    reading: new FormControl(),
  });
  constructor(
    private dataService: DatabaseService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    if (this.route.snapshot.paramMap.get('id')) {
      this.idContact = Number(this.route.snapshot.paramMap.get('id'));
    }

    const data: Contact = history.state.data;
    const local: any = localStorage.getItem('contactData');
    const dataLocal: Contact = JSON.parse(local);

    if (data) {
      localStorage.setItem('contactData', JSON.stringify(data));
      this.contactForm.setValue({
        title: data.title,
        detail: data.detail,
        name: data.name,
        tel: data.tel,
        email: data.email,
        active: data.active,
        reading: data.reading,
      });
    } else if (dataLocal) {
      this.contactForm.setValue({
        title: dataLocal.title,
        detail: dataLocal.detail,
        name: dataLocal.name,
        tel: dataLocal.tel,
        email: dataLocal.email,
        active: dataLocal.active,
        reading: dataLocal.reading,
      });
    }
  }

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
    if (this.idContact != 0) {
      const data = this.changeToContactDTO(this.contactForm);
      this.dataService.editContact(this.idContact, data).subscribe((res) => {
        if (res.status == 200) {
          this.router.navigate(['admin/contact'])
          alert('Data Updated Successfully');
        } else {
          alert('Something went wrong');
        }
      });
    }
  }
}
