import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectComponent } from './project/project.component';
import { ProjectListComponent } from './project-list/project-list.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { ProjectDetailComponent } from './project-detail/project-detail.component';
import { InMemoryDataService } from '../../services/in-memory-data.service';
import { ProjectFormComponent } from './project-form/project-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ProjectComponent,
    ProjectListComponent,
    ProjectDetailComponent,
    ProjectFormComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService),
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    ProjectComponent,
    ProjectListComponent,
    ProjectDetailComponent,
    ProjectFormComponent,
  ],
})
export class ProjectsModule {}
