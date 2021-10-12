import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sprint',
  templateUrl: './sprint.component.html',
  styleUrls: ['./sprint.component.css'],
})
export class SprintComponent implements OnInit {
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() dueDate!: Date;

  constructor(private router: Router) {}

  ngOnInit(): void {}

}
