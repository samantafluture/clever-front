import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input() pageTitle: string | undefined;
  @Input() btnTitle: string = '';
  @Output() clickEvent = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  click() {
    this.clickEvent.emit();
  }

}
