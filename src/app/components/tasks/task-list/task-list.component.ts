import { TaskService } from './../task.service';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { sortByDueDate } from 'src/app/utils/filters';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  tasks: Task[] = [];

  tasks$ = this.taskService
    .getTasks()
    .pipe(
      map((tasks) =>
      tasks.sort((taskA, taskB) => sortByDueDate(taskA, taskB))
      )
    );

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
  }

  edit() {

  }

  remove() {

  }

}
