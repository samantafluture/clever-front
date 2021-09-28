import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css']
})
export class CreateTaskComponent implements OnInit {
  task!: any;
  Date!: Date;

  constructor(private router: Router, private location: Location) {
    this.task = {
      text: '',
      date: this.Date,
      member: '',
      isUrgent: false
    };
  }

  ngOnInit(): void {
  }

  cancel() {
    this.location.back();
    return false;
  }

  add(task: any): void {
    console.log(task);
    this.location.back();
  }
}
