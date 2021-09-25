import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-item',
  templateUrl: './card-item.component.html',
  styleUrls: ['./card-item.component.css'],
})
export class CardItemComponent implements OnInit {
  @Input()
  cardTitle: string = '';

  @Input()
  cardDescription: string = '';
  
  constructor() {}

  ngOnInit(): void {}
}
