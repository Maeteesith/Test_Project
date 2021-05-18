import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '@pages/index';

const routes: Routes = [
  { path: "", component: HomeComponent, data: { breadcrumb: 'Home'} }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeModuleRouting { }
