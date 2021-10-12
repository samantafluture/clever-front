import { Sprint } from 'src/app/models/interfaces/sprint';
import { TaskService } from '../../features/tasks/task.service';
import { Component, Input, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { filterBySprint, sortByDueDate } from 'src/app/utils/filters';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css'],
})
export class TaskListComponent implements OnInit {
  tasks: Task[] = [];
  @Input() sprintId!: any;
  @Input() sprint!: Sprint;

  tasks$ = this.taskService
    .getTasks()
    .pipe(
      map((tasks) => tasks.sort((taskA, taskB) => sortByDueDate(taskA, taskB)))
    );

  filteredTasks$ = this.tasks$.pipe(
    map((tasks) =>
    tasks.filter((task) => filterBySprint(task.sprint?.id, this.sprint.id))
    )
  );

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.filteredTasks$;
  }
}
