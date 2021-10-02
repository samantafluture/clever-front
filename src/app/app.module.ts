import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/pages/dashboard/dashboard.component';
import { SharedModule } from './components/shared/shared.module';
import { CreateProjectComponent } from './components/pages/create-project/create-project.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListProjectsComponent } from './components/pages/list-projects/list-projects.component';
import { ViewProjectComponent } from './components/pages/view-project/view-project.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { CreateSprintComponent } from './components/pages/create-sprint/create-sprint.component';
import { ViewSprintComponent } from './components/pages/view-sprint/view-sprint.component';
import { CreateTaskComponent } from './components/pages/create-task/create-task.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    CreateProjectComponent,
    ListProjectsComponent,
    ViewProjectComponent,
    CreateSprintComponent,
    ViewSprintComponent,
    CreateTaskComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    DragDropModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
