import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginFormComponent } from './components/features/users/login-form/login-form.component';
import { CreateUserComponent } from './components/pages/create-user/create-user.component';

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
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginFormComponent
  },
  {
    path: 'novo-usuario',
    component: CreateUserComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
