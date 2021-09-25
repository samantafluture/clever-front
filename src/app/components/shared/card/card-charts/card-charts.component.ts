import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-charts',
  templateUrl: './card-charts.component.html',
  styleUrls: ['./card-charts.component.css']
})
export class CardChartsComponent implements OnInit {
  @Input()
  cardTitle: string = "";

  @Input()
  cardDescription: string = "";

  constructor() { }

  ngOnInit(): void {
  }

}
