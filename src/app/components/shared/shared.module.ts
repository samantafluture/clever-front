import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { LogoComponent } from './sidebar/logo/logo.component';
import { HeaderComponent } from './header/header.component';
import { CardItemComponent } from './card/card-item/card-item.component';
import { DividerComponent } from './divider/divider.component';
import { BtnNoBorderComponent } from './buttons/btn-no-border/btn-no-border.component';
import { CardGridComponent } from './card/card-grid/card-grid.component';
import { CardWrapperComponent } from './card/card-wrapper/card-wrapper.component';
import { BtnBorderComponent } from './buttons/btn-border/btn-border.component';
import { CardChartsComponent } from './card/card-charts/card-charts.component';
import { BarsComponent } from './graphics/charts/bars/bars.component';
import { AreaComponent } from './graphics/charts/area/area.component';
import { CardTasksComponent } from './card/card-tasks/card-tasks.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CardSprintComponent } from './card/card-sprint/card-sprint.component';
import { CalendarComponent } from './graphics/calendar/calendar.component';
import { ProjectListComponent } from './project-list/project-list.component';
import { SprintListComponent } from './sprint-list/sprint-list.component';
import { TaskListComponent } from './task-list/task-list.component';
import { ProjectComponent } from './project/project.component';
import { SprintComponent } from './sprint/sprint.component';
import { TaskComponent } from './task/task.component';
import { ProjectsRoutingModule } from '../features/projects/projects-routing.module';

@NgModule({
  declarations: [
    SidebarComponent,
    LogoComponent,
    HeaderComponent,
    CardItemComponent,
    DividerComponent,
    BtnNoBorderComponent,
    CardGridComponent,
    CardWrapperComponent,
    BtnBorderComponent,
    CardChartsComponent,
    BarsComponent,
    AreaComponent,
    CardTasksComponent,
    CardSprintComponent,
    CalendarComponent,
    ProjectListComponent,
    SprintListComponent,
    TaskListComponent,
    ProjectComponent,
    SprintComponent,
    TaskComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ProjectsRoutingModule
  ],
  exports: [
    SidebarComponent,
    LogoComponent,
    HeaderComponent,
    CardItemComponent,
    DividerComponent,
    BtnNoBorderComponent,
    CardGridComponent,
    CardWrapperComponent,
    BtnBorderComponent,
    CardChartsComponent,
    BarsComponent,
    AreaComponent,
    CardTasksComponent,
    CardSprintComponent,
    CalendarComponent,
    ProjectListComponent,
    SprintListComponent,
    TaskListComponent,
    ProjectComponent,
    SprintComponent,
    TaskComponent,
  ],
})
export class SharedModule {}
