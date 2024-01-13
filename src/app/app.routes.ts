import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'charts',
  },

  {
    path: 'charts',
    loadComponent: () => import('./pages/charts/charts.page').then( m => m.ChartsPage)
  },
];
