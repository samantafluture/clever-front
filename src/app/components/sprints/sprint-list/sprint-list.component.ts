import { ProjectService } from './../../projects/project.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { map } from 'rxjs/operators';
import { Project } from 'src/app/interfaces/project';
import { Sprint } from 'src/app/interfaces/sprint';
import {
  isDone,
  isInProgress,
  isToDo,
  sortByDueDate,
  filterByProject,
} from 'src/app/utils/filter-sprint';
import { SprintService } from '../sprint.service';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sprint-list',
  templateUrl: './sprint-list.component.html',
  styleUrls: ['./sprint-list.component.css'],
})
export class SprintListComponent implements OnInit {
  @Output() clickEvent = new EventEmitter<any>();
  @Input() projectId!: any;
  sprints: Sprint[] = [];
  // projects: Project[] = [];
  // id!: number;
  // project$!: Observable<Project>;

  allSprints$ = this.sprintService
    .getSprints()
    .pipe(
      map((sprints) =>
        sprints.sort((sprintA, sprintB) => sortByDueDate(sprintA, sprintB))
      )
    );
  filteredSprints$ = this.allSprints$.pipe(
    map((sprints) =>
      sprints.filter((sprint) => filterByProject(sprint, this.projectId))
    )
  );
  toDoSprints$ = this.filteredSprints$.pipe(
    map((sprints) => sprints.filter((sprint) => isToDo(sprint)))
  );
  inProgressSprints$ = this.filteredSprints$.pipe(
    map((sprints) => sprints.filter((sprint) => isInProgress(sprint)))
  );
  isDoneSprints$ = this.filteredSprints$.pipe(
    map((sprints) => sprints.filter((sprint) => isDone(sprint)))
  );

  // allProjects$ = this.projectService.getProjects();

  constructor(
    private sprintService: SprintService,
    // private projectService: ProjectService,
    // private activatedRoute: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    // this.id = this.activatedRoute.snapshot.params.id;
    // this.project$ = this.projectService.getProjectById(this.id);
    this.toDoSprints$;
    this.inProgressSprints$;
    this.isDoneSprints$;
  }

  click() {
    this.clickEvent.emit();
  }
}
