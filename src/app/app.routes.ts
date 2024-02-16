import { Auth } from '@angular/fire/auth';
import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadComponent: () =>
      import('./pages/home/home.page').then((m) => m.HomePage),
  },
  {
    path: 'login',
    providers: [Auth],
    loadComponent: () =>
      import('./pages/login/login.page').then(m => m.LoginPage)
  },

];
