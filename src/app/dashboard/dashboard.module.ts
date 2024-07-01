import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavigationComponent } from '../utils/navigation/navigation.component';
import { UtilsModule } from '../utils/utils.module';



@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    UtilsModule
  ],
  exports: [
    DashboardComponent
  ]
})
export class DashboardModule { }
