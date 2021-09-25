import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-btn-border',
  templateUrl: './btn-border.component.html',
  styleUrls: ['./btn-border.component.css'],
})
export class BtnBorderComponent implements OnInit {
  @Input()
  btnTitle: string = '';

  constructor() {}

  ngOnInit(): void {}
}
