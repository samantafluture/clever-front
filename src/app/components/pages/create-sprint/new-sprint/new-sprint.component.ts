import { Component, Input, OnInit } from '@angular/core';
import { SprintService } from 'src/app/components/features/sprints/sprint.service';
import { Status } from 'src/app/models/enums/status';
import { Project } from 'src/app/models/interfaces/project';
import { Location } from '@angular/common';
import { Sprint } from 'src/app/models/interfaces/sprint';

@Component({
  selector: 'app-new-sprint',
  templateUrl: './new-sprint.component.html',
  styleUrls: ['./new-sprint.component.css']
})
export class NewSprintComponent implements OnInit {
  sprint!: any;
  Date!: Date;
  @Input() project!: Project;

  constructor(
    private location: Location,
    private sprintService: SprintService,
  ) {
    this.sprint = {
      title: '',
      description: '',
      status: Status.TO_DO,
      project: this.project,
      dueDate: this.Date,
      createdAt: this.Date,
    };
  }

  ngOnInit(): void {
    this.sprint = {
      title: '',
      description: '',
      status: Status.TO_DO,
      project: this.project,
      dueDate: this.Date,
      createdAt: this.Date,
    };
    console.log(this.project);
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
