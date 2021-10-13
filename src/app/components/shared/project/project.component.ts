import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { NgProgressComponent } from 'ngx-progressbar';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css'],
})
export class ProjectComponent implements OnInit, AfterViewInit {
  @Input() title!: string;
  @Input() description!: string;
  @Input() dueDate!: Date;
  @ViewChild(NgProgressComponent) progressBar!: NgProgressComponent;

  ngAfterViewInit() {
    this.progressBar.set(50);
  }

  constructor() {}

  ngOnInit(): void {}
}
