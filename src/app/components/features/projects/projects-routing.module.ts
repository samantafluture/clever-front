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
    path: '',
    children: [
      {
        path: ':projetoId',
        component: ViewProjectComponent,
      },
      {
        path: ':projetoId/editar',
        component: EditProjectComponent,
      },
      {
        path: ':projetoId/novo-sprint',
        component: CreateSprintComponent,
      },
      {
        path: 'sprint',
        children: [
          {
            path: ':sprintId',
            component: ViewSprintComponent,
          },
          {
            path: ':sprintId/editar',
            component: EditSprintComponent,
          },
          {
            path: ':sprintId/nova-tarefa',
            component: CreateTaskComponent,
          },
        ],
      },
      {
        path: 'tarefa',
        children: [
          {
            path: ':tarefaId/editar',
            component: EditTaskComponent,
          },
        ],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProjectsRoutingModule {}
