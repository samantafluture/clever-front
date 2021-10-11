import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { Observable } from 'rxjs';
import { Sprint } from 'src/app/models/interfaces/sprint';
import { SprintService } from '../../features/sprints/sprint.service';

@Component({
  selector: 'app-view-sprint',
  templateUrl: './view-sprint.component.html',
  styleUrls: ['./view-sprint.component.css'],
})
export class ViewSprintComponent implements OnInit {
  @Input() task!: any;
  sprintId!: number;
  sprint$!: Observable<Sprint>;

  constructor(
    private router: Router,
    private location: Location,
    private activatedRoute: ActivatedRoute,
    private sprintService: SprintService
  ) {}

  ngOnInit(): void {
    this.sprintId = this.activatedRoute.snapshot.params.sprintId;
    this.sprint$ = this.sprintService.getSprintById(this.sprintId);
  }

  cancel() {
    this.location.back();
    return false;
  }

  remove() {
    this.sprintService.deleteSprint(this.sprintId).subscribe(
      () => {
        this.location.back();
      },
      (error) => console.log(error)
    );
  }

  newTask() {
    this.router.navigate(['/sprint/' + this.sprintId + '/nova-tarefa/']);
  }
}
