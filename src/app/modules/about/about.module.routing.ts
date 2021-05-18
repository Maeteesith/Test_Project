import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from '@pages/index';

const routes: Routes = [
  { path: "", component: AboutComponent, data: { breadcrumb: 'about'} }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AboutModuleRouting { }
