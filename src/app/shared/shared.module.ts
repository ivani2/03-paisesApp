import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';

// import { AppRoutingModule } from '../app-routing.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    SidebarComponent
  ],
  imports: [
    RouterModule,
    // AppRoutingModule,
    CommonModule
  ],
  exports: [
    SidebarComponent
  ]
})
export class SharedModule { }
