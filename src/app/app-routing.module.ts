import { ViewSprintComponent } from './components/pages/view-sprint/view-sprint.component';
import { CreateSprintComponent } from './components/pages/create-sprint/create-sprint.component';
import { ViewProjectComponent } from './components/pages/view-project/view-project.component';
import { CreateProjectComponent } from './components/pages/create-project/create-project.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/pages/dashboard/dashboard.component';
import { ListProjectsComponent } from './components/pages/list-projects/list-projects.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
  },
  {
    path: 'novo-projeto',
    component: CreateProjectComponent,
  },
  {
    path: 'projetos',
    component: ListProjectsComponent,
  },
  {
    path: 'projeto',
    component: ViewProjectComponent,
  },
  {
    path: 'novo-sprint',
    component: CreateSprintComponent,
  },
  {
    path: 'sprint',
    component: ViewSprintComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
