import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-sprint',
  templateUrl: './view-sprint.component.html',
  styleUrls: ['./view-sprint.component.css'],
})
export class ViewSprintComponent implements OnInit {
  @Input()
  task!: any;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  create(task: any) {
    this.router.navigateByUrl('nova-tarefa');
  }
}
