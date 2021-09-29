import { Component, Input, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-sprint-form',
  templateUrl: './sprint-form.component.html',
  styleUrls: ['./sprint-form.component.css'],
})
export class SprintFormComponent implements OnInit {
  @Input() btnTitle: string = '';
  @Input() sprint!: any;

  constructor(private location: Location) {}

  ngOnInit(): void {}

  cancel() {
    this.location.back();
    return false;
  }
}