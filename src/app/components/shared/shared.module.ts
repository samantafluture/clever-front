import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { LogoComponent } from './sidebar/logo/logo.component';

@NgModule({
  declarations: [SidebarComponent, LogoComponent],
  imports: [CommonModule, AppRoutingModule],
  exports: [SidebarComponent, LogoComponent],
})
export class SharedModule {}
