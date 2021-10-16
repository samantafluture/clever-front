import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Project } from 'src/app/models/interfaces/project';
import { ProjectService } from '../../features/projects/project.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {
  projects: Project[] = [];
  projects$ = this.projectService.getProjects();
  @Input() isMobile!: boolean;
  @Output() closeEvent = new EventEmitter<any>();

  constructor(private projectService: ProjectService) {}

  ngOnInit(): void {
  }

  close() {
    this.closeEvent.emit();
  }
}
