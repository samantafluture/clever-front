import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from 'src/app/services/in-memory-data.service';
import { SharedModule } from '../shared/shared.module';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { UserComponent } from './user/user.component';

@NgModule({
  declarations: [SignupFormComponent, UserComponent],
  imports: [
    CommonModule,
    SharedModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService),
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [SignupFormComponent],
})
export class UsersModule {}
