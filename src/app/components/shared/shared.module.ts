import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { LogoComponent } from './sidebar/logo/logo.component';
import { HeaderComponent } from './header/header.component';
import { CardComponent } from './card/card.component';

@NgModule({
  declarations: [SidebarComponent, LogoComponent, HeaderComponent, CardComponent],
  imports: [CommonModule, AppRoutingModule],
  exports: [SidebarComponent, LogoComponent, HeaderComponent, CardComponent],
})
export class SharedModule {}
