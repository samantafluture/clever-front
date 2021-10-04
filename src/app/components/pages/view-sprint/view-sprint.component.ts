import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { Observable } from 'rxjs';
import { Sprint } from 'src/app/interfaces/sprint';
import { SprintService } from '../../sprints/sprint.service';

@Component({
  selector: 'app-view-sprint',
  templateUrl: './view-sprint.component.html',
  styleUrls: ['./view-sprint.component.css'],
})
export class ViewSprintComponent implements OnInit {
  @Input() task!: any;
  id!: number;
  sprint$!: Observable<Sprint>;

  constructor(
    private router: Router,
    private location: Location,
    private activatedRoute: ActivatedRoute,
    private sprintService: SprintService
  ) {}

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params.id;
    this.sprint$ = this.sprintService.getSprintById(this.id);
  }
  
  cancel() {
    this.location.back();
    return false;
  }

  remove() {
    this.sprintService.deleteSprint(this.id).subscribe(
      () => {
        this.location.back();
      },
      (error) => console.log(error)
    );
  }

  newTask() {
    this.router.navigate(['/sprint/' + this.id + '/nova-tarefa/']);
  }
}
