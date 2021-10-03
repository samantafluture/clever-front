import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { map } from 'rxjs/operators';
import { Sprint } from 'src/app/interfaces/sprint';
import { isDone, isInProgress, isToDo, sortByDueDate } from 'src/app/utils/filter-sprint';
import { SprintService } from '../sprint.service';

@Component({
  selector: 'app-sprint-list',
  templateUrl: './sprint-list.component.html',
  styleUrls: ['./sprint-list.component.css'],
})
export class SprintListComponent implements OnInit {
  @Output() clickEvent = new EventEmitter<any>();
  sprints: Sprint[] = [];

  allSprints$ = this.sprintService.getSprints().pipe(
    map((projects) =>
      projects.sort((projectA, projectB) => sortByDueDate(projectA, projectB))
    )
  );
  toDoSprints$ = this.allSprints$.pipe(
    map((sprints) => sprints.filter((sprint) => isToDo(sprint)))
  );
  inProgressSprints$ = this.allSprints$.pipe(
    map((sprints) => sprints.filter((sprint) => isInProgress(sprint)))
  );
  isDoneSprints$ = this.allSprints$.pipe(
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
