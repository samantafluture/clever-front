import { ProjectService } from '../../features/projects/project.service';
import { Project } from '../../../models/interfaces/project';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-create-project',
  templateUrl: './create-project.component.html',
  styleUrls: ['./create-project.component.css'],
})
export class CreateProjectComponent implements OnInit {
  project!: Project;
  Date!: Date;

  constructor(
    private router: Router,
    private location: Location,
    private projectService: ProjectService
  ) {
    this.project = {
      title: '',
      description: '',
      dueDate: this.Date,
      createdAt: this.Date,
      progress: 20
    };
  }

  ngOnInit(): void {
    this.project = {
      title: '',
      description: '',
      dueDate: this.Date,
      createdAt: this.Date,
      progress: 20
    };
  }

  cancel() {
    this.location.back();
    return false;
  }

  create(project: Project): void {
    this.projectService.createProject(project).subscribe(
      () => {
        console.log('Project created!', project);
        this.router.navigate(['/projetos']);
      },
      (error) => {
        console.log(error);
        this.router.navigate(['/projetos']);
      }
    );
  }
}
