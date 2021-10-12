import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/models/interfaces/project';
import { ActivatedRoute } from '@angular/router';
import { ProjectService } from '../../features/projects/project.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-create-sprint',
  templateUrl: './create-sprint.component.html',
  styleUrls: ['./create-sprint.component.css'],
})
export class CreateSprintComponent implements OnInit {
  project$!: Observable<Project>;
  id!: number;

  constructor(
    private projectService: ProjectService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params.id;
    this.project$ = this.projectService.getProjectById(this.id);
  }
}
