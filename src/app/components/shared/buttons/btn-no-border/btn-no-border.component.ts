import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-btn-no-border',
  templateUrl: './btn-no-border.component.html',
  styleUrls: ['./btn-no-border.component.css'],
})
export class BtnNoBorderComponent implements OnInit {
  @Input()
  btnTitle: string = '';

  constructor() {}

  ngOnInit(): void {}
}
