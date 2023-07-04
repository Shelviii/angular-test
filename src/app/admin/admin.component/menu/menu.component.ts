import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'admin-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class AdminMenuComponent implements OnInit {
  username:string = ''
  constructor(private cookie:CookieService) { }

  ngOnInit(): void {
    const user = JSON.parse(this.cookie.get('userInfo'))
    this.username = user['username']
  }
  delCookies(){
    this.cookie.deleteAll()
  }
}
