import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
  declarations: [],
  imports: [CommonModule, SidebarComponent],
  exports: [SidebarComponent],
})
export class SharedModule {}
