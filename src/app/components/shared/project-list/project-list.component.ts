import { Project } from '../../../models/interfaces/project';
import { Component, Input, OnInit } from '@angular/core';
import { ProjectService } from '../../features/projects/project.service';
import { map } from 'rxjs/operators';
import { sortByDueDate } from 'src/app/utils/filters';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css'],
})
export class ProjectListComponent implements OnInit {
  project!: Project;
  projects: Project[] = [];
  progress!: number;
  @Input() showAll = true;

  allProjects$ = this.projectService.getProjects();
  sortedProjects$ = this.allProjects$.pipe(
    map((projects) =>
      projects.sort((projectA, projectB) => sortByDueDate(projectA, projectB))
    )
  );

  constructor(private projectService: ProjectService) {}

  ngOnInit(): void {
    this.sortedProjects$;
    this.progress = 85;
  }

}
