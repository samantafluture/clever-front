import { Component, OnInit } from '@angular/core';
import { Sprint } from 'src/app/interfaces/sprint';
import { SprintService } from '../sprint.service';

@Component({
  selector: 'app-sprint-list',
  templateUrl: './sprint-list.component.html',
  styleUrls: ['./sprint-list.component.css']
})
export class SprintListComponent implements OnInit {
  sprints: Sprint[] = [];

  allSprints$ = this.sprintService.getSprints();

  constructor(private sprintService: SprintService) { }

  ngOnInit(): void {
  }

}
