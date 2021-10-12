import { UsersModule } from './components/features/users/users.module';
import { SprintsModule } from './components/features/sprints/sprints.module';
import { ProjectsModule } from './components/features/projects/projects.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './components/shared/shared.module';
import { FormsModule } from '@angular/forms';
import { TasksModule } from './components/features/tasks/tasks.module';
import { DashboardModule } from './components/features/dashboard/dashboard.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    HttpClientModule,
    FormsModule,
    ProjectsModule,
    SprintsModule,
    TasksModule,
    UsersModule,
    DashboardModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [AppRoutingModule],
})
export class AppModule {}
