import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {
  @Input()
  taskTitle: string = '';

  @Input()
  projectTask: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
