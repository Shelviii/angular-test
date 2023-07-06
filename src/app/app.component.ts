import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  items: number = 0;
  title = 'angular-test';
  constructor(){}
  
  addNewItems(value: string) {
    this.items += Number(value);
  }
}
