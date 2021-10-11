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
  projetoId!: number;
  project$!: Observable<Project>;

  constructor(
    private projectService: ProjectService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.projetoId = this.activatedRoute.snapshot.params.projetoId;
    this.project$ = this.projectService.getProjectById(this.projetoId);
  }

  remove() {
    this.projectService.deleteProject(this.projetoId).subscribe(
      () => {
        this.router.navigate(['/projetos/']);
      },
      (error) => console.log(error)
    );
  }

  newSprint() {
    this.router.navigate(['/projeto/' + this.projetoId + '/novo-sprint/']);
  }

  edit() {
    this.router.navigate(['/projeto/' + this.projetoId + '/editar/'])
  }
}
