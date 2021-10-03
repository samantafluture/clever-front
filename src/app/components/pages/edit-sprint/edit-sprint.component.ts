import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Sprint } from 'src/app/interfaces/sprint';
import { SprintService } from '../../sprints/sprint.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-edit-sprint',
  templateUrl: './edit-sprint.component.html',
  styleUrls: ['./edit-sprint.component.css']
})
export class EditSprintComponent implements OnInit {
  Date!: Date;
  id!: number;
  sprint$!: Observable<Sprint>;

  constructor(
    private location: Location,
    private activatedRoute: ActivatedRoute,
    private sprintService: SprintService
  ) { }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params.id;
    this.sprint$ = this.sprintService.getSprintById(this.id);
    console.log(this.id, this.sprint$);
  }

  cancel() {
    this.location.back();
    return false;
  }

  edit(sprint: Sprint): void {
    this.sprintService.editSprint(sprint, this.id).subscribe(
      () => {
        console.log('Sprint updated');
        this.location.back();
      },
      (error) => {
        console.log(error);
        this.location.back();
      }
    );
  }
}
