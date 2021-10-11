import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { map } from 'rxjs/operators';
import { Sprint } from 'src/app/models/interfaces/sprint';
import {
  isDone,
  isInProgress,
  isToDo,
  sortByDueDate,
  filterByProject,
} from 'src/app/utils/filters';
import { SprintService } from '../../features/sprints/sprint.service';

@Component({
  selector: 'app-sprint-list',
  templateUrl: './sprint-list.component.html',
  styleUrls: ['./sprint-list.component.css'],
})
export class SprintListComponent implements OnInit {
  @Output() clickEvent = new EventEmitter<any>();
  @Input() projectId!: any;
  sprints: Sprint[] = [];

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

  constructor(private sprintService: SprintService) {}

  ngOnInit(): void {
    this.toDoSprints$;
    this.inProgressSprints$;
    this.isDoneSprints$;
  }

  click() {
    this.clickEvent.emit();
  }
}
