import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateUserComponent } from '../../pages/create-user/create-user.component';
import { LoginUserComponent } from '../../pages/login-user/login-user.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginUserComponent,
  },
  {
    path: 'novo',
    component: CreateUserComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsersRoutingModule {}
