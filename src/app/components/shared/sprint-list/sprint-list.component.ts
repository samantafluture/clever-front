import { Project } from 'src/app/models/interfaces/project';
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
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-sprint-list',
  templateUrl: './sprint-list.component.html',
  styleUrls: ['./sprint-list.component.css'],
})
export class SprintListComponent implements OnInit {
  @Output() clickEvent = new EventEmitter<any>();
  @Input() projectId!: any;
  @Input() project!: Project;
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
      sprints.filter((sprint) =>
        filterByProject(sprint.project?.id, this.projectId)
      )
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
    console.log(this.project);
    console.log(this.project.id);
  }

  click() {
    this.clickEvent.emit();
  }

  drop(event: CdkDragDrop<any[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }

}
