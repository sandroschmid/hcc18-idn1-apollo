import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './core/component/not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: 'panel',
    loadChildren: './panel/panel.module#PanelModule',
  },
  {
    path: 'stats',
    loadChildren: './stats/stats.module#StatsModule',
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomeModule',
  },
  {
    path: 'hen-house',
    loadChildren: './hen-house/hen-house.module#HenHouseModule',
  },
  {
    path: 'family',
    loadChildren: './family/family.module#FamilyModule',
  },
  {
    path: '**',
    component: NotFoundComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
