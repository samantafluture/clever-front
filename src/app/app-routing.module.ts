import { EditProjectComponent } from './components/pages/edit-project/edit-project.component';
import { CreateTaskComponent } from './components/pages/create-task/create-task.component';
import { ViewSprintComponent } from './components/pages/view-sprint/view-sprint.component';
import { CreateSprintComponent } from './components/pages/create-sprint/create-sprint.component';
import { ViewProjectComponent } from './components/pages/view-project/view-project.component';
import { CreateProjectComponent } from './components/pages/create-project/create-project.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/pages/dashboard/dashboard.component';
import { ListProjectsComponent } from './components/pages/list-projects/list-projects.component';
import { EditSprintComponent } from './components/pages/edit-sprint/edit-sprint.component';
import { EditTaskComponent } from './components/pages/edit-task/edit-task.component';
import { LoginUserComponent } from './components/pages/login-user/login-user.component';
import { CreateUserComponent } from './components/pages/create-user/create-user.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
  {
    path: 'login',
    component: LoginUserComponent,
  },
  {
    path: 'novo-usuario',
    component: CreateUserComponent,
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
    path: 'projeto/:id',
    component: ViewProjectComponent,
  },
  {
    path: 'projeto/:id/editar',
    component: EditProjectComponent,
  },
  {
    path: 'projeto/:id/novo-sprint',
    component: CreateSprintComponent,
  },
  {
    path: 'sprint/:id',
    component: ViewSprintComponent,
  },
  {
    path: 'sprint/:id/editar',
    component: EditSprintComponent,
  },
  {
    path: 'sprint/:id/nova-tarefa',
    component: CreateTaskComponent,
  },
  {
    path: 'tarefa/:id/editar',
    component: EditTaskComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
