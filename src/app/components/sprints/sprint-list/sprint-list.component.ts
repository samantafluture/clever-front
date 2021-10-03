import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Sprint } from 'src/app/interfaces/sprint';
import { isToDo } from 'src/app/utils/filter-sprint';
import { SprintService } from '../sprint.service';

@Component({
  selector: 'app-sprint-list',
  templateUrl: './sprint-list.component.html',
  styleUrls: ['./sprint-list.component.css'],
})
export class SprintListComponent implements OnInit {
  sprints: Sprint[] = [];

  allSprints$ = this.sprintService.getSprints();
  toDoSprints$ = this.allSprints$.pipe(
    map((sprints) => sprints.filter((sprint) => isToDo(sprint)))
  );

  constructor(private sprintService: SprintService) {}

  ngOnInit(): void {
    this.toDoSprints$;
  }
}
