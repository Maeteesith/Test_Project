import { NgModule } from '@angular/core';
import { HomeModuleRouting } from './home.module.routing';
import { HomeComponent } from '@pages/index';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    HomeModuleRouting
  ]
})
export class HomeModule { }
