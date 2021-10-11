import { ProjectsRoutingModule } from './../projects/projects-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { HttpClientModule } from '@angular/common/http';
import { InMemoryDataService } from '../../../services/in-memory-data.service';
import { SprintDetailComponent } from './sprint-detail/sprint-detail.component';
import { SprintFormComponent } from './sprint-form/sprint-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateSprintComponent } from '../../pages/create-sprint/create-sprint.component';
import { ViewSprintComponent } from '../../pages/view-sprint/view-sprint.component';
import { EditSprintComponent } from '../../pages/edit-sprint/edit-sprint.component';

@NgModule({
  declarations: [
    SprintDetailComponent,
    SprintFormComponent,
    CreateSprintComponent,
    ViewSprintComponent,
    EditSprintComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ProjectsRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService),
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    SprintDetailComponent,
    SprintFormComponent,
    CreateSprintComponent,
    ViewSprintComponent,
    EditSprintComponent
  ],
})
export class SprintsModule {}
