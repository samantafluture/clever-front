import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { SprintService } from '../../features/sprints/sprint.service';
import { Sprint } from 'src/app/models/interfaces/sprint';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css'],
})
export class CreateTaskComponent implements OnInit {
  sprint$!: Observable<Sprint>;
  id!: number;

  constructor(
    private sprintService: SprintService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params.id;
    this.sprint$ = this.sprintService.getSprintById(this.id);
  }

}
