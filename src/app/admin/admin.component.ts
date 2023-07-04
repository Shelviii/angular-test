import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent implements OnInit {
  constructor(private router: Router, private cookies: CookieService) {}
  loginForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });
  preview: string = '';
  ngOnInit(): void {}

  onSubmit() {
    this.preview = JSON.stringify(this.loginForm.value);
    const user = JSON.parse(this.preview);
    if (user['username'] == 'admin' && user['password'] == '123') {
      alert('Login success');
      this.router.navigate(['/admin/welcome']);
      this.cookies.set(
        'userInfo',
        JSON.stringify({ username: user['username'] })
      );
    } else {
      alert('Username or Password incorrect!');
    }
  }
}
