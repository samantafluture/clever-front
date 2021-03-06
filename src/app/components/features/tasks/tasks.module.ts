import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from 'src/app/services/in-memory-data.service';
import { TaskFormComponent } from './task-form/task-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateTaskComponent } from '../../pages/create-task/create-task.component';
import { EditTaskComponent } from '../../pages/edit-task/edit-task.component';
import { ProjectsRoutingModule } from '../projects/projects-routing.module';
import { NewTaskComponent } from '../../pages/create-task/new-task/new-task.component';
import { MatAutocompleteModule } from '@angular/material/autocomplete';

@NgModule({
  declarations: [
    TaskFormComponent,
    CreateTaskComponent,
    EditTaskComponent,
    NewTaskComponent
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
    TaskFormComponent,
    CreateTaskComponent,
    EditTaskComponent,
    NewTaskComponent
  ],
})
export class TasksModule {}
