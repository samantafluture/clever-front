import { Project } from 'src/app/interfaces/project';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjectService } from '../../projects/project.service';
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
    this.router.navigateByUrl('novo-sprint');
  }

}
