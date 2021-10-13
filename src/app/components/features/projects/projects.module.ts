import { ViewProjectComponent } from './../../pages/view-project/view-project.component';
import { ListProjectsComponent } from './../../pages/list-projects/list-projects.component';
import { EditProjectComponent } from './../../pages/edit-project/edit-project.component';
import { CreateProjectComponent } from '../../pages/create-project/create-project.component';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from '../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { ProjectDetailComponent } from './project-detail/project-detail.component';
import { InMemoryDataService } from '../../../services/in-memory-data.service';
import { ProjectFormComponent } from './project-form/project-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProjectsRoutingModule } from './projects-routing.module';
import { MatAutocompleteModule } from '@angular/material/autocomplete';

@NgModule({
  declarations: [
    ProjectDetailComponent,
    ProjectFormComponent,
    CreateProjectComponent,
    EditProjectComponent,
    ListProjectsComponent,
    ViewProjectComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ProjectsRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService),
    FormsModule,
    ReactiveFormsModule,
    MatAutocompleteModule
  ],
  exports: [
    ProjectDetailComponent,
    ProjectFormComponent,
    CreateProjectComponent,
    EditProjectComponent,
    ListProjectsComponent,
    ViewProjectComponent
  ],
})
export class ProjectsModule {}
