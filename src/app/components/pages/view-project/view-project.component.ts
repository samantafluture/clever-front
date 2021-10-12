import { Project } from 'src/app/models/interfaces/project';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjectService } from '../../features/projects/project.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-view-project',
  templateUrl: './view-project.component.html',
  styleUrls: ['./view-project.component.css'],
})
export class ViewProjectComponent implements OnInit {
  id!: number;
  project$!: Observable<Project>;

  constructor(
    private projectService: ProjectService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params.id;
    this.project$ = this.projectService.getProjectById(this.id);
    console.log(this.id);
  }

  remove() {
    this.projectService.deleteProject(this.id).subscribe(
      () => {
        this.router.navigate(['/projetos/']);
      },
      (error) => console.log(error)
    );
  }

  newSprint() {
    this.router.navigate(['/projeto/' + this.id + '/novo-sprint/']);
  }

  edit() {
    this.router.navigate(['/projeto/' + this.id + '/editar/'])
  }
}
