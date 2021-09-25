import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/pages/dashboard/dashboard.component';
import { SharedModule } from './components/shared/shared.module';
import { CreateProjectComponent } from './components/pages/create-project/create-project.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    CreateProjectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
