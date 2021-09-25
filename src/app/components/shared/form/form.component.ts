import { Component, Input, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  @Input() btnTitle: string = '';
  @Input() project!: any;

  constructor(private location: Location) {}

  ngOnInit(): void {}

  cancel() {
    this.location.back();
    return false;
  }
}
