import { TaskService } from '../../features/tasks/task.service';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.css'],
})
export class EditTaskComponent implements OnInit {
  Date!: Date;
  id!: number;
  task$!: Observable<any>;

  constructor(
    private location: Location,
    private activatedRoute: ActivatedRoute,
    private taskService: TaskService
  ) {}

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params.id;
    this.task$ = this.taskService.getTaskById(this.id);
    console.log(this.id, this.task$);
  }

  cancel() {
    this.location.back();
    return false;
  }

  edit(task: any): void {
    this.taskService.editTask(task, this.id).subscribe(
      () => {
        console.log('Task updated');
        this.location.back();
      },
      (error) => {
        console.log(error);
        this.location.back();
      }
    );
  }
}
