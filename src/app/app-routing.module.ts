import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    children: [
      {
        path: '', pathMatch: 'full', redirectTo: '/home'
      },
      {
        path: 'home',loadChildren: () => import("./modules/home/home.module").then((m) => m.HomeModule)
      },
      {
        path: 'about', loadChildren: () => import("./modules/about/about.module").then((m) => m.AboutModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
