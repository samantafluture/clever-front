import { TaskService } from './../../tasks/task.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css'],
})
export class CreateTaskComponent implements OnInit {
  task!: any;
  Date!: Date;

  constructor(
    private location: Location,
    private taskService: TaskService
  ) {
    this.task = {
      description: '',
      isUrgent: false,
      isDone: false,
      createdAt: this.Date,
      dueDate: this.Date,
    };
  }

  ngOnInit(): void {
    this.task = {
      description: '',
      isUrgent: false,
      isDone: false,
      createdAt: this.Date,
      dueDate: this.Date,
    };
  }

  cancel() {
    this.location.back();
    return false;
  }

  create(task: any): void {
    this.taskService.createTask(task).subscribe(
      () => {
        console.log('Task created!', task);
        this.location.back();
      },
      (error) => {
        console.log(error);
        this.location.back();
      }
    );
    }

}
