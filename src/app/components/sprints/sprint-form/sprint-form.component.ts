import { Sprint } from 'src/app/interfaces/sprint';
import { Component, Input, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Status } from 'src/app/enums/status';
import { Project } from 'src/app/interfaces/project';
import { ProjectService } from 'src/app/components/projects/project.service';

@Component({
  selector: 'app-sprint-form',
  templateUrl: './sprint-form.component.html',
  styleUrls: ['./sprint-form.component.css'],
})
export class SprintFormComponent implements OnInit {
  @Input() btnTitle: string = '';
  @Input() sprint!: Sprint;
  status = [Status.TO_DO, Status.IN_PROGRESS, Status.DONE];
  // projects: Project[] = [];
  allProjects$ = this.projectService.getProjects();

  constructor(private location: Location, private projectService: ProjectService) {}

  ngOnInit(): void {
    this.allProjects$;
  }

  cancel() {
    this.location.back();
    return false;
  }
}
