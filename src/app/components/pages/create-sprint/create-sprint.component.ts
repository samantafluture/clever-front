import { Sprint } from 'src/app/interfaces/sprint';
import { Status } from 'src/app/enums/status';
import { SprintService } from './../../sprints/sprint.service';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-create-sprint',
  templateUrl: './create-sprint.component.html',
  styleUrls: ['./create-sprint.component.css'],
})
export class CreateSprintComponent implements OnInit {
  sprint!: any;
  Date!: Date;

  constructor(
    private location: Location,
    private sprintService: SprintService
  ) {
    this.sprint = {
      title: '',
      description: '',
      status: Status.TO_DO,
      dueDate: this.Date,
      createdAt: this.Date,
    };
  }

  ngOnInit(): void {
    this.sprint = {
      title: '',
      description: '',
      status: Status.TO_DO,
      dueDate: this.Date,
      createdAt: this.Date,
    };
  }

  cancel() {
    this.location.back();
    return false;
  }

  create(sprint: Sprint): void {
    this.sprintService.createSprint(sprint).subscribe(
      () => {
        console.log('Sprint created!', sprint);
        this.location.back();
      },
      (error) => {
        console.log(error);
        this.location.back();
      }
    );
  }
}
