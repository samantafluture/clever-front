import { Component, Input, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Task } from 'src/app/interfaces/task';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css'],
})
export class TaskFormComponent implements OnInit {
  @Input() btnTitle: string = '';
  @Input() task!: Task;

  constructor(private location: Location) {}

  ngOnInit(): void {}

  cancel() {
    this.location.back();
    return false;
  }
}
