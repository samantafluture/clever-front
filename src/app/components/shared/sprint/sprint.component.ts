import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sprint',
  templateUrl: './sprint.component.html',
  styleUrls: ['./sprint.component.css'],
})
export class SprintComponent implements OnInit {
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() dueDate!: Date;
  @Input() id!: any;

  constructor() {}

  ngOnInit(): void {}

}
