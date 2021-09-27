import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  view(): void {
    this.router.navigateByUrl("sprint");
  }

}
