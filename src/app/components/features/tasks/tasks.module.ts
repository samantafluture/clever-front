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

@NgModule({
  declarations: [
    TaskFormComponent,
    CreateTaskComponent,
    EditTaskComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ProjectsRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService),
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    TaskFormComponent,
    CreateTaskComponent,
    EditTaskComponent
  ],
})
export class TasksModule {}
