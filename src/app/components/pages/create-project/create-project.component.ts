import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-create-project',
  templateUrl: './create-project.component.html',
  styleUrls: ['./create-project.component.css'],
})
export class CreateProjectComponent implements OnInit {
  project!: any;
  Date!: Date;

  constructor(private router: Router, private location: Location) {
    this.project = {
      title: '',
      description: '',
      date: this.Date,
      members: '',
    };
  }

  ngOnInit(): void {}

  cancel() {
    this.location.back();
    return false;
  }

  add(project: any): void {}
}
