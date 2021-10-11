import { Sprint } from 'src/app/models/interfaces/sprint';
import { Status } from 'src/app/models/enums/status';
import { SprintService } from '../../features/sprints/sprint.service';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Project } from 'src/app/models/interfaces/project';
import { ActivatedRoute } from '@angular/router';
import { ProjectService } from '../../features/projects/project.service';

@Component({
  selector: 'app-create-sprint',
  templateUrl: './create-sprint.component.html',
  styleUrls: ['./create-sprint.component.css'],
})
export class CreateSprintComponent implements OnInit {
  sprint!: any;
  Date!: Date;
  project!: Project;

  constructor(
    private location: Location,
    private sprintService: SprintService,
    private projectService: ProjectService,
    private activatedRoute: ActivatedRoute
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
    const id = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    this.projectService
      .getProjectById(id)
      .subscribe((project) => (this.project = project));

    this.sprint = {
      title: '',
      description: '',
      status: Status.TO_DO,
      project: this.project,
      dueDate: this.Date,
      createdAt: this.Date,
    };
    console.log(id, this.project);
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
