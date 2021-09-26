import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-sprint',
  templateUrl: './card-sprint.component.html',
  styleUrls: ['./card-sprint.component.css']
})
export class CardSprintComponent implements OnInit {
  @Input()
  cardTitle: string = '';

  @Input()
  cardDescription: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
