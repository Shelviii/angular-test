import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'admin-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
})
export class CreateComponent implements OnInit {
  optionsData: string[] = ['1', '2', '3', '4', '5'];
  selectedOption: number | null = null;
  constructor() {}

  ngOnInit(): void {}

  onOptionChange(selectedValue: string | null) {
    console.log('Selected option:', selectedValue);
  }
}
