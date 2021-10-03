import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-projects',
  templateUrl: './list-projects.component.html',
  styleUrls: ['./list-projects.component.css']
})
export class ListProjectsComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  newProject() {
    this.router.navigateByUrl('novo-projeto');
  }

}
