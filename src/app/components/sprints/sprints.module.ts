import { SprintComponent } from './sprint/sprint.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { SharedModule } from '../shared/shared.module';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { HttpClientModule } from '@angular/common/http';
import { InMemoryDataService } from '../../services/in-memory-data.service';
import { SprintListComponent } from './sprint-list/sprint-list.component';

@NgModule({
  declarations: [SprintComponent, SprintListComponent],
  imports: [
    CommonModule,
    SharedModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService),
  ],
  exports: [SprintComponent, SprintListComponent],
})
export class SprintsModule {}
