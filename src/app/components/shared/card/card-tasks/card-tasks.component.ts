import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-tasks',
  templateUrl: './card-tasks.component.html',
  styleUrls: ['./card-tasks.component.css'],
})
export class CardTasksComponent implements OnInit {
  @Input()
  cardTitle: string = '';

  @Input()
  cardDescription: string = '';
  
  constructor() {}

  ngOnInit(): void {}
}
