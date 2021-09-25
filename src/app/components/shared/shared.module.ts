import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { LogoComponent } from './sidebar/logo/logo.component';
import { HeaderComponent } from './header/header.component';
import { CardItemComponent } from './card/card-item/card-item.component';
import { DividerComponent } from './divider/divider.component';
import { BtnNoBorderComponent } from './buttons/btn-no-border/btn-no-border.component';
import { CardGridComponent } from './card/card-grid/card-grid.component';
import { CardWrapperComponent } from './card/card-wrapper/card-wrapper.component';
import { BtnBorderComponent } from './buttons/btn-border/btn-border.component';
import { CardChartsComponent } from './card/card-charts/card-charts.component';
import { BarsComponent } from './card/graphics/charts/bars/bars.component';
import { AreaComponent } from './card/graphics/charts/area/area.component';
import { TaskItemComponent } from './task/task-item/task-item.component';
import { CardTasksComponent } from './card/card-tasks/card-tasks.component';

@NgModule({
  declarations: [
    SidebarComponent,
    LogoComponent,
    HeaderComponent,
    CardItemComponent,
    DividerComponent,
    BtnNoBorderComponent,
    CardGridComponent,
    CardWrapperComponent,
    BtnBorderComponent,
    CardChartsComponent,
    BarsComponent,
    AreaComponent,
    TaskItemComponent,
    CardTasksComponent,
  ],
  imports: [CommonModule, AppRoutingModule],
  exports: [
    SidebarComponent,
    LogoComponent,
    HeaderComponent,
    CardItemComponent,
    DividerComponent,
    BtnNoBorderComponent,
    CardGridComponent,
    CardWrapperComponent,
    BtnBorderComponent,
    CardChartsComponent,
    BarsComponent,
    AreaComponent,
    TaskItemComponent,
    CardTasksComponent
  ],
})
export class SharedModule {}
