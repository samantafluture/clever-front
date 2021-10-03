import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Project } from 'src/app/interfaces/project';
import { Location } from '@angular/common';
import { Observable } from 'rxjs';
import { ProjectService } from '../../projects/project.service';

@Component({
  selector: 'app-edit-project',
  templateUrl: './edit-project.component.html',
  styleUrls: ['./edit-project.component.css'],
})
export class EditProjectComponent implements OnInit {
  Date!: Date;
  id!: number;
  project$!: Observable<Project>;

  constructor(
    private location: Location,
    private activatedRoute: ActivatedRoute,
    private projectService: ProjectService
  ) {
  }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params.id;
    this.project$ = this.projectService.getProjectById(this.id);
    console.log(this.id, this.project$);
  }

  cancel() {
    this.location.back();
    return false;
  }

  edit(project: Project): void {
    this.projectService.editProject(project, this.id).subscribe(
      () => {
        console.log('Project updated');
        this.location.back();
      },
      (error) => {
        console.log(error);
        this.location.back();
      }
    );
  }
}
