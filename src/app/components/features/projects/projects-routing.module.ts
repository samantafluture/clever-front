import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateProjectComponent } from '../../pages/create-project/create-project.component';
import { CreateSprintComponent } from '../../pages/create-sprint/create-sprint.component';
import { CreateTaskComponent } from '../../pages/create-task/create-task.component';
import { EditProjectComponent } from '../../pages/edit-project/edit-project.component';
import { EditSprintComponent } from '../../pages/edit-sprint/edit-sprint.component';
import { EditTaskComponent } from '../../pages/edit-task/edit-task.component';
import { ListProjectsComponent } from '../../pages/list-projects/list-projects.component';
import { ViewProjectComponent } from '../../pages/view-project/view-project.component';
import { ViewSprintComponent } from '../../pages/view-sprint/view-sprint.component';

const routes: Routes = [
  {
    path: 'projetos',
    component: ListProjectsComponent,
  },
  {
    path: 'novo-projeto',
    component: CreateProjectComponent,
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
  // {
  //   path: '',
  //   children: [

  //     // {
  //     //   path: 'sprint',
  //     //   children: [
  //     //     {
  //     //       path: ':id',
  //     //       component: ViewSprintComponent,
  //     //     },
  //     //     {
  //     //       path: ':id/editar',
  //     //       component: EditSprintComponent,
  //     //     },
  //     //     {
  //     //       path: ':id/nova-tarefa',
  //     //       component: CreateTaskComponent,
  //     //     },
  //     //   ],
  //     // },
  //     // {
  //     //   path: 'tarefa',
  //     //   children: [
  //     //     {
  //     //       path: ':id/editar',
  //     //       component: EditTaskComponent,
  //     //     },
  //     //   ],
  //     // },
  //   ],
  // },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProjectsRoutingModule {}
