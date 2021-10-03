import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-view-sprint',
  templateUrl: './view-sprint.component.html',
  styleUrls: ['./view-sprint.component.css'],
})
export class ViewSprintComponent implements OnInit {
  @Input()
  task!: any;

  constructor(private router: Router, private location: Location) {}

  ngOnInit(): void {}

  create(task: any) {
    this.router.navigateByUrl('nova-tarefa');
  }

  cancel() {
    this.location.back();
    return false;
  }
}
