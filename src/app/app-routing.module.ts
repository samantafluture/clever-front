import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./components/features/dashboard/dashboard.module').then(
        (m) => m.DashboardModule
      ),
  },
  {
    path: 'projeto',
    loadChildren: () =>
      import('./components/features/projects/projects.module').then(
        (m) => m.ProjectsModule
      ),
  },
  // {
  //   path: 'sprint',
  //   loadChildren: () =>
  //     import('./components/features/sprints/sprints.module').then(
  //       (m) => m.SprintsModule
  //     ),
  // },
  // {
  //   path: 'tarefa',
  //   loadChildren: () =>
  //     import('./components/features/tasks/tasks.module').then(
  //       (m) => m.TasksModule
  //     ),
  // },
  {
    path: 'usuario',
    loadChildren: () =>
      import('./components/features/users/users.module').then(
        (m) => m.UsersModule
      ),
  },
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
