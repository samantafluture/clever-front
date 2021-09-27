import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-create-sprint',
  templateUrl: './create-sprint.component.html',
  styleUrls: ['./create-sprint.component.css'],
})
export class CreateSprintComponent implements OnInit {
  sprint!: any;
  Date!: Date;

  constructor(private router: Router, private location: Location) {
    this.sprint = {
      title: '',
      description: '',
      date: this.Date,
    };
  }

  ngOnInit(): void {}

  cancel() {
    this.location.back();
    return false;
  }

  add(sprint: any): void {
    console.log(sprint);
    this.router.navigateByUrl('projeto');
  }
}
