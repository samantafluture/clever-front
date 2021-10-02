import { Project } from './../../../interfaces/project';
import { Component, Input, OnInit } from '@angular/core';
import { ProjectService } from 'src/app/services/project.service';
import { map } from 'rxjs/operators';
import { sortByDueDate } from 'src/app/utils/filter-project';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css'],
})
export class ProjectListComponent implements OnInit {
  projects: Project[] = [];
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
  }
}
