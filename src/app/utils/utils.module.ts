import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './navigation/navigation.component';
import { FooterComponent } from './footer/footer.component';
import { HeroComponent } from './hero/hero.component';



@NgModule({
  declarations: [
    NavigationComponent,
    FooterComponent,
    HeroComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FooterComponent,
    NavigationComponent,
    HeroComponent
  ]
})
export class UtilsModule { }
