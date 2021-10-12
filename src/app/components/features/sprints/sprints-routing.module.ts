import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateTaskComponent } from '../../pages/create-task/create-task.component';
import { EditSprintComponent } from '../../pages/edit-sprint/edit-sprint.component';
import { ViewSprintComponent } from '../../pages/view-sprint/view-sprint.component';

const routes: Routes = [
  {
    path: 'sprint',
    children: [
      {
        path: ':id',
        component: ViewSprintComponent,
      },
      {
        path: ':id/editar',
        component: EditSprintComponent,
      },
      {
        path: ':id/nova-tarefa',
        component: CreateTaskComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SprintsRoutingModule {}
