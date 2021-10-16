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
  isMobile: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  click() {
    this.clickEvent.emit();
  }

  showMenu() {
    this.isMobile = false;
  }

  closeMenu() {
    this.isMobile = true;
  }
}
