import { NgModule } from '@angular/core';
import { AboutModuleRouting } from './about.module.routing';
import { AboutComponent } from '@pages/index';

@NgModule({
  declarations: [
    AboutComponent
  ],
  imports: [
    AboutModuleRouting
  ]
})
export class AboutModule { }
