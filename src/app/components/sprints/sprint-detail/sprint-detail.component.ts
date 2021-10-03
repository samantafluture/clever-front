import { Status } from 'src/app/enums/status';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sprint-detail',
  templateUrl: './sprint-detail.component.html',
  styleUrls: ['./sprint-detail.component.css']
})
export class SprintDetailComponent implements OnInit {
  @Input() title!: string;
  @Input() description!: string;
  @Input() dueDate!: Date;
  @Input() status!: Status;

  constructor() { }

  ngOnInit(): void {
  }

}
