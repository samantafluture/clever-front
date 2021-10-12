import { Component, Input, OnInit } from '@angular/core';
import { TaskService } from 'src/app/components/features/tasks/task.service';
import { Location } from '@angular/common';
import { Sprint } from 'src/app/models/interfaces/sprint';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.css']
})
export class NewTaskComponent implements OnInit {
  @Input() sprint!: Sprint;
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
      sprint: this.sprint
    };
  }

  ngOnInit(): void {
    this.task = {
      description: '',
      isUrgent: false,
      isDone: false,
      createdAt: this.Date,
      dueDate: this.Date,
      sprint: this.sprint
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
