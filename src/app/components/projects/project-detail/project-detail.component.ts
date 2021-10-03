import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.css'],
})
export class ProjectDetailComponent implements OnInit {
  @Input() title!: string;
  @Input() description!: string;
  @Input() dueDate!: Date;

  constructor() {}

  ngOnInit(): void {}
}
