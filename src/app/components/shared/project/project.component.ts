import {
  AfterViewInit,
  Component,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';
import { NgProgressComponent } from 'ngx-progressbar';
import { Color } from 'src/app/models/enums/color';
import { Progress } from 'src/app/models/enums/progress';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css'],
})
export class ProjectComponent implements OnInit, AfterViewInit {
  @Input() title!: string;
  @Input() description!: string;
  @Input() dueDate!: Date;
  @Input() progress!: number;

  color!: string;

  @ViewChild(NgProgressComponent) progressBar!: NgProgressComponent;

  ngAfterViewInit() {
    this.progressBar.start();
  }

  constructor() {}

  ngOnInit(): void {
    this.getColorProgressBar();
  }

  getColorProgressBar() {
    if (this.progress <= Progress.TO_DO) {
      return (this.color = Color.RED);
    }
    if (
      this.progress >= Progress.TO_DO &&
      this.progress <= Progress.IN_PROGRESS
    ) {
      return (this.color = Color.YELLOW);
    }
    return (this.color = Color.GREEN);
  }
}
