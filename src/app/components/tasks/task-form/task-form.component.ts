import { SprintService } from './../../sprints/sprint.service';
import { Component, Input, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Task } from 'src/app/interfaces/task';
import { Observable } from 'rxjs';
import { Sprint } from 'src/app/interfaces/sprint';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css'],
})
export class TaskFormComponent implements OnInit {
  @Input() btnTitle: string = '';
  @Input() task!: Task;
  id!: number;
  sprint$!: Observable<Sprint>;
  sprints$ = this.sprintService.getSprints();

  constructor(
    private location: Location,
    private sprintService: SprintService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.sprints$;
    this.id = this.activatedRoute.snapshot.params.id;
    this.sprint$ = this.sprintService.getSprintById(this.id);
  }

  cancel() {
    this.location.back();
    return false;
  }
}
