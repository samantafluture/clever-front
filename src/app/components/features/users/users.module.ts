import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from 'src/app/services/in-memory-data.service';
import { SharedModule } from '../../shared/shared.module';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { LoginUserComponent } from '../../pages/login-user/login-user.component';
import { CreateUserComponent } from '../../pages/create-user/create-user.component';
import { UsersRoutingModule } from './users-routing.module';

@NgModule({
  declarations: [
    SignupFormComponent,
    LoginFormComponent,
    LoginUserComponent,
    CreateUserComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    UsersRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService),
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    SignupFormComponent,
    LoginFormComponent,
    LoginUserComponent,
    CreateUserComponent,
  ],
})
export class UsersModule {}
