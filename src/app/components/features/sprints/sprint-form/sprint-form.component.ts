import { Sprint } from 'src/app/models/interfaces/sprint';
import { Component, Input, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Status } from 'src/app/models/enums/status';
import { Project } from 'src/app/models/interfaces/project';
import { ProjectService } from 'src/app/components/features/projects/project.service';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sprint-form',
  templateUrl: './sprint-form.component.html',
  styleUrls: ['./sprint-form.component.css'],
})
export class SprintFormComponent implements OnInit {
  @Input() btnTitle: string = '';
  @Input() sprint!: Sprint;
  id!: number;
  status = [Status.TO_DO, Status.IN_PROGRESS, Status.DONE];
  allProjects$ = this.projectService.getProjects();
  project$!: Observable<Project>;

  constructor(
    private location: Location,
    private activatedRoute: ActivatedRoute,
    private projectService: ProjectService
  ) {}

  ngOnInit(): void {
    this.allProjects$;
    this.id = this.activatedRoute.snapshot.params.id;
    this.project$ = this.projectService.getProjectById(this.id);
  }

  cancel() {
    this.location.back();
    return false;
  }
}
